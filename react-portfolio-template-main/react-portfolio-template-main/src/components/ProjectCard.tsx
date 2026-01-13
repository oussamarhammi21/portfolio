// components/ProjectCard.tsx
import { SiGithub, SiGoogleplay } from "react-icons/si";
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
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  github?: string;
  liveUrl?: string;
  playstore?: string;
  live?: boolean;
  duration?: string;
  features?: string[];
  role?: string;
  teamSize?: number;
  icons?: JSX.Element[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    id,
    title,
    description,
    techStack,
    imageUrl,
    live,
    github,
    liveUrl,
    playstore,
    duration,
    features,
    role,
    teamSize,
    icons
  } = props;
  
  const projectId = id || title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/projects/${projectId}`} className="block h-full">
      <CardContainer className="inter-var h-full">
        <Card className="max-w-sm w-full h-full shadow-md hover:shadow-lg transition-shadow duration-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] flex flex-col cursor-pointer">
          <CardHeader className="flex-shrink-0">
            {/* Placeholder for project image */}
            <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-4 flex items-center justify-center">
              {icons && icons.length > 0 ? (
                <div className="flex gap-4">
                  {icons.map((icon, idx) => (
                    <div key={idx} className="text-4xl text-gray-700 dark:text-gray-300">
                      {icon}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-gray-400 dark:text-gray-600 text-sm">
                  Project preview image
                </span>
              )}
            </div>
            
            {duration && (
              <div className="text-xs text-muted-foreground mb-2">{duration}</div>
            )}
            
            {role && (
              <div className="text-xs text-blue-600 dark:text-blue-400 mb-1 font-medium">
                {role} {teamSize && `• Team of ${teamSize}`}
              </div>
            )}
            
            <CardTitle className="flex items-center gap-2 text-lg">
              {title}
              {live && (
                <span className="inline-block h-2 w-2 rounded-2xl bg-emerald-500 -translate-y-0.5"></span>
              )}
            </CardTitle>
            <CardDescription className="line-clamp-3 mt-2">
              {description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-grow space-y-4">
            {/* Features list */}
            {features && features.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  {features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {features.length > 3 && (
                    <li className="text-xs text-gray-500">+ {features.length - 3} more features</li>
                  )}
                </ul>
              </div>
            )}
            
            {/* Tech stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="font-normal text-xs rounded-2xl"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between flex-shrink-0 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="text-xs text-gray-500 italic">
              Click to view details
            </div>
            <div className="flex gap-2">
              {github && github !== "#" && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <SiGithub />
                  </a>
                </Button>
              )}
              {liveUrl && liveUrl !== "#" && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-emerald-500 text-xs p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <GoLinkExternal />
                  </a>
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </CardContainer>
    </Link>
  );
}