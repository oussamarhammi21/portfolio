import {
  SiCplusplus, 
  SiSharp,
  SiDotnet,
  SiQuarkus,
  SiOpengl,
  SiPostgresql,
  SiOracle,
  SiFlutter,
  SiAndroid,
  SiIos,
  SiAndroidstudio,
  SiApachemaven,
  SiAxios,
  SiCss3,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiGradle,
  SiHibernate,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiJunit5,
  SiLangchain,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSelenium,
  SiSpring,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVite,
  SiYaml,
} from "react-icons/si";
import {
  FaUsersCog,
  FaLanguage,
  FaLightbulb,
  FaClock,
  FaAdjust,
  FaJava,
  FaCode,
  FaRobot,
  FaDatabase,
  FaCloud,
  FaBookOpen,
  FaPalette,
  FaCog,
  FaTools,
  FaCogs,
  FaProjectDiagram,
  FaLayerGroup,
  FaBrain,
  FaChartBar,
  FaUsers,
  FaSync,
  FaStream,
  FaTheaterMasks,
} from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { BsFiletypeXml } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
import { GoCopilot } from "react-icons/go";
import { BiCodeBlock } from "react-icons/bi";
import { MdDesignServices, MdArchitecture } from "react-icons/md";
import { CardSpotlight } from "./ui/card-spotlight";
import { useState, useRef } from "react";
import { skillsData, type Skill } from "../config/skillsData";
import { PiOpenAiLogo } from "react-icons/pi";
import SkillDetails from "./SkillDetails";

