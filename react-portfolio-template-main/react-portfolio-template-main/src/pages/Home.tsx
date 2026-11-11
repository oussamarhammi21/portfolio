import { TracingBeam } from "@/components/ui/tracing-beam";
import { TextReveal } from "@/components/magicui/text-reveal";
import { SiFuturelearn } from "react-icons/si";
import { GiGroundbreaker } from "react-icons/gi";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import ExperienceSection from "@/components/Experience";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectSection";
import ToolsForDev from "@/components/DevToolsSection";
import Contact from "./Contact";
import { useI18n } from "@/i18n/LanguageProvider";

export default function Home(): JSX.Element {
  const { lang } = useI18n();
  return (
    <div className="overflow-x-clip">
      <HeroSection />
      <TracingBeam className="px-6 max-w-5xl">
        <AboutMe />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        {/* Shorter than the original (120vh instead of 200vh) so the page stays quick to scroll */}
        {lang === "fr" ? (
          <TextReveal key="fr" className="h-[120vh]">
            J'apprends <SiFuturelearn /> vite, surtout parce que je brise <GiGroundbreaker /> des choses encore plus vite.
          </TextReveal>
        ) : (
          <TextReveal key="en" className="h-[120vh]">
            I learn <SiFuturelearn /> fast, mostly because I break <GiGroundbreaker /> things faster.
          </TextReveal>
        )}

        <ToolsForDev variant="slider" />
        <Contact />
      </TracingBeam>
    </div>
  );
}
