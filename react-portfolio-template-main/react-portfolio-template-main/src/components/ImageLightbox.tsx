// components/ImageLightbox.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export interface LightboxImage {
  src: string;
  title: string;
  desc?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  /** Index of the image shown, or null when the lightbox is closed. */
  index: number | null;
  onIndexChange: (index: number | null) => void;
}

const controlClass =
  "flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors";

export default function ImageLightbox({ images, index, onIndexChange }: ImageLightboxProps) {
  const open = index !== null;
  const count = images.length;
  const current = open ? images[index] : null;

  const go = (step: number) => {
    if (index === null) return;
    onIndexChange((index + step + count) % count);
  };

  // Arrow keys move between images; Escape is handled by Radix.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && onIndexChange(null)}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 focus:outline-none"
          onClick={(e) => {
            // A click on the dark background (not on the image or a control) closes the lightbox.
            if (e.target === e.currentTarget) onIndexChange(null);
          }}
        >
          {current && (
            <>
              <DialogPrimitive.Close aria-label="Close" className={`${controlClass} absolute right-4 top-4 h-11 w-11`}>
                <X className="h-6 w-6" />
              </DialogPrimitive.Close>

              {count > 1 && (
                <>
                  <button type="button" aria-label="Previous image" onClick={() => go(-1)} className={`${controlClass} absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2`}>
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button type="button" aria-label="Next image" onClick={() => go(1)} className={`${controlClass} absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2`}>
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              <img
                src={current.src}
                alt={current.title}
                className="max-h-[78vh] max-w-[85vw] rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 max-w-md text-center text-white">
                <DialogPrimitive.Title className="font-semibold">{current.title}</DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-sm text-white/70">
                  {current.desc ?? ""} {count > 1 && `· ${index! + 1} / ${count}`}
                </DialogPrimitive.Description>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
