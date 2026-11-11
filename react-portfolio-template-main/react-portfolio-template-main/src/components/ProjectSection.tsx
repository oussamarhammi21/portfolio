import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { SiAngular, SiDotnet } from "react-icons/si";
import { Badge } from "./ui/badge";
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
  const external = project.href && !project.href.startsWith("/");

  const body = (
    <article className="group h-full flex flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-neutral-800 dark:to-neutral-900">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-4xl text-neutral-600 dark:text-neutral-300">
            <span className="flex gap-4">
              <SiAngular />
              <SiDotnet />
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs text-neutral-500">
          <span>{t(project.period)}</span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span className={cn("h-2 w-2 rounded-full", statusColor[project.status])} />
            {t(statusLabel[project.status])}
          </span>
        </div>
        <h3 className="mt-2 flex items-center gap-1 text-lg font-bold text-neutral-900 dark:text-white">
          {project.title}
          {project.href && (
            <FiArrowUpRight className="text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500" />
          )}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-4">
          {t(project.description)}
        </p>
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="font-normal rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      {external && <span className="sr-only">{t({ en: "(opens in a new tab)", fr: "(s'ouvre dans un nouvel onglet)" })}</span>}
    </article>
  );

  if (!project.href) return body;
  return external ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {body}
    </a>
  ) : (
    <Link to={project.href} className="block h-full">
      {body}
    </Link>
  );
}

export default function ProjectsSection() {
  const { t } = useI18n();

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-12">
      <SectionHeader
        id="projects"
        title={t({ en: "Projects", fr: "Projets" })}
        subtitle={t({
          en: "What I built, with what, and where it stands today. Open a card for the details.",
          fr: "Ce que j'ai bâti, avec quoi, et où ça en est. Ouvre une carte pour les détails.",
        })}
      />
      <Slider label={t({ en: "Projects", fr: "Projets" })}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Slider>
    </section>
  );
}
