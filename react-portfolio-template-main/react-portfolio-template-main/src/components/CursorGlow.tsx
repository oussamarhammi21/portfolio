import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, .cursor-pointer, .cursor-grab';

/**
 * Soft glow behind the content + a ring that trails the pointer.
 * Mouse only (no touch), skipped when the visitor asks for reduced motion.
 * The real cursor stays visible: this only adds a cue, it never replaces it.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!fine || reduced || !glow || !ring) return;

    let mx = -500, my = -500;     // pointer
    let gx = mx, gy = my;         // glow (slow)
    let rx = mx, ry = my;         // ring (fast)
    let scale = 1, targetScale = 1;
    let visible = false;
    let raf = 0;

    const show = (v: boolean) => {
      visible = v;
      glow.style.opacity = v ? "1" : "0";
      ring.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        gx = rx = mx;
        gy = ry = my;
        show(true);
      }
      const hot = (e.target as Element | null)?.closest?.(INTERACTIVE);
      targetScale = hot ? 1.8 : 1;
      ring.dataset.hot = hot ? "1" : "0";
    };
    const onDown = () => (targetScale = 0.7);
    const onUp = () => (targetScale = ring.dataset.hot === "1" ? 1.8 : 1);
    const onLeave = () => show(false);

    const tick = () => {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      rx += (mx - rx) * 0.25;
      ry += (my - ry) * 0.25;
      scale += (targetScale - scale) * 0.2;
      glow.style.transform = `translate3d(${gx - 300}px, ${gy - 300}px, 0)`;
      ring.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Behind everything (negative z-index): lights the page background, not the cards */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(34,211,238,0.07) 35%, rgba(0,0,0,0) 70%)",
        }}
      />
      {/* Ring on top, never blocks clicks */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-8 w-8 rounded-full border-2 border-emerald-400/80 opacity-0 transition-[opacity,background-color] duration-300 data-[hot='1']:bg-emerald-400/10 shadow-[0_0_16px_rgba(16,185,129,0.45)]"
      />
    </>
  );
}
