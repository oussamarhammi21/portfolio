import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
  "basis-[86%] sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]";

/**
 * Horizontal carousel built on native scroll snapping:
 * swipe on touch screens, arrows / dots / keyboard on desktop.
 */
export default function Slider({ children, label, itemClassName = DEFAULT_ITEM, className }: SliderProps) {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [perView, setPerView] = useState(1);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const first = track.children[0] as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const step = first.offsetWidth + gap;
    // Count only fully visible slides (a peeking slide does not count)
    const visible = Math.max(1, Math.floor((track.clientWidth + gap + 1) / step));
    const max = track.scrollWidth - track.clientWidth;
    setPerView(visible);
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft >= max - 4);
    // At the very end, highlight the last page even if slides don't divide evenly
    const idx = track.scrollLeft >= max - 4 ? slides.length - visible : Math.round(track.scrollLeft / step);
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
    const target = track.children[Math.min(Math.max(index, 0), slides.length - 1)] as HTMLElement | undefined;
    if (target) track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const pages = Math.max(1, slides.length - perView + 1);
  const showControls = slides.length > perView;

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        onScroll={measure}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); goTo(active + 1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); goTo(active - 1); }
        }}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth overscroll-x-contain pb-2 no-scrollbar focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={cn("shrink-0 grow-0 snap-start flex", itemClassName)}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${slides.length}`}
          >
            <div className="w-full min-w-0 flex flex-col">{slide}</div>
          </div>
        ))}
      </div>

      {showControls && (
        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === active ? "w-6 bg-emerald-500" : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs tabular-nums text-neutral-500 mr-1">
              {Math.min(active + perView, slides.length)} / {slides.length}
            </span>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={atStart}
              aria-label={t({ en: "Previous", fr: "Précédent" })}
              className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={atEnd}
              aria-label={t({ en: "Next", fr: "Suivant" })}
              className="h-9 w-9 grid place-items-center rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Common section header used on the home page. */
export function SectionHeader({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
    </div>
  );
}
