import { useEffect, useRef } from "react";

/**
 * Soft light that follows the mouse, behind the content.
 * Follows the pointer exactly (no easing, so no lag). Mouse only.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    // Works on touch laptops too: it wakes up on the first real mouse move.
    // Kept with "reduce motion": the light only follows the pointer, it does not animate.
    if (!window.matchMedia("(any-pointer: fine)").matches) return;

    let x = 0, y = 0, raf = 0;

    const paint = () => {
      raf = 0;
      glow.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      glow.style.opacity = "1";
      // One update per frame, at the latest pointer position
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const onLeave = () => (glow.style.opacity = "0");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    // Behind everything (negative z-index): lights the page background, not the cards
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(34,211,238,0.08) 35%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}
