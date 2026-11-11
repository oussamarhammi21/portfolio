import { FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FlipWords } from "@/components/ui/flip-words";
import { SectionHeader } from "@/components/Slider";
import { useI18n } from "@/i18n/LanguageProvider";

const EMAIL = "oussamarhammi2020@hotmail.com";

const links = [
  { title: "LinkedIn", url: "https://linkedin.com/in/oussama-rhammi-252177106", icon: <SiLinkedin /> },
  { title: "GitHub", url: "https://github.com/oussamarhammi21", icon: <SiGithub /> },
];

export default function Contact(): JSX.Element {
  const { t, lang } = useI18n();

  const jokes =
    lang === "fr"
      ? [
          "Encore en train d'hésiter? Prends ton temps!",
          "J'attends... mais pas éternellement.",
          "Bon, peut-être éternellement.",
          "Je réponds plus vite que je débogue. Presque.",
          "Ton clavier s'ennuie de toi.",
          "À toi de jouer...",
        ]
      : [
          "Still thinking? Take your time!",
          "I'll wait... but not forever.",
          "Okay, maybe forever.",
          "I reply faster than I debug. Almost.",
          "Your keyboard misses you.",
          "Your move...",
        ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12">
      <SectionHeader id="contact" title={t({ en: "Contact", fr: "Contact" })} />

      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-950 px-5 py-10 sm:py-14 text-center">
        <p className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-white">
          {t({ en: "A project, a job, a question? Write to me.", fr: "Un projet, un poste, une question? Écris-moi." })}
        </p>
        <div className="mt-2 h-7 text-sm text-neutral-500">
          <FlipWords key={lang} words={jokes} duration={2500} />
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 inline-flex max-w-full items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
        >
          <FiMail className="shrink-0" />
          <span className="truncate">{EMAIL}</span>
        </a>

        <div className="mt-6 flex justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.title}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.title}
              title={l.title}
              className="h-11 w-11 grid place-items-center rounded-full border border-neutral-300 dark:border-neutral-700 text-lg hover:text-emerald-500 hover:border-emerald-400 transition-colors"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {t({ en: "Built with", fr: "Fait avec" })}{" "}
        <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-emerald-500">
          shadcn/ui
        </a>
        ,{" "}
        <a href="https://magicui.design/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-emerald-500">
          Magic UI
        </a>{" "}
        {t({ en: "and", fr: "et" })}{" "}
        <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-emerald-500">
          Aceternity UI
        </a>
        . © {new Date().getFullYear()} Oussama Rhammi
      </p>
    </section>
  );
}
