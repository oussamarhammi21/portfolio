// components/SuperInfiniteCardsDetailsPage.tsx
import { useParams, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { SiGithub, SiAngular, SiDotnet, SiPostgresql } from "react-icons/si";
import { FaGamepad, FaChartLine, FaComments, FaEye, FaServer, FaDatabase, FaUsers } from "react-icons/fa";

const projectDetails = {
  id: "super-cartes-infinies",
  title: "Super Infinite Cards",
  description: "Real-time multiplayer card game with ELO ranking system",
  longDescription: `
    A Hearthstone-style card game developed as a postsecondary capstone project over 3 sprints.
    The application enables players to battle in real-time, collect cards, build decks,
    and climb the ranks using an ELO ranking system.
    
    The project was developed following Agile methodologies and TDD (Test Driven Development),
    with continuous integration via Azure DevOps and mandatory code reviews.
  `,
  techStack: ["Angular", ".NET 7", "SignalR", "PostgreSQL", "JWT", "Azure DevOps", "TDD"],
  backendStack: [
    ".NET 7",
    "ASP.NET WebAPI",
    "Entity Framework Core",
    "SignalR",
    "JWT Authentication",
    "xUnit Testing",
    "PostgreSQL",
    "Clean Architecture"
  ],
  frontendStack: [
    "Angular 15",
    "TypeScript",
    "RxJS",
    "Angular Material",
    "SignalR Client",
    "JWT Interceptors",
    "Reactive Forms"
  ],
  features: [
    "Real-time matchmaking with ELO system",
    "Live multiplayer gameplay using SignalR",
    "Card collection with rarities (Common, Rare, Epic, Legendary)",
    "Complex power system (First Strike, Thorns, Heal, Poison, Stun)",
    "Spectator mode with integrated chat",
    "Full administration panel (CRUD operations)",
    "Unit testing with code coverage requirements"
  ],
  challenges: [
    "Real-time synchronization of player actions",
    "Managing complex game states (powers, status effects)",
    "Microservices architecture for game/admin separation",
    "Unit testing complex game logic",
    "Continuous deployment with Azure DevOps"
  ],
  solutions: [
    "SignalR implementation for real-time communications",
    "State Machine pattern for game logic",
    "Clear separation of responsibilities (Clean Architecture)",
    "Test Driven Development approach",
    "CI/CD pipeline with automated testing"
  ],
  role: "Full-Stack Developer & Software Architect",
  teamSize: 4,
  duration: "PostSecondary Capstone Project (3 Sprints) • 2024",
  liveUrl: "#",
  images: [
    "/assets/sci/gameplay.jpg",
    "/assets/sci/deck-builder.jpg",
    "/assets/sci/collection.jpg",
    "/assets/sci/admin-panel.jpg",
    "/assets/sci/matchmaking.jpg"
  ],
  videoUrl: "#"
};

// Helper functions for image descriptions
const getImageTitle = (index: number) => {
  const titles = [
    "Gameplay Interface",
    "Deck Builder",
    "Card Collection",
    "Admin Dashboard",
    "Matchmaking Screen"
  ];
  return titles[index] || `Screenshot ${index + 1}`;
};

const getImageDescription = (index: number) => {
  const descriptions = [
    "Real-time battle interface with card interactions and player actions",
    "Deck building interface for creating custom card decks",
    "Player's card collection showing rarity and card details",
    "Administrative panel for managing game content and users",
    "Matchmaking interface showing player rankings and queue status"
  ];
  return descriptions[index] || "Project interface screenshot";
};

export default function SuperInfiniteCardsDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectDetails;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {project.longDescription}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
              <span className="font-semibold text-blue-700 dark:text-blue-300">Role:</span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{project.role}</span>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-lg">
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">Duration:</span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Video/Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Project Showcase</h2>
          
          {/* Placeholder for video */}
          {project.videoUrl && project.videoUrl !== "#" ? (
            <div className="mb-8">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Project demo video will be displayed here</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl mb-8 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">
                Game demo video coming soon...
              </p>
            </div>
          )}

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
              <div 
                key={index} 
                className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="aspect-video flex flex-col items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getImageTitle(index)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Click to view larger
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {getImageDescription(index)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Backend */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaServer className="text-2xl text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Backend</h3>
              </div>
              <ul className="space-y-2">
                {project.backendStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frontend */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <SiAngular className="text-2xl text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {project.frontendStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features & Functionality */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaGamepad className="text-xl text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Multiplayer</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time matchmaking, turn-based battles, live player synchronization
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaChartLine className="text-xl text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Ranking</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ELO ranking system, competitive ladder, seasonal leaderboards
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaComments className="text-xl text-green-600 dark:text-green-400" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Spectator</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Watch live matches, integrated chat system, shareable game links
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaEye className="text-xl text-amber-600 dark:text-amber-400" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Administration</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Complete admin interface, card management, user statistics
              </p>
            </div>
          </div>
        </div>

        {/* Development Methodology */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Development Methodology</h2>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">Agile & Sprints</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>3 development sprints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Regular planning meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Team retrospectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Azure DevOps Boards</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">Test Driven Development</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Unit testing with xUnit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Integration testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Code coverage requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Test-first approach</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">DevOps Practices</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Continuous Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Automated deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Mandatory code reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>Branch protection rules</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Challenges & Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technical Challenges & Solutions</h2>
          
          <div className="space-y-6">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <span className="font-bold text-red-600 dark:text-red-400">Challenge</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{challenge}</p>
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                      <span>✓</span>
                      <span className="font-medium">Solution:</span>
                      <span>{project.solutions[idx]}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}