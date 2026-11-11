import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiMail, FiBriefcase, FiUsers, FiLayers } from "react-icons/fi";
import { useEffect, useState } from "react";
import FloatingImage from "@/components/MyImage";
import ResumeButton from "./DownloadResumeBtn";
import { settings } from "@/config/settings";
import { useI18n } from "@/i18n/LanguageProvider";
import { totalExperienceMonths } from "@/content/experience";
import { projects } from "@/content/projects";

const mainImage = "/assets/android-chrome-512x512.png";
const altMainImage = "/assets/photo.jpg";

/** Counts from 0 to `end` once, after a short delay. */
function useCountUp(end: number, duration: number, delay = 1000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.floor(end * p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [end, duration, delay]);
  return value;
}

export default function HeroSection(): JSX.Element {
  const { t, lang } = useI18n();
  const years = useCountUp(Math.floor(totalExperienceMonths() / 12), 1500);
  const projectCount = useCountUp(projects.length, 1200);
  const connections = useCountUp(500, 2000);

  const stats = [
    {
      value: years,
      label: t({ en: "Years Experience", fr: "Ans d'expérience" }),
      icon: <FiBriefcase size={20} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      href: "#experience",
    },
    {
      value: projectCount,
      label: t({ en: "Projects", fr: "Projets" }),
      icon: <FiLayers size={20} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      href: "#projects",
    },
    {
      value: connections,
      label: t({ en: "LinkedIn Connections", fr: "Relations LinkedIn" }),
      icon: <FiUsers size={20} />,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      href: "https://linkedin.com/in/oussama-rhammi-252177106",
      external: true,
    },
  ];

  const greetings = ["Hi,", "Hello,", "Salut,", "Bonjour,", "Salam,", "سلام,", "Hola,", "Ciao,", "Hallo,", "Olá,", "Namaste,", "Konnichiwa,"];
  const roles =
    lang === "fr"
      ? ["<Développeur/>", "Apprenant", "<Codeur/>", "Programmeur"]
      : ["<Developer/>", "Learner", "<Coder/>", "Programmer"];

  return (
    <div className="min-h-screen h-auto flex flex-col lg:flex-row justify-center items-center px-5 md:px-16 lg:px-24 xl:px-40 lg:space-x-2 relative">
      {/* Image: first on phone, second on desktop */}
      <div className="lg:w-1/2 p-6 sm:p-10 flex justify-center order-first lg:order-last mb-4 lg:mb-0">
        <FloatingImage mainImage={mainImage} altImage={altMainImage} />
      </div>

      <div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 lg:w-1/2 lg:pl-3 order-last lg:order-first w-full">
        {settings.showAvailableForOpportunities && (
          <div className="mb-4">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 py-1 hover:bg-emerald-200 dark:hover:bg-emerald-800">
              🟢 {t({ en: "Available for opportunities", fr: "Disponible pour de nouvelles opportunités" })}
            </Badge>
          </div>
        )}

        <FlipWords words={greetings} duration={3000} />
        <br />
        <span className="text-base">{t({ en: "I am Rhammi. I am a ", fr: "Je suis Rhammi. Je suis " })}</span>
        <FlipWords
          key={`roles-${lang}`}
          words={roles}
          duration={15000}
          className="dark:text-emerald-500 text-emerald-600 text-base"
        />
        <TextGenerateEffect
          key={`welcome-${lang}`}
          words={t({ en: "Welcome to my over-engineered portfolio site.", fr: "Bienvenue sur mon portfolio un brin trop travaillé." })}
          className="text-base"
        />

        <div className="flex flex-wrap gap-2 mt-8">
          <ResumeButton />
          <Button variant="link" className="flex items-center gap-2 rounded-2xl" asChild>
            <a href="#contact">
              <FiMail size={16} />
              {t({ en: "Get In Touch", fr: "Me contacter" })}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 text-center">
          {stats.map((stat) => (
            <a
              key={stat.href}
              href={stat.href}
              target={stat.external ? "_blank" : "_self"}
              rel={stat.external ? "noopener noreferrer" : undefined}
              className={`${stat.bgColor} p-3 sm:p-4 rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-md group border border-transparent block no-underline`}
            >
              <div className={`${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {stat.value.toLocaleString()}+
              </div>
              <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
