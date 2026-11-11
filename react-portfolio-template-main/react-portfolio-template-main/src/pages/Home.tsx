import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import ExperienceSection from "@/components/Experience";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectSection";
import ToolsForDev from "@/components/DevToolsSection";
import Contact from "./Contact";

export default function Home(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 overflow-x-clip">
      <HeroSection />
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsForDev variant="slider" />
      <Contact />
    </main>
  );
}
