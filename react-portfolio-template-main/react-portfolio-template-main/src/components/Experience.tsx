import Slider, { SectionHeader } from "./Slider";
import { useI18n } from "@/i18n/LanguageProvider";
import { experience, formatDuration, formatPeriod, monthsBetween } from "@/content/experience";

export default function ExperienceSection() {
  const { t, lang } = useI18n();

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-12">
      <SectionHeader
        id="experience"
        title={t({ en: "Experience", fr: "Expérience" })}
        subtitle={t({ en: "From the most recent", fr: "De la plus récente à la plus ancienne" })}
      />

      <Slider
        label={t({ en: "Professional experience", fr: "Expérience professionnelle" })}
        itemClassName="basis-[90%] sm:basis-[calc((100%-1rem)/2)]"
      >
        {experience.map((job) => (
          <article
            key={job.company}
            className="h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 sm:p-6 shadow-sm hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
          >
            <header className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm text-neutral-500">
                  {job.company} · {job.location}
                </p>
                <h3 className="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400 leading-snug">{t(job.title)}</h3>
              </div>
              {job.logoPath && (
                <img
                  src={job.logoPath}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 shrink-0 rounded object-contain bg-white"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
            </header>

            <p className="mt-2 text-xs text-neutral-500">
              <span className="capitalize">{formatPeriod(job.from, lang)}</span> –{" "}
              <span>{formatPeriod(job.to, lang)}</span> · {formatDuration(monthsBetween(job.from, job.to), lang)}
              {job.to === "present" && (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t({ en: "Current", fr: "Actuel" })}
                </span>
              )}
            </p>

            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{t(job.summary)}</p>

            <ul className="mt-3 space-y-1.5">
              {t(job.achievements).map((a) => (
                <li key={a} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
