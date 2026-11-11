import { TextAnimate } from "./magicui/text-animate";
import { GlowingEffect } from "./ui/glowing-effect";
import Slider, { SectionHeader } from "./Slider";
import { settings } from "@/config/settings";
import { useI18n } from "@/i18n/LanguageProvider";
import { experience, formatDuration, formatPeriod, monthsBetween, type ExperienceItem } from "@/content/experience";

function TimelineItem({ job }: { job: ExperienceItem }) {
  const { t, lang } = useI18n();
  return (
    <div className="relative w-full h-full group pt-7">
      {/* Horizontal timeline: dotted line + pulsing dot */}
      <div className="absolute top-[5px] left-0 -right-6 border-t-2 border-dotted border-gray-300 dark:border-gray-600" />
      <div className="absolute top-0 left-6">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-3 w-3 animate-ping rounded-2xl bg-gray-400 opacity-75 group-hover:bg-emerald-400" />
          <span className="relative inline-flex h-3 w-3 rounded-2xl bg-emerald-500 group-hover:bg-emerald-400 transition-colors duration-300" />
        </span>
      </div>

      <div className="relative h-[calc(100%-1.75rem)] rounded-2xl border p-2 md:p-3 group-hover:border-emerald-200 dark:group-hover:border-emerald-700 transition-colors duration-300">
        {settings.experience.showGlowingEffect && (
          <GlowingEffect spread={20} glow={true} disabled={false} proximity={50} inactiveZone={0.01} />
        )}
        <div className="relative flex h-full flex-col gap-3 overflow-hidden rounded-xl p-4 md:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-lg text-gray-700 dark:text-gray-400">{job.company}</p>
            {settings.experience.showCompanyLogos && job.logoPath && (
              <img
                src={job.logoPath}
                alt=""
                draggable={false}
                className="h-8 w-8 rounded object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
          </div>
          <h3 className="font-bold text-emerald-600 -mt-2">
            {settings.experience.showAnimations ? (
              <TextAnimate key={lang} animation="blurInUp" by="character" once>
                {t(job.title)}
              </TextAnimate>
            ) : (
              t(job.title)
            )}
          </h3>
          <p className="text-sm text-gray-500">{t(job.summary)}</p>
          <span className="block text-sm text-gray-400">
            <span className="capitalize">{formatPeriod(job.from, lang)}</span> — {formatPeriod(job.to, lang)} ·{" "}
            {formatDuration(monthsBetween(job.from, job.to), lang)}
          </span>

          <div>
            <p className="text-xs text-gray-500 mb-1">{t({ en: "Technologies:", fr: "Technologies :" })}</p>
            <div className="flex flex-wrap gap-1">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs rounded-2xl transition-colors duration-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">{t({ en: "Key Achievements:", fr: "Réalisations clés :" })}</p>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-0.5">
              {t(job.achievements).map((a) => (
                <li key={a} className="flex items-start gap-1">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { t } = useI18n();
  return (
    <div className="pt-5 mb-6" id="experience">
      <SectionHeader
        id="experience"
        title={t({ en: "Experience", fr: "Expérience" })}
        subtitle={t({ en: "My professional journey and key accomplishments", fr: "Mon parcours professionnel et mes principales réalisations" })}
      />
      <Slider
        label={t({ en: "Professional experience", fr: "Expérience professionnelle" })}
        itemClassName="basis-[90%] sm:basis-[calc((100%-1.5rem)/2)]"
      >
        {experience.map((job) => (
          <TimelineItem key={job.company} job={job} />
        ))}
      </Slider>
    </div>
  );
}
