import { useRef, useState } from "react";
import { FaBrain, FaCode, FaCog, FaDatabase, FaGamepad, FaChartBar, FaEye, FaSearch, FaTerminal, FaUsers, FaJava } from "react-icons/fa";
import { MdArchitecture, MdSecurity } from "react-icons/md";
import {
  SiAngular, SiCplusplus, SiDocker, SiDotnet, SiFastapi, SiGit, SiGithubactions, SiJavascript, SiLinux, SiMysql,
  SiNextdotjs, SiNodedotjs, SiNumpy, SiOpengl, SiPandas, SiPostgresql, SiPython, SiQuarkus, SiReact, SiSharp,
  SiSqlalchemy, SiSupabase, SiTailwindcss, SiTypescript, SiVercel, SiVite, SiPwa, SiKeycloak, SiCaddy, SiOpenai,
} from "react-icons/si";
import { PiGraphFill } from "react-icons/pi";
import { TbApi, TbPlugConnected, TbBrandPowershell } from "react-icons/tb";
import { CardSpotlight } from "./ui/card-spotlight";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import Slider, { SectionHeader } from "./Slider";
import { useI18n } from "@/i18n/LanguageProvider";
import { levelLabel, skillGroups, type ProficiencyLevel, type SkillGroup, type SkillItem } from "@/content/skills";

const levelValue: Record<ProficiencyLevel, number> = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };

/** Circle split in four quarters, filled according to the level. */
export const CircularIndicator = ({ level }: { level: ProficiencyLevel }) => (
  <div className="w-4 h-4 relative shrink-0" aria-hidden="true">
    <svg className="w-4 h-4 transform -rotate-90" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-600" />
      {Array.from({ length: levelValue[level] }, (_, i) => (
        <circle
          key={i}
          cx="8"
          cy="8"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="9.42 37.68"
          strokeDashoffset={-i * 9.42}
          className="text-emerald-500 transition-all duration-300"
        />
      ))}
    </svg>
  </div>
);

const iconMap: Record<string, JSX.Element> = {
  Python: <SiPython />, TypeScript: <SiTypescript />, JavaScript: <SiJavascript />, Java: <FaJava />, "C++": <SiCplusplus />,
  "C#": <SiSharp />, SQL: <FaDatabase />, Bash: <FaTerminal />,
  React: <SiReact />, "Next.js": <SiNextdotjs />, Angular: <SiAngular />, "Tailwind CSS": <SiTailwindcss />, PWA: <SiPwa />, Vite: <SiVite />,
  FastAPI: <SiFastapi />, Quarkus: <SiQuarkus />, "Node.js": <SiNodedotjs />, ".NET": <SiDotnet />, "REST APIs": <TbApi />,
  WebSocket: <TbPlugConnected />, SignalR: <TbPlugConnected />,
  PostgreSQL: <SiPostgresql />, MySQL: <SiMysql />, Supabase: <SiSupabase />, SQLAlchemy: <SiSqlalchemy />, pandas: <SiPandas />,
  NumPy: <SiNumpy />, "Power BI": <FaChartBar />,
  RAG: <FaBrain />, Embeddings: <PiGraphFill />, "Vector search": <FaSearch />, "LLM integration": <SiOpenai />, "Multi-agent systems": <FaUsers />,
  "NIST CSF": <MdSecurity />, "NIST SP 800-53": <MdSecurity />, "ISO 27001/27002": <MdSecurity />, "Risk analysis": <MdArchitecture />,
  IAM: <MdArchitecture />, "SSO / Keycloak": <SiKeycloak />, RBAC: <MdArchitecture />, "Active Directory": <TbBrandPowershell />,
  Docker: <SiDocker />, "Docker Compose": <SiDocker />, Linux: <SiLinux />, Git: <SiGit />, "CI/CD": <SiGithubactions />,
  Vercel: <SiVercel />, Caddy: <SiCaddy />,
  "Anvil/Scimitar": <FaGamepad />, OpenGL: <SiOpengl />, MVVM: <MdArchitecture />, OCR: <FaEye />, "Performance tuning": <FaCog />,
};

const categoryIcon: Record<string, JSX.Element> = {
  languages: <FaCode />, frontend: <SiReact />, backend: <TbApi />, data: <FaDatabase />, ai: <FaBrain />,
  security: <MdSecurity />, devops: <SiDocker />, engine: <FaGamepad />,
};

