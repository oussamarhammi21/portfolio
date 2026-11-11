import { Link } from "react-router-dom";
import { SiAngular, SiDotnet } from "react-icons/si";
import { FaDatabase, FaUsers } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CardContainer } from "./ui/3d-card";
import Slider, { SectionHeader } from "./Slider";
import { useI18n } from "@/i18n/LanguageProvider";
import { projects, statusLabel, type ProjectItem, type ProjectStatus } from "@/content/projects";
import { cn } from "@/lib/utils";

const statusColor: Record<ProjectStatus, string> = {
  production: "bg-emerald-500",
  live: "bg-emerald-500",
  deploying: "bg-blue-500",
  development: "bg-amber-500",
  completed: "bg-neutral-400",
};

function ProjectCard({ project }: { project: ProjectItem }) {
  const { t } = useI18n();
  const external = !!project.href && !project.href.startsWith("/");

  const card = (
    <CardContainer className="inter-var h-full w-full" containerClassName="py-4 h-full">
      <Card className="w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] flex flex-col">
        <CardHeader className="flex-shrink-0">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              draggable={false}
              className="w-full aspect-video object-cover rounded-2xl mb-4"
            />
          ) : (
            <div className="w-full aspect-video rounded-2xl mb-4 flex items-center justify-center gap-4 text-4xl text-gray-700 dark:text-gray-300 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
              <SiAngular />
              <SiDotnet />
              <FaDatabase />
              <FaUsers />
            </div>
          )}
          <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>{t(project.period)}</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <span className={cn("h-2 w-2 rounded-full", statusColor[project.status])} />
              {t(statusLabel[project.status])}
            </span>
          </div>
          <CardTitle className="flex items-center gap-2">{project.title}</CardTitle>
          <CardDescription className="line-clamp-3">{t(project.description)}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="font-normal rounded-2xl">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end flex-shrink-0 mt-auto">
          {external ? (
            <GoLinkExternal className="text-emerald-500" aria-label={t({ en: "Opens in a new tab", fr: "S'ouvre dans un nouvel onglet" })} />
          ) : (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium opacity-0 group-hover/card:opacity-100 transition-opacity">
              {t({ en: "See details →", fr: "Voir les détails →" })}
            </span>
          )}
        </CardFooter>
      </Card>
    </CardContainer>
  );

  if (!project.href) return card;
  return external ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {card}
    </a>
  ) : (
    <Link to={project.href} className="block h-full">
      {card}
    </Link>
  );
}

export default function ProjectsSection() {
  const { t } = useI18n();
  return (
    <div className="pt-5 mb-6" id="projects">
      <SectionHeader
        id="projects"
        title={t({ en: "Projects", fr: "Projets" })}
        subtitle={t({
          en: "A showcase of my work, the technologies I used and the problems I solved.",
          fr: "Un aperçu de mes réalisations, des technologies utilisées et des problèmes réglés.",
        })}
      />
      <Slider label={t({ en: "Projects", fr: "Projets" })}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Slider>
    </div>
  );
}
