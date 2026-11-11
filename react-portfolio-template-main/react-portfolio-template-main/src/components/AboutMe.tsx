import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FiMapPin, FiCalendar, FiCode, FiDatabase, FiGlobe, FiUsers, FiCpu, FiLayers, FiServer, FiMail } from "react-icons/fi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdSecurity, MdDeveloperMode, MdWork, MdSchool } from "react-icons/md";
import { FaGamepad, FaMobileAlt, FaUniversity } from "react-icons/fa";
import Slider from "./Slider";
import { useI18n, type Bi } from "@/i18n/LanguageProvider";
import { experience, formatDuration, totalExperienceMonths } from "@/content/experience";

const expertiseAreas: { title: Bi; description: Bi; skills: string[]; icon: JSX.Element; color: string }[] = [
  {
    title: { en: "Full-Stack Development", fr: "Développement full-stack" },
    description: { en: "Web apps and backends used in production", fr: "Applications web et backends utilisés en production" },
    skills: ["React / Next.js", "Angular", "TypeScript", "Java / Quarkus", "C# / .NET", "FastAPI", "REST APIs"],
    icon: <MdDeveloperMode className="text-2xl text-blue-600 dark:text-blue-400" />,
    color: "from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10",
  },
  {
    title: { en: "Cybersecurity & Governance", fr: "Cybersécurité et gouvernance" },
    description: { en: "Governance work backed by a cybersecurity specialization", fr: "Gouvernance appuyée par une spécialisation en cybersécurité" },
    skills: ["NIST CSF / 800-53", "ISO 27001/27002", "Risk analysis", "IAM", "SSO / Keycloak", "Active Directory"],
    icon: <MdSecurity className="text-2xl text-red-600 dark:text-red-400" />,
    color: "from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/10",
  },
  {
    title: { en: "Game Engine Development", fr: "Développement de moteur de jeu" },
    description: { en: "Engine tools and UI framework at Ubisoft", fr: "Outils de moteur et framework UI chez Ubisoft" },
    skills: ["C++", "Anvil/Scimitar", "OpenGL", "Tool Development", "Performance"],
    icon: <FaGamepad className="text-2xl text-purple-600 dark:text-purple-400" />,
    color: "from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10",
  },
  {
    title: { en: "Applied AI", fr: "IA appliquée" },
    description: { en: "AI features inside real products", fr: "Des fonctions d'IA dans de vrais produits" },
    skills: ["RAG", "Embeddings", "Vector search", "LLM integration", "Multi-agent systems"],
    icon: <GiArtificialIntelligence className="text-2xl text-pink-600 dark:text-pink-400" />,
    color: "from-pink-100 to-pink-50 dark:from-pink-900/20 dark:to-pink-800/10",
  },
  {
    title: { en: "Software Engineering", fr: "Génie logiciel" },
    description: { en: "Clean, tested and maintainable code", fr: "Du code propre, testé et maintenable" },
    skills: ["Python", "Design Patterns", "MVVM", "Clean Architecture", "Unit Testing", "Agile"],
    icon: <FiCode className="text-2xl text-green-600 dark:text-green-400" />,
    color: "from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10",
  },
  {
    title: { en: "Database Systems", fr: "Bases de données" },
    description: { en: "Data modeling, queries and performance", fr: "Modélisation, requêtes et performance" },
    skills: ["PostgreSQL", "MySQL", "Supabase", "SQL", "SQLAlchemy"],
    icon: <FiDatabase className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    color: "from-cyan-100 to-cyan-50 dark:from-cyan-900/20 dark:to-cyan-800/10",
  },
  {
    title: { en: "Web & Mobile Development", fr: "Développement web et mobile" },
    description: { en: "Responsive apps and installable PWAs", fr: "Applications adaptatives et PWA installables" },
    skills: ["React", "Next.js", "Angular", "Node.js", "PWA", "Tailwind CSS"],
    icon: <FaMobileAlt className="text-2xl text-indigo-600 dark:text-indigo-400" />,
    color: "from-indigo-100 to-indigo-50 dark:from-indigo-900/20 dark:to-indigo-800/10",
  },
  {
    title: { en: "Programming Paradigms", fr: "Paradigmes de programmation" },
    description: { en: "The right model for each problem", fr: "Le bon modèle pour chaque problème" },
    skills: ["Object-Oriented", "Functional", "Procedural", "Parallel", "Reactive", "Event-Driven"],
    icon: <FiLayers className="text-2xl text-amber-600 dark:text-amber-400" />,
    color: "from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10",
  },
  {
    title: { en: "Computer Graphics", fr: "Infographie" },
    description: { en: "Graphics programming and rendering", fr: "Programmation graphique et rendu" },
    skills: ["OpenGL", "3D Graphics", "Shader Programming", "Rendering", "Computer Vision"],
    icon: <FiServer className="text-2xl text-violet-600 dark:text-violet-400" />,
    color: "from-violet-100 to-violet-50 dark:from-violet-900/20 dark:to-violet-800/10",
  },
  {
    title: { en: "Systems & DevOps", fr: "Systèmes et DevOps" },
    description: { en: "Deploy, automate and keep running", fr: "Déployer, automatiser et faire tourner" },
    skills: ["Linux", "Docker", "Git", "CI/CD", "Vercel", "Bash"],
    icon: <FiCpu className="text-2xl text-teal-600 dark:text-teal-400" />,
    color: "from-teal-100 to-teal-50 dark:from-teal-900/20 dark:to-teal-800/10",
  },
];

