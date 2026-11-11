import { Children, useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  children: ReactNode;
  /** Accessible name of the carousel. */
  label: string;
  /** Width of one slide. Defaults to 1 slide on phone, 2 on tablet, 3 on desktop. */
  itemClassName?: string;
  className?: string;
  /** Scroll by itself (default). Turn off where slides hold videos. */
  autoPlay?: boolean;
  /** Auto scroll speed in px per second. */
  speed?: number;
}

const DEFAULT_ITEM =
  "basis-[86%] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]";

const COPIES = 3; // middle copy is the "real" one, the two others make the loop seamless

/**
 * Infinite carousel.
 * Scrolls slowly by itself, loops forever, pauses while the mouse is over it.
 * Drag with the mouse or a finger to move faster; the throw slows back to the normal speed.
 */
export default function Slider({
  children,
  label,
  itemClassName = DEFAULT_ITEM,
  className,
  autoPlay = true,
  speed = 28,
}: SliderProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const count = slides.length;

  const state = useRef({
    offset: 0, // px into one copy, always in [0, setWidth)
    setWidth: 0,
    boost: 0, // extra speed from a throw, px/s, decays to 0
    hover: false,
    visible: true,
    drag: { down: false, moved: false, lastX: 0, lastT: 0, velocity: 0, pointerId: -1 },
  });

  // Measure one copy of the slides
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined;
      const firstClone = track.children[count] as HTMLElement | undefined;
      if (first && firstClone) state.current.setWidth = firstClone.offsetLeft - first.offsetLeft;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [count]);

  // Clones are for the eye only: hide them from screen readers and the Tab key
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    [...track.children].forEach((child, i) => {
      if (i >= count && i < count * 2) return;
      child.setAttribute("aria-hidden", "true");
      child.querySelectorAll<HTMLElement>("a, button, input, [tabindex]").forEach((el) => (el.tabIndex = -1));
    });
  }, [count, children]);

  // Pause when off screen
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const io = new IntersectionObserver(([entry]) => (state.current.visible = entry.isIntersecting));
    io.observe(viewport);
    return () => io.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    // Always on, even when the OS asks to reduce animations: the scroll is slow and pauses on hover
    const base = autoPlay ? speed : 0;
    let raf = 0;
    let last = performance.now();
    let current = base; // smoothed auto speed (eases to 0 on hover)

    const tick = (now: number) => {
      const s = state.current;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (s.setWidth > 0 && s.visible) {
        if (!s.drag.down) {
          const target = s.hover ? 0 : base;
          current += (target - current) * Math.min(1, dt * 4);
          s.offset += (current + s.boost) * dt;
          s.boost *= Math.pow(0.04, dt); // throw fades out in about a second
          if (Math.abs(s.boost) < 1) s.boost = 0;
        }
        s.offset = ((s.offset % s.setWidth) + s.setWidth) % s.setWidth;
        if (trackRef.current) trackRef.current.style.transform = `translate3d(${-(s.setWidth + s.offset)}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoPlay, speed]);

  // ---- Drag (mouse and touch) ----
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const d = state.current.drag;
    Object.assign(d, { down: true, moved: false, lastX: e.clientX, lastT: performance.now(), velocity: 0, pointerId: e.pointerId });
    state.current.boost = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = state.current;
    const d = s.drag;
    if (!d.down || e.pointerId !== d.pointerId) return;
    const dx = e.clientX - d.lastX;
    if (!d.moved) {
      if (Math.abs(dx) < 6) return;
      d.moved = true;
      viewportRef.current?.setPointerCapture(e.pointerId);
    }
    const now = performance.now();
    const dt = Math.max(1, now - d.lastT) / 1000;
    s.offset -= dx;
    d.velocity = d.velocity * 0.6 + (-dx / dt) * 0.4;
    d.lastX = e.clientX;
    d.lastT = now;
  };

  const endDrag = (e: React.PointerEvent) => {
    const s = state.current;
    const d = s.drag;
    if (!d.down || e.pointerId !== d.pointerId) return;
    d.down = false;
    if (viewportRef.current?.hasPointerCapture(e.pointerId)) viewportRef.current.releasePointerCapture(e.pointerId);
    // Keep the throw: faster in the direction of the swipe, capped
    if (d.moved && performance.now() - d.lastT < 120) s.boost = Math.max(-2500, Math.min(2500, d.velocity));
  };

  // A drag must not open the link under the pointer
  const onClickCapture = (e: React.MouseEvent) => {
    if (state.current.drag.moved) {
      e.preventDefault();
      e.stopPropagation();
      state.current.drag.moved = false;
    }
  };

  const nudge = (dir: 1 | -1) => (state.current.boost += dir * 900);

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={viewportRef}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") state.current.hover = true;
        }}
        onPointerLeave={() => (state.current.hover = false)}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); nudge(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); nudge(-1); }
        }}
        // Clip sideways only, so hover effects keep room above and below
        style={{ overflowX: "clip", touchAction: "pan-y" }}
        className="py-3 -my-3 cursor-grab active:cursor-grabbing select-none rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <div ref={trackRef} className="flex gap-6 will-change-transform">
          {Array.from({ length: COPIES }, (_, copy) =>
            slides.map((slide, i) => (
              <div
                key={`${copy}-${i}`}
                className={cn("shrink-0 grow-0 min-w-0 flex", itemClassName)}
                role={copy === 1 ? "group" : undefined}
                aria-roledescription={copy === 1 ? "slide" : undefined}
                aria-label={copy === 1 ? `${i + 1} / ${count}` : undefined}
              >
                <div className="w-full min-w-0 flex flex-col">{slide}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/** Section title in the original portfolio style. */
export function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 id={`${id}-title`} className="text-3xl font-bold mb-2 uppercase">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  );
}
