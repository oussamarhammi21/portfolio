import { FiCode, FiMapPin, FiShield, FiTool } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import Slider, { SectionHeader } from "./Slider";
import { useI18n, type Bi } from "@/i18n/LanguageProvider";
import { experience, formatDuration, totalExperienceMonths } from "@/content/experience";

const card =
  "h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 sm:p-6 shadow-sm";

const focusAreas: { icon: JSX.Element; title: Bi; text: Bi; color: string }[] = [
  {
    icon: <FiCode />,
    title: { en: "Software development", fr: "Développement logiciel" },
    text: {
      en: "Full-stack web and mobile apps, from database to interface, deployed and used.",
      fr: "Applications web et mobiles full-stack, de la base de données à l'interface, déployées et utilisées.",
    },
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: <FiShield />,
    title: { en: "Security governance", fr: "Gouvernance de la sécurité" },
    text: {
      en: "Policies, directives, procedures and risk analysis based on NIST and ISO 27001/27002.",
      fr: "Politiques, directives, procédures et analyses de risque selon NIST et ISO 27001/27002.",
    },
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: <FiTool />,
    title: { en: "Tools on demand", fr: "Outils sur mesure" },
    text: {
      en: "I start from a real need and build the tool that solves it: automation, dashboards, internal apps.",
      fr: "Je pars d'un besoin réel et je bâtis l'outil qui le règle : automatisation, tableaux de bord, applications internes.",
    },
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
  },
];

const education: { icon: JSX.Element; school: string; degree: Bi; period: Bi; details: Bi }[] = [
  {
    icon: <FaUniversity />,
    school: "Université de Sherbrooke",
    degree: { en: "B.Sc. in Computer Science", fr: "Baccalauréat en informatique" },
    period: { en: "Graduated 2026", fr: "Diplômé en 2026" },
    details: {
      en: "Specialization in cybersecurity, with courses in AI, software engineering and computer graphics.",
      fr: "Spécialisation en cybersécurité, avec des cours en IA, génie logiciel et infographie.",
    },
  },
  {
    icon: <MdSchool />,
    school: "Cégep Édouard-Montpetit",
    degree: { en: "DEC in Computer Science Technology", fr: "DEC en techniques de l'informatique" },
    period: { en: "2020 to 2023", fr: "2020 à 2023" },
    details: {
      en: "Programming, databases, web and mobile development. Capstone: Super Infinite Cards.",
      fr: "Programmation, bases de données, développement web et mobile. Projet de fin d'études : Super Infinite Cards.",
    },
  },
];

export default function AboutMe() {
  const { t, lang } = useI18n();
  const internships = experience.filter((e) => e.to !== "present").length;

  const facts = [
    { label: t({ en: "Experience", fr: "Expérience" }), value: formatDuration(totalExperienceMonths(), lang) },
    { label: t({ en: "Internships", fr: "Stages" }), value: String(internships) },
    { label: t({ en: "Languages", fr: "Langues" }), value: t({ en: "French, English", fr: "Français, anglais" }) },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-12">
      <SectionHeader
        id="about"
        title={t({ en: "About", fr: "À propos" })}
        subtitle={t({ en: "Who I am, what I do, where I studied", fr: "Qui je suis, ce que je fais, où j'ai étudié" })}
      />

      <Slider label={t({ en: "About me", fr: "À propos de moi" })}>
        {/* Profile */}
        <article className={card}>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Oussama Rhammi</h3>
          <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            {t({ en: "Full-stack developer · Security governance", fr: "Développeur full-stack · Gouvernance de la sécurité" })}
          </p>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t({
              en: "Computer science graduate with a cybersecurity specialization. I work in security governance at Santé Québec and build software on the side, some of it used every day.",
              fr: "Diplômé en informatique avec une spécialisation en cybersécurité. Je travaille en gouvernance de la sécurité à Santé Québec et je développe des logiciels à côté, dont certains servent tous les jours.",
            })}
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
            <FiMapPin className="shrink-0" />
            {t({ en: "Montréal, QC · open to relocation", fr: "Montréal, QC · ouvert à la relocalisation" })}
          </p>
          <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-neutral-200 dark:border-neutral-800 pt-4">
            {facts.map((f) => (
              <div key={f.label} className="min-w-0">
                <dt className="text-[11px] uppercase tracking-wide text-neutral-500">{f.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-neutral-900 dark:text-white break-words">{f.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        {/* What I do */}
        <article className={card}>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
            {t({ en: "What I do", fr: "Ce que je fais" })}
          </h3>
          <ul className="space-y-4">
            {focusAreas.map((a) => (
              <li key={a.title.en} className="flex gap-3">
                <span className={`mt-0.5 h-9 w-9 shrink-0 grid place-items-center rounded-xl ${a.color}`}>{a.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-neutral-900 dark:text-white">{t(a.title)}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug">{t(a.text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* Education */}
        {education.map((e) => (
          <article key={e.school} className={card}>
            <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-2xl text-blue-600 dark:text-blue-400">
              {e.icon}
            </span>
            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{t({ en: "Education", fr: "Formation" })}</p>
            <h3 className="mt-1 text-lg font-bold text-neutral-900 dark:text-white">{e.school}</h3>
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t(e.degree)}</p>
            <p className="mt-1 text-xs text-neutral-500">{t(e.period)}</p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t(e.details)}</p>
          </article>
        ))}
      </Slider>
    </section>
  );
}
