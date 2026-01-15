import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useMemo } from "react";
import { settings } from "@/config/settings";
import { 
  FiMapPin, 
  FiCalendar, 
  FiAward, 
  FiBriefcase, 
  FiCode, 
  FiDatabase,
  FiGlobe,
  FiUsers,
  FiLock,
  FiCpu,
  FiLayers,
  FiServer
} from "react-icons/fi";
import { TbBrandRust } from "react-icons/tb";
import { GiArtificialIntelligence, GiGraduateCap } from "react-icons/gi";
import { MdSecurity, MdDeveloperMode, MdWork, MdSchool } from "react-icons/md";
import { FaGamepad, FaMobileAlt, FaUniversity } from "react-icons/fa";

export default function AboutMe() {
  // Calculate total professional experience
  const totalExperience = useMemo(() => {
    const start = new Date("2024-01-01");
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + 
                  (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) months--;
    return months;
  }, []);

  const years = Math.floor(totalExperience / 12);
  const months = totalExperience % 12;

  const formatExperience = () => {
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""}`;
    } else {
      return `${months} month${months > 1 ? "s" : ""}`;
    }
  };

  // Quick stats for visual appeal
  const quickStats = [
    {
      icon: <MdWork size={16} />,
      label: "Professional Experience",
      value: formatExperience(),
      color: "text-blue-600 dark:text-blue-400"
    },
    { 
      icon: <FiCode size={16} />, 
      label: "Programming Languages", 
      value: "12+",
      color: "text-emerald-600 dark:text-emerald-400"
    },
    { 
      icon: <FaUniversity size={16} />, 
      label: "Education Level", 
      value: "B.Sc + Cegep",
      color: "text-purple-600 dark:text-purple-400"
    },
    { 
      icon: <FiUsers size={16} />, 
      label: "Professional Internships", 
      value: "3",
      color: "text-orange-600 dark:text-orange-400"
    },
    { 
      icon: <FiGlobe size={16} />, 
      label: "Languages", 
      value: "3",
      color: "text-cyan-600 dark:text-cyan-400"
    },
  ];

  // Technical expertise highlights - Updated with all skills from CV
 const expertiseAreas = [
    { 
      title: "Game Engine Development", 
      skills: ["C++", "OpenGL", "Anvil/Scimitar", "Engine Architecture", "Tool Development", "Performance"],
      icon: <FaGamepad className="text-2xl text-purple-600 dark:text-purple-400" />,
      description: "Game engine tools & pipeline development at Ubisoft",
      color: "from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10"
    },
    { 
      title: "Full-Stack Development", 
      skills: ["Java/Quarkus", "Angular", "TypeScript", "C#/.NET", "Spring Boot", "REST APIs"],
      icon: <MdDeveloperMode className="text-2xl text-blue-600 dark:text-blue-400" />,
      description: "Enterprise web applications & backend systems",
      color: "from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10"
    },
    { 
      title: "Cybersecurity", 
      skills: ["Active Directory", "DNS/GPO", "Cryptography", "Penetration Testing", "System Security", "Network Defense"],
      icon: <MdSecurity className="text-2xl text-red-600 dark:text-red-400" />,
      description: "Cybersecurity specialization with practical experience",
      color: "from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/10"
    },
    { 
      title: "Artificial Intelligence", 
      skills: ["Machine Learning", "TensorFlow", "Neural Networks", "AI Model Design", "Supervised Learning", "Data Analysis"],
      icon: <GiArtificialIntelligence className="text-2xl text-pink-600 dark:text-pink-400" />,
      description: "AI/ML development and intelligent systems",
      color: "from-pink-100 to-pink-50 dark:from-pink-900/20 dark:to-pink-800/10"
    },
    { 
      title: "Software Engineering", 
      skills: ["Python", "Design Patterns", "MVVM", "Clean Architecture", "Unit Testing", "Agile"],
      icon: <FiCode className="text-2xl text-green-600 dark:text-green-400" />,
      description: "Production software and application development",
      color: "from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10"
    },
    { 
      title: "Programming Paradigms", 
      skills: ["Object-Oriented", "Functional", "Procedural", "Parallel", "Reactive", "Event-Driven"],
      icon: <FiLayers className="text-2xl text-amber-600 dark:text-amber-400" />,
      description: "Multiple programming paradigms expertise",
      color: "from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10"
    },
    { 
      title: "Database Systems", 
      skills: ["PostgreSQL", "Oracle", "MySQL", "SQL", "Firebase", "MongoDB"],
      icon: <FiDatabase className="text-2xl text-cyan-600 dark:text-cyan-400" />,
      description: "Database design, optimization, and management",
      color: "from-cyan-100 to-cyan-50 dark:from-cyan-900/20 dark:to-cyan-800/10"
    },
    { 
      title: "Web & Mobile Development", 
      skills: ["React", "Angular", "Node.js", "Flutter", "Android", "TypeScript"],
      icon: <FaMobileAlt className="text-2xl text-indigo-600 dark:text-indigo-400" />,
      description: "Cross-platform application development",
      color: "from-indigo-100 to-indigo-50 dark:from-indigo-900/20 dark:to-indigo-800/10"
    },
    { 
      title: "Computer Graphics", 
      skills: ["OpenGL", "3D Graphics", "Shader Programming", "Rendering", "Computer Vision"],
      icon: <FiServer className="text-2xl text-violet-600 dark:text-violet-400" />,
      description: "Graphics programming and visualization",
      color: "from-violet-100 to-violet-50 dark:from-violet-900/20 dark:to-violet-800/10"
    },
    { 
      title: "Systems & DevOps", 
      skills: ["Linux/Unix", "Docker", "Git", "CI/CD", "Windows Server", "Bash Scripting"],
      icon: <FiCpu className="text-2xl text-teal-600 dark:text-teal-400" />,
      description: "System administration and development operations",
      color: "from-teal-100 to-teal-50 dark:from-teal-900/20 dark:to-teal-800/10"
    },
  ];

  // Education timeline
  const education = [
    {
      institution: "University of Sherbrooke",
      degree: "Bachelor of Science in Computer Science",
      period: "Expected Graduation: May 2026",
      icon: <FaUniversity className="text-2xl text-blue-600 dark:text-blue-400" />,
      details: "Specialization in Cybersecurity, Advanced coursework in AI, Software Engineering, and Computer Graphics"
    },
    {
      institution: "Cégep Édouard-Montpetit",
      degree: "Technical Diploma in Computer Science Programming",
      period: "January 2020 - January 2023",
      icon: <MdSchool className="text-2xl text-green-600 dark:text-green-400" />,
      details: "Technical programming education, foundational computer science concepts"
    },
    {
      institution: "École Antoine de Saint-Exupéry",
      degree: "Secondary School Diploma",
      period: "June 2013 - June 2018",
      icon: <GiGraduateCap className="text-2xl text-purple-600 dark:text-purple-400" />,
      details: "High school education with focus on sciences and mathematics"
    },
  ];


  return (
    <div className="pt-10 mb-10" id="about">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container principal avec largeur optimisée */}
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 px-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent break-words">
              PROFESSIONAL PROFILE
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto break-words">
              Software Developer | Game Engine Programmer | Cybersecurity Specialist | AI Enthusiast
            </p>
          </div>

          {/* Contact Info Banner */}
          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 px-2 sm:px-0">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-lg">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
                <div className="text-center lg:text-left w-full lg:w-auto">
                  <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">
                    Rhammi Oussama
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 break-words">
                    Tringual Computer Science Student | University of Sherbrooke | 3 Professional Internships
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full shadow-sm">
                      📧 oussamarhammi2020@hotmail.com
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium rounded-full shadow-sm">
                      📱 438-992-4850
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium rounded-full shadow-sm">
                      📍 Montréal, Québec
                      (willing to relocate)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm sm:text-base w-full lg:w-auto">
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white">Status</p>
                      <p className="text-gray-600 dark:text-gray-400 break-words">Graduating May 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiCalendar className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white">Experience</p>
                      <p className="text-gray-600 dark:text-gray-400 break-words">{formatExperience()} professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          {settings.about.showStats && (
            <div className="max-w-5xl mx-auto mb-12 sm:mb-14 px-2 sm:px-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg min-w-0"
                  >
                    <div className={`${stat.color} p-2 sm:p-3 rounded-full mb-2 sm:mb-3 flex-shrink-0`}>
                      {stat.icon}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 text-center mb-1 break-words w-full px-1">
                      {stat.label}
                    </p>
                    <p className="font-bold text-base sm:text-lg text-gray-900 dark:text-white text-center break-words w-full px-1">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Summary */}
          <div className="max-w-5xl mx-auto mb-14 sm:mb-16 px-2 sm:px-0">
            <HeroHighlight
              className="
                w-full
                rounded-2xl
                border border-gray-200 dark:border-gray-700
                bg-gradient-to-br from-white to-gray-50
                dark:from-gray-800 dark:to-gray-900
                shadow-xl
                p-4 sm:p-6 lg:p-8
              "
            >
              <div className="space-y-6">

                {/* Headline - Version compacte */}
                <div className="text-center space-y-2">
                  <h3 className="
                    text-lg sm:text-xl font-bold
                    tracking-tight
                    text-gray-800 dark:text-white
                    text-center
                    mx-auto
                    line-clamp-2
                  ">
                    🚀 SOFTWARE ENGINEER – MULTI-DOMAIN PROFILE
                  </h3>

                  <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      Software Dev
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                      Cybersecurity
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                      Game & Systems
                    </span>
                  </div>
                </div>

                {/* Core Summary - Version plus concise */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center leading-snug">
                  CS graduate with <Highlight>diverse technical background</Highlight> across enterprise software, healthcare IT, cybersecurity, AI, and game development.
                </p>

                {/* Value Blocks - Grille plus compacte */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    <div className="flex items-center gap-2 mb-2">
                      <FiCode className="text-blue-600 dark:text-blue-400 text-lg" />
                      <p className="font-semibold text-sm text-gray-800 dark:text-white">
                        Software Engineering
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Full-stack & backend development, production-ready systems.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MdSecurity className="text-purple-600 dark:text-purple-400 text-lg" />
                      <p className="font-semibold text-sm text-gray-800 dark:text-white">
                        Systems & Security
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Active Directory, offensive/defensive security, pentesting.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                    <div className="flex items-center gap-2 mb-2">
                      <FiUsers className="text-emerald-600 dark:text-emerald-400 text-lg" />
                      <p className="font-semibold text-sm text-gray-800 dark:text-white">
                        Collaboration & Impact
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Multidisciplinary teams, projects impacting thousands of users.
                    </p>
                  </div>
                </div>

                {/* CTA - Version compacte */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                  <p className="font-semibold text-base text-gray-900 dark:text-white mb-1">
                    <Highlight>Available May 2026</Highlight> • Trilingual • Relocation
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Software Engineering • Full-Stack • Cybersecurity • AI • Systems
                  </p>
                </div>

              </div>
            </HeroHighlight>
          </div>

          {/* Education Timeline */}
          <div className="max-w-5xl mx-auto mb-14 sm:mb-16 px-2 sm:px-0">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                Education Background
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg px-4 break-words">
                Cégep technical diploma + University Bachelor's degree
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start gap-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {edu.period}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas - Dynamic Responsive Layout */}
          <div className="max-w-7xl mx-auto mb-14 sm:mb-16 px-2 sm:px-0">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                Areas of Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg px-4 break-words">
                {expertiseAreas.length} technical domains mastered through academic and professional experience
              </p>
            </div>
            
            {/* Grille optimisée : 1 colonne sur mobile, auto-ajustement sur grand écran */}
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 lg:gap-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`p-5 bg-gradient-to-br ${area.color} rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col h-full group`}
                >
                  {/* Header avec icône et titre */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-1 leading-tight">
                        {area.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Compétences - Correction des mots découpés */}
                  <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-100 dark:border-gray-700 shadow-sm whitespace-normal break-words"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}