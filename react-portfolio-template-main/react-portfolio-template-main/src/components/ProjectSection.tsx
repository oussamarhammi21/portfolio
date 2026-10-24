import { SiAngular, SiDotnet, SiFastapi, SiGithub, SiGoogleplay, SiNextdotjs, SiQuarkus } from "react-icons/si";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GoLinkExternal } from "react-icons/go";
import { CardContainer } from "./ui/3d-card";
import { FaBrain, FaDatabase, FaLeaf, FaUsers, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  icons?: JSX.Element[];
  github?: string;
  liveUrl?: string;
  playstore?: string;
  live?: boolean;
  duration?: string;
}

function ProjectCard(props: ProjectCardProps) {
  const {
    title,
    description,
    techStack,
    imageUrl,
    icons,
    live,
    github,
    liveUrl,
    playstore,
    duration,
  } = props;
  const cardContent = (
    <CardContainer className="inter-var h-full">
      <Card className="max-w-sm w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] flex flex-col">
        <CardHeader className="flex-shrink-0">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-cover rounded-2xl mb-4"
            />
          ) : (
            <div className="w-full aspect-video rounded-2xl mb-4 flex items-center justify-center gap-4 text-4xl text-gray-700 dark:text-gray-300 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
              {icons}
            </div>
          )}
          {duration && <div className="text-xs text-muted-foreground">{duration}</div>}
          <CardTitle className="flex items-center gap-2">
            {title}
            {live && (
              <span className="inline-block h-2 w-2 rounded-2xl bg-emerald-500 -translate-y-0.5"></span>
            )}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="font-normal rounded-2xl"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between flex-shrink-0 mt-auto">
          {github && (
            <Button variant="ghost" size="sm" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <SiGithub />
                GitHub
              </a>
            </Button>
          )}
          {playstore && (
            <Button variant="ghost" size="sm" asChild>
              <a href={playstore} target="_blank" rel="noopener noreferrer">
                <SiGoogleplay />
                App
              </a>
            </Button>
          )}
          {liveUrl && !liveUrl.startsWith("/") && (
            <GoLinkExternal className="text-emerald-500" />
          )}
        </CardFooter>
      </Card>
    </CardContainer>
  );

  if (!liveUrl) return cardContent;

  // Pages de détail internes : même onglet. Liens externes : nouvel onglet.
  return liveUrl.startsWith("/") ? (
    <Link to={liveUrl} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      {cardContent}
    </a>
  );
}

const projects = [
  {
  id: "lab-management-system", // ID pour le routing
    title: "GRCB Civil Engineering Platform",
    description: "Full-stack Quarkus & Angular application for GRCB research group",
    techStack: [
      "Java 17",
      "Quarkus",
      "Angular 17",
      "PostgreSQL",
      "Keycloak",
      "TypeScript",
      "Oracle Cloud",
      "REST API"
    ],
    imageUrl: "/assets/logoProjet1.jpg",
    icons: [
      <SiQuarkus key="quarkus" />,
      <SiAngular key="angular" />,
      <FaDatabase key="db" />,
      <FaUserShield key="auth" />
    ],
    features: [
      "Quarkus backend with REST API",
      "Angular frontend with TypeScript",
      "PostgreSQL database management",
      "Keycloak authentication",
      "Role-based access control"
    ],
    role: "Full-Stack Developer",
    duration: "University Capstone Project • 2024",
    liveUrl: "/projects/1"
  },
{
id: "foldio",
title: "Foldio",
description: "AI-enhanced document management platform — query your files in natural language via a secure RAG architecture.",
techStack: [
  "Next.js",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "RAG",
  "Docling",
  "Cloudflare R2",
],
imageUrl: "/assets/foldio.png",
icons: [
  <SiNextdotjs key="next" />,
  <SiFastapi key="fastapi" />,
  <FaBrain key="rag" />,
  <FaLeaf key="foldio" />
],
features: [
  "RAG architecture with semantic search",
  "Multi-tenant with role-based access control",
  "Self-hosted LLM included in free tier",
  "Secure cloud storage (Cloudflare R2)",
  "Automatic text extraction via Docling"
],
role: "Full-Stack Developer",
duration: "Personal project • 2025",
liveUrl: "/projects/foldio"
},
  {
    title: "Personal Portfolio",
    description: "My personal portfolio site",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "shadcn/ui",
      "TypeScript",
      "Acernity",
      "Vercel",
    ],
    imageUrl: "/assets/portfolio-thumb.png",
    live: true,
    liveUrl: "https://rhammiouss.vercel.app/",
  },
{
  id: "super-cartes-infinies",
  title: "Super Infinite Cards",
  description: "Hearthstone-style card game with real-time multiplayer features",
  techStack: [
    "Angular",
    "TypeScript",
    ".NET 7",
    "ASP.NET WebAPI",
    "SignalR",
    "Entity Framework Core",
    "PostgreSQL",
    "Azure DevOps",
    "JWT Authentication",
    "xUnit"
  ],
  icons: [
    <SiAngular key="angular" />,
    <SiDotnet key="dotnet" />,
    <FaDatabase key="db" />,
    <FaUsers key="team" />
  ],
  features: [
    "Real-time multiplayer gameplay with SignalR",
    "ELO ranking and matchmaking system",
    "Card collection and deck building",
    "Complex card powers and spell system",
    "Spectator mode with live chat",
    "Full admin panel with ASP.NET MVC"
  ],
  role: "Full-Stack Developer",
  duration: "Post-secondary Capstone Project • 2023",
   liveUrl: "/projects/2",
  
},
];

export default function ProjectsSection() {
  return (
    <div className="pt-5" id="projects">
      <h1 className="text-3xl font-bold mb-2">PROJECTS</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        A showcase of my work, highlighting the technologies I've used and the
        problems I've solved.
      </p>
      <section className="p-6 md:p-12 bg-gradient-to-b max-w-4xl mx-auto transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                imageUrl={project.imageUrl}
                icons={project.icons}
                liveUrl={project.liveUrl}
                live={project.live}
                duration={project.duration}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}  
