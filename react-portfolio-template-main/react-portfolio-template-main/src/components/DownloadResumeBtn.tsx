import { useState, useRef, useEffect } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { downloadResume } from "@/hooks/useResumeDownload";

type Lang = "fr" | "en";

export default function ResumeButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fermer si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Lang) => {
    setOpen(false);
    downloadResume(lang);
  };

  return (
    <div ref={ref} className="relative">
      <HoverBorderGradient
        containerClassName="rounded-2xl text-sm"
        as="button"
        onClick={() => setOpen((prev) => !prev)}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2"
      >
        <span>Download Resume</span>
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </HoverBorderGradient>

      {open && (
        <div className="absolute top-full mt-2 left-0 z-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg overflow-hidden min-w-[160px]">
          {(["fr", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => handleSelect(l)}
              className="w-full text-left px-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
            >
              <span>{l === "fr" ? "🇫🇷" : "🇬🇧"}</span>
              <span>{l === "fr" ? "Français" : "English"}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}