export default function SkillsSection() {
  const { t } = useI18n();
  const [openGroup, setOpenGroup] = useState<SkillGroup | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout>>();
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();

  const onEnter = (key: string) => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    enterTimer.current = setTimeout(() => setHovered(key), 300);
  };
  const onLeave = () => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setHovered(null), 1000);
  };

  const where = (group: SkillGroup, item: SkillItem) => t(item.where ?? group.context);

  return (
    <div className="pt-5 mb-6" id="skills">
      <SectionHeader
        id="skills"
        title={t({ en: "Skills", fr: "Compétences" })}
        subtitle={t({ en: "My technical skills and expertise", fr: "Mes compétences techniques" })}
      />

      {/* Proficiency legend */}
      <div className="mt-4 mb-2 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {(["Beginner", "Intermediate", "Advanced", "Expert"] as const).map((level) => (
          <div key={level} className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-neutral-800 rounded-2xl">
            <CircularIndicator level={level} />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{t(levelLabel[level])}</span>
          </div>
        ))}
      </div>

      <Slider label={t({ en: "Skills", fr: "Compétences" })}>
        {skillGroups.map((group) => (
          <CardSpotlight
            key={group.id}
            className="h-full p-4 rounded-2xl shadow-sm hover:shadow-lg duration-500 ease-in-out transition-all cursor-pointer"
            onClick={() => setOpenGroup(group)}
          >
            <h3 className="text-xl mb-1 font-bold dark:text-gray-100 relative z-20 flex items-center gap-2">
              <span className="text-emerald-600">{categoryIcon[group.id]}</span>
              {t(group.title)}
            </h3>
            <p className="relative z-20 text-xs text-gray-500 dark:text-gray-400 mb-3">
              {t({ en: "Click for details", fr: "Clique pour les détails" })}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const key = `${group.id}:${item.name}`;
                const isHovered = hovered === key;
                return (
                  <li key={item.name} className={`transition-all duration-700 ease-in-out ${isHovered ? "w-full" : ""}`}>
                    <div
                      className={`relative z-20 rounded-2xl transition-all ease-in-out cursor-pointer overflow-hidden ${
                        isHovered
                          ? "bg-white dark:bg-black text-slate-900 dark:text-gray-100 p-4 duration-700"
                          : "hover:bg-gray-100 dark:hover:bg-gray-900 text-slate-900 dark:text-gray-200 hover:shadow-lg hover:-translate-y-0.5 duration-500"
                      }`}
                      onMouseEnter={() => onEnter(key)}
                      onMouseLeave={onLeave}
                    >
                      {isHovered ? (
                        <div className="space-y-2 animate-in fade-in duration-500">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl shrink-0">{iconMap[item.name] ?? <FaCode />}</span>
                            <h4 className="flex-1 text-lg font-bold">{item.name}</h4>
                            <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full whitespace-nowrap">
                              {t(levelLabel[item.level])}
                            </span>
                            <CircularIndicator level={item.level} />
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{where(group, item)}</p>
                        </div>
                      ) : (
                        <span className="flex items-center gap-2 px-3 py-2">
                          <span className="text-xl">{iconMap[item.name] ?? <FaCode />}</span>
                          <span className="font-medium">{item.name}</span>
                          <CircularIndicator level={item.level} />
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardSpotlight>
        ))}
      </Slider>

      {/* Category details */}
      <Dialog open={!!openGroup} onOpenChange={(o) => !o && setOpenGroup(null)}>
        <DialogContent className="sm:max-w-4xl p-4 md:p-6 max-h-[85vh] overflow-y-auto bg-background border border-neutral-200 dark:border-neutral-800">
          {openGroup && (
            <>
              <DialogHeader className="mb-3 border-b pb-3 border-neutral-200 dark:border-neutral-800">
                <DialogTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  <span className="text-emerald-600">{categoryIcon[openGroup.id]}</span>
                  {t(openGroup.title)}
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {openGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-slate-100 dark:bg-zinc-900 rounded-xl p-3 hover:shadow-md transition-shadow flex flex-col border border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-gray-200 dark:border-gray-800">
                      <span className="text-lg md:text-xl text-emerald-600 shrink-0">{iconMap[skill.name] ?? <FaCode />}</span>
                      <h3 className="text-base md:text-lg font-semibold tracking-tight truncate">{skill.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-slate-700 dark:text-gray-300 font-medium">{t({ en: "Proficiency:", fr: "Niveau :" })}</span>
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500">{t(levelLabel[skill.level])}</span>
                      <CircularIndicator level={skill.level} />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-auto">{where(openGroup, skill)}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
