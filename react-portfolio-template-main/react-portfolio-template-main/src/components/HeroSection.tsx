import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiMail, FiBriefcase, FiUsers, FiLayers } from "react-icons/fi";
import FloatingImage from "@/components/MyImage";
import ResumeButton from "./DownloadResumeBtn";
import { settings } from "@/config/settings";
import { useI18n } from "@/i18n/LanguageProvider";
import { totalExperienceMonths } from "@/content/experience";
import { projects } from "@/content/projects";

const mainImage = "/assets/android-chrome-512x512.png";
const altMainImage = "/assets/photo.jpg";

export default function HeroSection(): JSX.Element {
  const { t, lang } = useI18n();
  const years = Math.floor(totalExperienceMonths() / 12);

  const stats = [
    {
      value: `${years}+`,
      label: t({ en: "Years of experience", fr: "Ans d'expérience" }),
      icon: <FiBriefcase size={18} />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      href: "#experience",
    },
    {
      value: `${projects.length}`,
      label: t({ en: "Projects", fr: "Projets" }),
      icon: <FiLayers size={18} />,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      href: "#projects",
    },
    {
      value: "500+",
      label: t({ en: "LinkedIn connections", fr: "Relations LinkedIn" }),
      icon: <FiUsers size={18} />,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      href: "https://linkedin.com/in/oussama-rhammi-252177106",
      external: true,
    },
  ];

  const greetings =
    lang === "fr" ? ["Bonjour,", "Salut,", "Hello,", "Salam,", "Hola,"] : ["Hi,", "Hello,", "Bonjour,", "Salam,", "Hola,"];

  return (
    <section
      id="home"
      className="min-h-[calc(100svh-6rem)] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-10 lg:py-16"
    >
      {/* Photo first on phone, right side on desktop */}
      <div className="flex justify-center lg:order-last lg:w-5/12">
        <FloatingImage mainImage={mainImage} altImage={altMainImage} />
      </div>

      <div className="w-full lg:w-7/12 text-neutral-600 dark:text-neutral-400">
        {settings.showAvailableForOpportunities && (
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 py-1 hover:bg-emerald-200 dark:hover:bg-emerald-800">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            {t({ en: "Open to opportunities", fr: "Ouvert aux opportunités" })}
          </Badge>
        )}

        <div className="text-2xl sm:text-3xl">
          <FlipWords key={lang} words={greetings} duration={3000} />
        </div>
        <h1 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t({ en: "I'm Oussama Rhammi.", fr: "Je suis Oussama Rhammi." })}
        </h1>
        <p className="mt-3 text-base sm:text-lg">
          {t({
            en: "Full-stack developer and IT analyst in security governance at Santé Québec. I turn real needs into tools people use.",
            fr: "Développeur full-stack et analyste informatique en gouvernance de la sécurité à Santé Québec. Je transforme des besoins réels en outils utilisés.",
          })}
        </p>
        <TextGenerateEffect
          key={`tagline-${lang}`}
          words={t({ en: "Welcome to my over-engineered portfolio.", fr: "Bienvenue sur mon portfolio un peu trop travaillé." })}
          className="text-sm sm:text-base font-normal"
        />

        <div className="flex flex-wrap items-center gap-2 mt-6">
          <ResumeButton />
          <Button variant="link" className="flex items-center gap-2 rounded-2xl" asChild>
            <a href="#contact">
              <FiMail size={16} />
              {t({ en: "Get in touch", fr: "Me contacter" })}
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 text-center">
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              target={stat.external ? "_blank" : undefined}
              rel={stat.external ? "noopener noreferrer" : undefined}
              className={`${stat.bg} p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-md group block`}
            >
              <div className={`${stat.color} mb-1.5 flex justify-center group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