// Tooltip component
interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip = ({ children, content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg shadow-xl z-50 border border-gray-600">
          <div className="w-60 break-words">{content}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

// Proficiency utility functions
const getProficiencyLevel = (level: Skill["level"]): number => {
  switch (level) {
    case "Expert":
      return 4;
    case "Advanced":
      return 3;
    case "Intermediate":
      return 2;
    case "Beginner":
      return 1;
    default:
      return 1;
  }
};

const getProficiencyWidth = (level: Skill["level"]): string => {
  const levelNum = getProficiencyLevel(level);
  return `${(levelNum / 4) * 100}%`;
};

// Circular Proficiency Indicator Component
export const CircularIndicator = ({ level }: { level: Skill["level"] }) => {
  const quarters = getProficiencyLevel(level);

  return (
    <div className="w-4 h-4 relative">
      <svg className="w-4 h-4 transform -rotate-90" viewBox="0 0 16 16">
        {/* Background circle */}
        <circle
          cx="8"
          cy="8"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-300 dark:text-gray-600"
        />
        {/* Progress quarters */}
        {Array.from({ length: quarters }, (_, i) => (
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
};

const iconMap: Record<string, JSX.Element> = {
  // Languages
    'C': <FaCode />,
  'Haskell': <FaCode />,
  'Operating Systems': <FaCog />,
  'Linux/Unix': <FaCog />,
  'Windows': <FaCog />,
  'System Security': <MdArchitecture />,
  'Game Engines': <FaProjectDiagram />,
  'Computer Graphics': <FaPalette />,
  'AI Algorithms': <FaBrain />,
  'Machine Learning': <FaBrain />,
  'Neural Networks': <FaBrain />,
  'Data Analysis': <FaChartBar />,
  'Cryptography': <MdArchitecture />,
  'Network Security': <MdArchitecture />,
  'Penetration Testing': <MdArchitecture />,
  'Secure Coding': <MdArchitecture />,
  'Incident Response': <MdArchitecture />,
  'Data Structures': <FaLayerGroup />,
  'Algorithms': <FaCode />,
  'UML Modeling': <MdDesignServices />,
  'Software Testing': <FaCog />,
  'TCP/IP': <FaStream />,
  'Network Protocols': <FaStream />,
  'Network Programming': <FaCode />,
  'CI/CD': <SiGithubactions />,
  'Cloud Platforms': <FaCloud />,
  'Linux Administration': <FaCog />,
  'Discrete Mathematics': <FaChartBar />,
  'Linear Algebra': <FaChartBar />,
  'Statistics': <FaChartBar />,
  'Algorithm Analysis': <FaCode />,
  'Formal Languages': <FaCode />,
  'Computability Theory': <FaCode />,
  'MongoDB': <FaDatabase />,
  'React Native': <SiReact />,
  'Agile Methodology': <FaUsers />,
  'Documentation': <FaBookOpen />,
  'Requirements Analysis': <FaUsersCog />,
  'Teamwork': <FaUsers />,
  'Communication': <FaLanguage />,
  'Leadership': <FaUsersCog />,
  'Critical Thinking': <FaLightbulb />,
  'C++': <SiCplusplus />,
  'C#': <SiSharp />,
  Java: <FaJava />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Python: <SiPython />,
  Racket: <FaCode />,
  'ARM8 Assembly': <FaCode />,
  
  // Web Development
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  jQuery: <SiJavascript />,
  Angular: <SiReact />, // You might want to add specific Angular icon
  React: <SiReact />,
  'Node.js': <SiNodedotjs />,
  Flutter: <SiFlutter />,
  
  // Frameworks & Tools
  '.NET': <SiDotnet />,
  Quarkus: <SiQuarkus />,
  Firebase: <SiFirebase />,
  OpenGL: <SiOpengl />,
  
  // Databases
  SQL: <FaDatabase />,
  PostgreSQL: <SiPostgresql />,
  Oracle: <SiOracle />,
  'Java Beans': <FaJava />,
  MySQL: <SiMysql />,
  'SQL Server': <DiMsqlServer />,
  'Firebase Realtime Database': <SiFirebase />,
  Redis: <SiRedis />,
  
  // Systems & Security
  'Active Directory': <MdArchitecture />,
  'Security Architecture': <MdArchitecture />,
  
  // Mobile Development
  Android: <SiAndroid />,
  iOS: <SiIos />,
  
  // AI & Machine Learning
  'AI Model Design': <FaBrain />,
  TensorFlow: <SiTensorflow />,
  
  // DevOps & Tools
  Git: <SiGit />,
  'Agile/Scrum': <FaUsers />,
  Docker: <SiDocker />,
  
  // Game Development
  'Game Production Pipelines': <FaProjectDiagram />,
  'UI Frameworks': <MdDesignServices />,
  
  // Project Management
  'IT Project Coordination': <FaUsersCog />,
  'Team Collaboration': <FaUsers />,
  
  // Soft Skills
  'Bilingual Communication': <FaLanguage />,
  'Problem Solving': <FaLightbulb />,
  'Time Management': <FaClock />,
  Adaptability: <FaAdjust />,
  
  // Existing icons from original file
  YAML: <SiYaml />,
  XML: <BsFiletypeXml />,
  "Spring Boot": <SiSpringboot />,
  "Spring Core": <SiSpring />,
  "Spring MVC": <SiSpring />,
  "Spring Data JPA": <SiSpring />,
  Hibernate: <SiHibernate />,
  Spring: <SiSpring />,
  ReactJs: <SiReact />,
  "Next.js": <SiNextdotjs />,
  ChatGPT: <PiOpenAiLogo />,
  "GitHub Copilot": <GoCopilot />,
  Cursor: <BiCodeBlock />,
  Selenium: <SiSelenium />,
  "Artificial Intelligence": <FaBrain />,
  "Visualization Tools": <FaChartBar />,
  "GitHub Actions": <SiGithubactions />,
  Maven: <SiApachemaven />,
  Gradle: <SiGradle />,
  Azure: <VscAzure />,
  GCP: <SiGooglecloud />,
  Vercel: <SiVercel />,
  "Tailwind CSS": <SiTailwindcss />,
  Axios: <SiAxios />,
  Lombok: <FaJava />,
  HeroUI: <SiReact />,
  "Rest Assured": <SiJunit5 />,
  Playwright: <FaTheaterMasks />,
  JUnit: <SiJunit5 />,
  Kafka: <FaStream />,
  Figma: <SiFigma />,
  LangChain: <SiLangchain />,
  Postman: <SiPostman />,
  VSCode: <VscVscode />,
  IntelliJ: <SiIntellijidea />,
  Swagger: <SiSwagger />,
  "Android Studio": <SiAndroidstudio />,
  Vite: <SiVite />,
  "Multi-threading": <FaSync />,
  "Design Patterns": <MdDesignServices />,
  "Low Level Design": <MdArchitecture />,
  "High Level Design": <FaProjectDiagram />,
  Microservices: <FaLayerGroup />,
  Agile: <FaUsers />,
};

// Category icon map
const categoryIconMap: Record<string, JSX.Element> = {
  'Programming Languages': <FaCode />,
  'Web Development': <SiReact />,
  'Frameworks & Tools': <FaTools />,
  'Databases': <FaDatabase />,
  'Systems & Security': <MdArchitecture />,
  'Mobile Development': <SiAndroid />,
  'AI & Machine Learning': <FaBrain />,
  'DevOps & Tools': <FaCloud />,
  'Game Development': <FaProjectDiagram />,
  'Project Management': <FaUsersCog />,
  'Soft Skills': <FaUsers />,
  
  // Existing categories
  Languages: <FaCode />,
  Frameworks: <SiReact />,
  "AI / Automation": <FaRobot />,
  Libraries: <FaBookOpen />,
  "UI/UX": <FaPalette />,
  "Markup & Config": <FaCog />,
  Tools: <FaTools />,
  Others: <FaCogs />,
};

export default function SkillsSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<{
    categoryIndex: number;
    skillIndex: number;
  } | null>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSkillHoverEnter = (categoryIndex: number, skillIndex: number) => {
    // Clear any existing timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Set hover state after 300ms delay
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredSkill({ categoryIndex, skillIndex });
    }, 300);
  };

  const handleSkillHoverLeave = () => {
    // Clear any existing timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Clear hover state after 1 second delay
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredSkill(null);
    }, 1000);
  };

  const handleCategoryClick = (
    category: string,
    skills: Skill[],
    icon: JSX.Element
  ) => {
    setSelectedCategory(category);
    setSelectedSkills(skills);
    setSelectedIcon(icon);
    setIsDialogOpen(true);
  };

  return (
    <div className="pt-5" id="skills">
      <h1 className="text-3xl font-bold mb-2">SKILLS</h1>
      <p className="text-gray-600 dark:text-gray-400">
        My technical skills and expertise
      </p>

      <section className="p-6 md:p-12 bg-gradient-to-b max-w-4xl mx-auto transition-colors duration-300">
        {/* Proficiency Level Legend */}
        <div className="max-w-4xl mx-auto mb-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Proficiency Levels:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(["Beginner", "Intermediate", "Advanced", "Expert"] as const).map(
              (level) => (
                <div
                  key={level}
                  className="flex items-center gap-3 px-3 py-2 bg-gray-100 dark:bg-neutral-800 rounded-2xl"
                >
                  <CircularIndicator level={level} />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {level}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {skillsData.map((skillCategory, idx) => (
            <CardSpotlight
              key={idx}
              className="p-4 rounded-2xl shadow-sm hover:shadow-lg duration-500 ease-in-out transition-all cursor-pointer"
              onClick={() =>
                handleCategoryClick(
                  skillCategory.category,
                  skillCategory.items,
                  categoryIconMap[skillCategory.category] || <FaCog />
                )
              }
            >
              <h3 className="text-xl mb-3 text-grey-700 font-bold dark:text-gray-100 relative z-20 flex items-center gap-2">
                {categoryIconMap[skillCategory.category] && (
                  <span className="text-emerald-600">
                    {categoryIconMap[skillCategory.category]}
                  </span>
                )}
                {skillCategory.category}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {skillCategory.items.map((item, i) => {
                  const isHovered =
                    hoveredSkill?.categoryIndex === idx &&
                    hoveredSkill?.skillIndex === i;

                  return (
                    <li
                      key={i}
                      className={`transition-all duration-700 ease-in-out ${
                        isHovered ? "w-full" : ""
                      }`}
                    >
                      <div
                        className={`relative z-20 rounded-2xl transition-all ease-in-out cursor-pointer overflow-hidden ${
                          isHovered
                            ? "bg-white dark:bg-black text-slate-900 dark:text-gray-100 p-4 duration-700 scale-100"
                            : "hover:bg-gray-100 dark:hover:bg-gray-900 text-slate-900 dark:text-gray-200 hover:shadow-lg hover:translate-y-[-2px] duration-500 scale-100"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={() => handleSkillHoverEnter(idx, i)}
                        onMouseLeave={handleSkillHoverLeave}
                      >
                        {isHovered ? (
                          <div className="space-y-3 animate-in fade-in duration-500">
                            {/* Header with Icon and Name */}
                            <div className="flex items-center gap-3 pb-2">
                              {iconMap[item.name] && (
                                <span className="text-3xl transition-all duration-500 ease-in-out flex-shrink-0">
                                  {iconMap[item.name]}
                                </span>
                              )}
                              <div className="flex-1">
                                <h4 className="text-xl font-bold transition-all duration-500 ease-in-out">
                                  {item.name}
                                </h4>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full transition-all duration-500 ease-in-out whitespace-nowrap">
                                  {item.level}
                                </span>
                                <div className="scale-110 transition-transform duration-500 ease-in-out">
                                  <CircularIndicator level={item.level} />
                                </div>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                              {/* Experience */}
                              {item.experience && (
                                <div className="flex items-center gap-2 text-sm transition-all duration-500 ease-in-out">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span className="font-medium">
                                    {item.experience} of experience
                                  </span>
                                </div>
                              )}

                              {/* Description */}
                              {item.description && (
                                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 transition-all duration-500 ease-in-out">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ) : (
                          <span className="flex items-center gap-2 px-3 py-2 transition-all duration-500 ease-in-out">
                            {iconMap[item.name] && (
                              <span className="text-xl transition-all duration-500 ease-in-out">
                                {iconMap[item.name]}
                              </span>
                            )}
                            <span className="font-medium transition-all duration-500 ease-in-out">
                              {item.name}
                            </span>
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
        </div>
      </section>

      {/* Skill Details Dialog */}
      <SkillDetails
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        category={selectedCategory}
        skills={selectedSkills}
        icon={selectedIcon || <></>}
        iconMap={iconMap}
      />
    </div>
  );
}