import { FiCode, FiCpu, FiDatabase, FiLayout, FiServer, FiShield, FiZap } from "react-icons/fi";
import { FaDocker } from "react-icons/fa";
import Slider, { SectionHeader } from "./Slider";
import { useI18n } from "@/i18n/LanguageProvider";
import { skillGroups } from "@/content/skills";

const icons: Record<string, JSX.Element> = {
  languages: <FiCode />,
  frontend: <FiLayout />,
  backend: <FiServer />,
  data: <FiDatabase />,
  ai: <FiZap />,
  security: <FiShield />,
  devops: <FaDocker />,
  engine: <FiCpu />,
};

export default function SkillsSection() {
  const { t } = useI18n();

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-12">
      <SectionHeader
        id="skills"
        title={t({ en: "Skills", fr: "Compétences" })}
        subtitle={t({
          en: "Only what I have used at work or in a project shown here",
          fr: "Seulement ce que j'ai utilisé au travail ou dans un projet présenté ici",
        })}
      />

      <Slider label={t({ en: "Skills", fr: "Compétences" })}>
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-lg text-emerald-600 dark:text-emerald-400">
                {icons[group.id]}
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-neutral-900 dark:text-white">{t(group.title)}</h3>
                <p className="text-xs text-neutral-500 leading-snug">{t(group.context)}</p>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Slider>
    </section>
  );
}
