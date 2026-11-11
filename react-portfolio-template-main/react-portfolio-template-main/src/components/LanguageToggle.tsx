import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/** FR | EN switch. */
export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      role="group"
      aria-label={lang === "fr" ? "Langue du site" : "Site language"}
      className={cn(
        "relative z-[70] inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 p-0.5 text-xs font-semibold",
        className
      )}
    >
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "px-2.5 py-1 rounded-full transition-colors",
            lang === l
              ? "bg-emerald-600 text-white"
              : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
