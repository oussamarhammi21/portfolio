import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/components/theme-provider";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Stats(): JSX.Element {
  const { theme } = useTheme();
  const { t } = useI18n();

  const rows = [
    { label: t({ en: "Based in", fr: "Basé à" }), value: t({ en: "Montréal, QC · open to relocation", fr: "Montréal, QC · ouvert à la relocalisation" }) },
    { label: t({ en: "Focus", fr: "Spécialités" }), value: t({ en: "Full-stack development · Cybersecurity", fr: "Développement full-stack · Cybersécurité" }) },
    { label: t({ en: "Coding since", fr: "Je code depuis" }), value: "2020" },
    { label: t({ en: "Projects in production", fr: "Projets en production" }), value: t({ en: "Tarif (used every day at Installation Presto)", fr: "Tarif (utilisé chaque jour chez Installation Presto)" }) },
    { label: t({ en: "Currently building", fr: "En construction" }), value: "Foldio" },
    { label: t({ en: "Languages", fr: "Langues" }), value: t({ en: "French, English", fr: "Français, anglais" }) },
    { label: t({ en: "Countries visited", fr: "Pays visités" }), value: "6" },
  ];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold">Stats</h1>

      <section className="mt-8">
        <h2 className="text-sm mb-3 font-bold uppercase tracking-widest text-neutral-500">
          {t({ en: "A few facts", fr: "Quelques faits" })}
        </h2>
        <dl className="divide-y divide-neutral-200 dark:divide-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          {rows.map((r) => (
            <div key={r.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
              <dt className="font-medium">{r.label}</dt>
              <dd className="text-neutral-600 dark:text-neutral-400 text-right">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="text-sm mb-3 font-bold uppercase tracking-widest text-neutral-500">
          {t({ en: "GitHub contributions", fr: "Contributions GitHub" })}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
          <GitHubCalendar
            username="oussamarhammi21"
            blockSize={11}
            blockRadius={4}
            colorScheme={theme === "light" ? "light" : "dark"}
          />
        </div>
      </section>
    </main>
  );
}
