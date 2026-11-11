import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/LanguageProvider";

interface SliderProps {
  children: ReactNode;
  /** Accessible name of the carousel. */
  label: string;
  /** Width of one slide. Defaults to 1 slide on phone, 2 on tablet, 3 on desktop. */
  itemClassName?: string;
  className?: string;
}

const DEFAULT_ITEM =
  "basis-[86%] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]";

/**
 * Horizontal carousel.
 * Touch: native swipe. Mouse: click and drag like a finger, with a small throw.
 * Keyboard: left and right arrows. Dots show where you are.
 */
export default function Slider({ children, label, itemClassName = DEFAULT_ITEM, className }: SliderProps) {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ down: false, moved: false, startX: 0, startScroll: 0, lastX: 0, lastT: 0, velocity: 0 });

  const step = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return (track.children[0] as HTMLElement).offsetWidth + gap;
  };

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const s = (track.children[0] as HTMLElement).offsetWidth + gap;
    const visible = Math.max(1, Math.floor((track.clientWidth + gap + 1) / s));
    const max = track.scrollWidth - track.clientWidth;
    setPerView(visible);
    const idx = track.scrollLeft >= max - 4 ? slides.length - visible : Math.round(track.scrollLeft / s);
    setActive(Math.max(0, idx));
  }, [slides.length]);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [measure]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.min(Math.max(index, 0), slides.length - 1);
    const target = track.children[i] as HTMLElement | undefined;
    if (target) track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  // ---- Mouse drag (touch keeps the native swipe) ----
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const track = trackRef.current!;
    drag.current = { down: true, moved: false, startX: e.clientX, startScroll: track.scrollLeft, lastX: e.clientX, lastT: performance.now(), velocity: 0 };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) < 6) return;
    const track = trackRef.current!;
    if (!d.moved) {
      d.moved = true;
      setDragging(true);
      track.setPointerCapture(e.pointerId);
    }
    track.scrollLeft = d.startScroll - dx;
    const now = performance.now();
    d.velocity = (e.clientX - d.lastX) / Math.max(1, now - d.lastT);
    d.lastX = e.clientX;
    d.lastT = now;
  };

  const endDrag = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    if (!d.moved) return;
    const track = trackRef.current!;
    if (track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
    setDragging(false);
    // A quick flick moves at least one slide in the throw direction
    const s = step();
    const projected = track.scrollLeft - d.velocity * 150;
    let target = Math.round(projected / s);
    const current = d.startScroll / s;
    if (Math.abs(d.velocity) > 0.35) target = d.velocity < 0 ? Math.max(target, Math.floor(current) + 1) : Math.min(target, Math.ceil(current) - 1);
    goTo(target);
  };

  // A drag must not open the link under the cursor
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const pages = Math.max(1, slides.length - perView + 1);

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        onScroll={measure}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
        }}
        className={cn(
          "flex gap-6 overflow-x-auto overscroll-x-contain px-1 pt-3 pb-4 -mx-1 no-scrollbar rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
          dragging ? "cursor-grabbing select-none snap-none" : "cursor-grab snap-x snap-mandatory scroll-smooth"
        )}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={cn("shrink-0 grow-0 min-w-0 snap-start flex", itemClassName)}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
          >
            <div className="w-full min-w-0 flex flex-col">{slide}</div>
          </div>
        ))}
      </div>

      {pages > 1 && (
        <div className="mt-2 flex items-center justify-center gap-1.5">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${t({ en: "Go to slide", fr: "Aller à la carte" })} ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-emerald-500" : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-emerald-300"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** Section title in the original portfolio style. */
export function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-2">
      <h2 id={`${id}-title`} className="text-3xl font-bold mb-2 uppercase">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  );
}