const education: { institution: string; degree: Bi; period: Bi; details: Bi; icon: JSX.Element }[] = [
  {
    institution: "Université de Sherbrooke",
    degree: { en: "Bachelor of Science in Computer Science", fr: "Baccalauréat en informatique" },
    period: { en: "Graduated: May 2026", fr: "Diplômé : mai 2026" },
    details: {
      en: "Specialization in Cybersecurity, advanced coursework in AI, Software Engineering and Computer Graphics",
      fr: "Spécialisation en cybersécurité, cours avancés en IA, génie logiciel et infographie",
    },
    icon: <FaUniversity className="text-2xl text-blue-600 dark:text-blue-400" />,
  },
  {
    institution: "Cégep Édouard-Montpetit",
    degree: { en: "DEC in Computer Science Technology", fr: "DEC en techniques de l'informatique" },
    period: { en: "2020 – 2023", fr: "2020 – 2023" },
    details: {
      en: "Programming, databases, web and mobile development",
      fr: "Programmation, bases de données, développement web et mobile",
    },
    icon: <MdSchool className="text-2xl text-green-600 dark:text-green-400" />,
  },
];

const cardBase = "h-full rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300";

export default function AboutMe() {
  const { t, lang } = useI18n();
  const exp = formatDuration(totalExperienceMonths(), lang);
  const internships = experience.filter((e) => e.to !== "present").length;

  const quickStats = [
    { icon: <MdWork size={16} />, label: t({ en: "Professional Experience", fr: "Expérience professionnelle" }), value: exp, color: "text-blue-600 dark:text-blue-400" },
    { icon: <FiCode size={16} />, label: t({ en: "Programming Languages", fr: "Langages de programmation" }), value: "8", color: "text-emerald-600 dark:text-emerald-400" },
    { icon: <FaUniversity size={16} />, label: t({ en: "Education", fr: "Formation" }), value: t({ en: "B.Sc + DEC", fr: "Bac + DEC" }), color: "text-purple-600 dark:text-purple-400" },
    { icon: <FiUsers size={16} />, label: t({ en: "Internships", fr: "Stages" }), value: String(internships), color: "text-orange-600 dark:text-orange-400" },
    { icon: <FiGlobe size={16} />, label: t({ en: "Languages", fr: "Langues" }), value: "FR / EN", color: "text-cyan-600 dark:text-cyan-400" },
  ];

  return (
    <div className="pt-10 mb-6" id="about">
      {/* Header */}
      <div className="text-center mb-6 px-2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t({ en: "PROFESSIONAL PROFILE", fr: "PROFIL PROFESSIONNEL" })}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl">
          {t({ en: "Full-Stack Developer | Systems Analyst | Security & Governance", fr: "Développeur full-stack | Analyste de systèmes | Sécurité et gouvernance" })}
        </p>
      </div>

      <Slider label={t({ en: "Professional profile", fr: "Profil professionnel" })}>
        {/* Identity banner */}
        <div className={`${cardBase} bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-blue-100 shadow-lg p-5 sm:p-6 flex flex-col`}>
          <h3 className="font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">Rhammi Oussama</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
            {t({
              en: "Computer Science Graduate | Full-Stack Developer | Cybersecurity",
              fr: "Diplômé en informatique | Développeur full-stack | Cybersécurité",
            })}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            <a
              href="mailto:oussamarhammi2020@hotmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full shadow-sm max-w-full"
            >
              <FiMail className="shrink-0" /> <span className="truncate">oussamarhammi2020@hotmail.com</span>
            </a>
            <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium rounded-full shadow-sm">
              📍 {t({ en: "Montréal, Québec (willing to relocate)", fr: "Montréal, Québec (ouvert à la relocalisation)" })}
            </span>
          </div>
          <div className="mt-auto grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <FiMapPin className="text-blue-600 dark:text-blue-400 text-lg shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">{t({ en: "Status", fr: "Statut" })}</p>
                <p className="text-gray-600 dark:text-gray-400">{t({ en: "Graduated May 2026", fr: "Diplômé en mai 2026" })}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiCalendar className="text-blue-600 dark:text-blue-400 text-lg shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">{t({ en: "Experience", fr: "Expérience" })}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <HeroHighlight
          containerClassName="h-full rounded-2xl"
          className="w-full h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl p-5 sm:p-6"
        >
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold tracking-tight text-gray-800 dark:text-white">
                🚀 {t({ en: "SOFTWARE ENGINEER – MULTI-DOMAIN PROFILE", fr: "INGÉNIEUR LOGICIEL – PROFIL MULTIDOMAINE" })}
              </h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Software Dev</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">{t({ en: "Cybersecurity", fr: "Cybersécurité" })}</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">{t({ en: "Game & Systems", fr: "Jeu et systèmes" })}</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center leading-snug">
              {t({ en: "CS graduate with a ", fr: "Diplômé en informatique avec un " })}
              <Highlight>{t({ en: "diverse technical background", fr: "parcours technique varié" })}</Highlight>
              {t({
                en: " across enterprise software, healthcare IT, cybersecurity, AI and game development.",
                fr: " : logiciel d'entreprise, TI en santé, cybersécurité, IA et jeu vidéo.",
              })}
            </p>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="font-semibold text-base text-gray-900 dark:text-white mb-1">
                <Highlight>{t({ en: "Open to opportunities", fr: "Ouvert aux opportunités" })}</Highlight> • {t({ en: "Bilingual", fr: "Bilingue" })} • Relocation
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineering • Full-Stack • Cybersecurity • AI • Systems</p>
            </div>
          </div>
        </HeroHighlight>

        {/* Value blocks */}
        <div className={`${cardBase} bg-white dark:bg-gray-800 p-5 sm:p-6 space-y-3`}>
          {[
            { icon: <FiCode className="text-blue-600 dark:text-blue-400 text-lg" />, bg: "bg-blue-50 dark:bg-blue-900/20", title: { en: "Software Engineering", fr: "Génie logiciel" }, text: { en: "Full-stack and backend development, systems that run in production.", fr: "Développement full-stack et backend, des systèmes qui roulent en production." } },
            { icon: <MdSecurity className="text-purple-600 dark:text-purple-400 text-lg" />, bg: "bg-purple-50 dark:bg-purple-900/20", title: { en: "Systems & Security", fr: "Systèmes et sécurité" }, text: { en: "Security governance, risk analysis, IAM and Active Directory.", fr: "Gouvernance de la sécurité, analyse de risque, IAM et Active Directory." } },
            { icon: <FiUsers className="text-emerald-600 dark:text-emerald-400 text-lg" />, bg: "bg-emerald-50 dark:bg-emerald-900/20", title: { en: "Collaboration & Impact", fr: "Collaboration et impact" }, text: { en: "Clinical, IT and game teams, tools people use every day.", fr: "Équipes cliniques, TI et jeu vidéo, des outils utilisés chaque jour." } },
          ].map((b) => (
            <div key={b.title.en} className={`p-4 rounded-xl ${b.bg}`}>
              <div className="flex items-center gap-2 mb-1.5">
                {b.icon}
                <p className="font-semibold text-sm text-gray-800 dark:text-white">{t(b.title)}</p>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{t(b.text)}</p>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className={`${cardBase} bg-white dark:bg-gray-800 p-5 sm:p-6`}>
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">{t({ en: "At a glance", fr: "En bref" })}</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg ${i === quickStats.length - 1 ? "col-span-2" : ""}`}
              >
                <div className={`${stat.color} p-2 rounded-full mb-1`}>{stat.icon}</div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center mb-0.5">{stat.label}</p>
                <p className="font-bold text-base text-gray-900 dark:text-white text-center">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        {education.map((edu) => (
          <div key={edu.institution} className={`${cardBase} bg-white dark:bg-gray-800 p-5 sm:p-6`}>
            <div className="p-3 w-fit bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl mb-4">{edu.icon}</div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{t({ en: "Education", fr: "Formation" })}</p>
            <h3 className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-1">{edu.institution}</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">{t(edu.degree)}</p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">{t(edu.period)}</p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t(edu.details)}</p>
          </div>
        ))}
      </Slider>

      {/* Expertise */}
      <div className="text-center mt-10 mb-2">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {t({ en: "Areas of Expertise", fr: "Domaines d'expertise" })}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          {t({
            en: `${expertiseAreas.length} technical domains built through school, work and projects`,
            fr: `${expertiseAreas.length} domaines techniques bâtis à l'école, au travail et dans mes projets`,
          })}
        </p>
      </div>
      <Slider label={t({ en: "Areas of expertise", fr: "Domaines d'expertise" })}>
        {expertiseAreas.map((area) => (
          <div key={area.title.en} className={`p-5 bg-gradient-to-br ${area.color} rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full group`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm shrink-0 group-hover:scale-110 transition-transform">{area.icon}</div>
              <div className="min-w-0">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-1 leading-tight">{t(area.title)}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{t(area.description)}</p>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex flex-wrap gap-2">
              {area.skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-100 dark:border-gray-700 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
