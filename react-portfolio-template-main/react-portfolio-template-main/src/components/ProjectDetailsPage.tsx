// components/ProjectDetailsPage.tsx
import { useParams, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Play, Pause, X, Maximize2 } from "lucide-react";
import { SiGithub, SiQuarkus, SiAngular, SiPostgresql, SiKeycloak } from "react-icons/si";
import { FaCalendarAlt, FaTools, FaBoxOpen, FaUserShield, FaServer, FaDatabase } from "react-icons/fa";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  backendStack: string[];
  frontendStack: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  role: string;
  duration: string;
  github?: string;
  liveUrl?: string;
  videos: VideoItem[]; // Tableau de vidéos
  mainVideoUrl?: string;
}

interface VideoItem {
  url: string;
  title: string;
  description: string;
  poster?: string;
}

// Données du projet (vous pouvez les externaliser)
const projectDetails: ProjectDetail = {
  id: "lab-management-system",
  title: "GRCB civil engineering Plateform",
  description: "Full-stack web application for GRCB research group",
  longDescription: `
    A comprehensive laboratory management system developed for the Cement and Concrete Research Group (GRCB) 
    at University of Sherbrooke. This enterprise application streamlines the management of laboratory resources, 
    equipment reservations, material inventory, and user access control for research teams.
    
    The system was designed to replace manual processes and improve efficiency in laboratory resource allocation 
    and scheduling across multiple research teams.
  `,
  techStack: ["Java", "Quarkus", "Angular", "PostgreSQL", "Keycloak", "TypeScript", "REST API"],
  backendStack: ["Java 17", "Quarkus", "PostgreSQL", "Keycloak", "REST API", "JWT", "Maven"],
  frontendStack: ["Angular", "TypeScript", "RxJS", "Angular Material", "SCSS", "Calendar Library"],
  features: [
    "Equipment and material catalog management",
    "Interactive laboratory reservation calendar",
    "Role-based access control (Admin/User)",
    "Email authentication (@usherbrooke.ca)",
    "Real-time reservation approval workflow",
    "Inventory tracking and consumption monitoring",
    "Equipment status and availability tracking",
    "User request and approval system"
  ],
  challenges: [
    "Complex database relationships between equipment, materials, and reservations",
    "Real-time calendar synchronization for multiple users",
    "Secure authentication with university email domain restriction",
    "Role-based permissions for different user types",
    "Responsive design for various device types"
  ],
  solutions: [
    "Designed normalized PostgreSQL schema with proper foreign key relationships",
    "Implemented WebSocket for real-time calendar updates",
    "Integrated Keycloak with custom authentication flow",
    "Created granular permission system with middleware validation",
    "Used Angular Material with responsive breakpoints"
  ],
  role: "Full-Stack Developer & Database Architect",
  duration: "University Capstone Project • 2024-2025",
  liveUrl: "#",
  videos: [
    {
      url: "/assets/login.mp4",
      title: "Login & Authentication",
      description: "Secure login flow with university email validation",
      poster: "/assets/lab-system/login-poster.jpg"
    },
    {
      url: "/assets/calendar.mp4",
      title: "Calendar & Scheduling",
      description: "Interactive reservation calendar with real-time updates",
      poster: "/assets/lab-system/calendar-poster.jpg"
    },
    {
      url: "/assets/equipment.mp4",
      title: "Equipment Management",
      description: "Equipment catalog and availability tracking",
      poster: "/assets/lab-system/equipment-poster.jpg"
    },
  ],
  mainVideoUrl: "/assets/Projetvideo.mp4"
};

// Ajouter les styles d'animation globalement
const styles = `
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.fullscreen-modal {
  animation: zoomIn 0.3s ease-out;
}
`;

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenPlaying, setIsFullscreenPlaying] = useState(false);
  const [showFullscreenControls, setShowFullscreenControls] = useState(true);

  // SIMPLE: Tout clic sur la carte ouvre le plein écran
  const handleCardClick = () => {
    enterFullscreen();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    
    // Démarrer la vidéo miniature au survol
    if (videoRef.current && !isFullscreen) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isFullscreen) {
      setIsHovered(false);
      // Arrêter la vidéo miniature quand on quitte
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };

  const enterFullscreen = () => {
    setIsFullscreen(true);
    setShowFullscreenControls(true);
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
    
    // Masquer les contrôles après 3 secondes
    setTimeout(() => {
      if (isFullscreen) {
        setShowFullscreenControls(false);
      }
    }, 3000);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto'; // Réactiver le scroll
    
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
      setIsFullscreenPlaying(false);
    }
    
    // Arrêter la vidéo miniature aussi
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setIsHovered(false);
    }
  };

  const toggleFullscreenPlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêcher la fermeture
    if (fullscreenVideoRef.current) {
      if (isFullscreenPlaying) {
        fullscreenVideoRef.current.pause();
        setIsFullscreenPlaying(false);
      } else {
        fullscreenVideoRef.current.play();
        setIsFullscreenPlaying(true);
      }
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen();
      }
    };

    const handleFullscreenClick = () => {
      // Montrer les contrôles quand on clique dans le modal
      if (isFullscreen) {
        setShowFullscreenControls(true);
        
        // Masquer à nouveau après 3 secondes
        setTimeout(() => {
          if (isFullscreen) {
            setShowFullscreenControls(false);
          }
        }, 3000);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleFullscreenClick);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleFullscreenClick);
    };
  }, [isFullscreen]);

  return (
    <>
      {/* Carte vidéo - TOUT CLIC ouvre le plein écran */}
      <div 
        ref={containerRef}
        className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick} // Tout clic sur la carte ouvre le plein écran
      >
        {/* Video Player miniature */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay avec informations - pas de clic séparé, fait partie de la carte */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="transform transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-white">{video.title}</h3>
            </div>
            <p className="text-sm text-gray-200">{video.description}</p>
          </div>
        </div>

        {/* Play Indicator - juste visuel, pas cliquable séparément */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </div>
        </div>

        {/* Info bar au bas (toujours visible légèrement) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white text-sm">{video.title}</h3>
              <p className="text-xs text-gray-300 truncate">{video.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-gray-400'}`}></div>
              <span className="text-xs text-gray-300">
                {isPlaying ? 'Playing' : 'Click to expand'}
              </span>
              <Maximize2 className="w-4 h-4 text-gray-300 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal plein écran */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
          style={{ animation: 'zoomIn 0.3s ease-out' }}
          onClick={exitFullscreen} // Cliquer n'importe où ferme le modal
        >
          {/* Conteneur vidéo plein écran */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()} // Empêcher la fermeture si on clique sur la vidéo
          >
            {/* Vidéo en plein écran */}
            <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={fullscreenVideoRef}
                className="w-full h-full object-contain"
                poster={video.poster}
                muted={false}
                loop
                playsInline
                autoPlay
                onPlay={() => setIsFullscreenPlaying(true)}
                onPause={() => setIsFullscreenPlaying(false)}
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Contrôles personnalisés en plein écran */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                showFullscreenControls ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Overlay sombre pour les contrôles */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
                
                {/* Bouton Play/Pause au centre */}
                <button
                  onClick={toggleFullscreenPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  title={isFullscreenPlaying ? "Pause" : "Play"}
                >
                  {isFullscreenPlaying ? (
                    <Pause className="w-12 h-12 text-white" />
                  ) : (
                    <Play className="w-12 h-12 text-white" />
                  )}
                </button>

                {/* Bouton fermer en haut à droite */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    exitFullscreen();
                  }}
                  className="absolute top-4 right-4 p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-200 hover:scale-110 shadow-lg"
                  title="Close"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Info en bas */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-lg text-gray-200">{video.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${isFullscreenPlaying ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                      <span className="text-sm text-gray-300">
                        {isFullscreenPlaying ? 'Now playing' : 'Paused'}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      Click anywhere to close • Press ESC to close
                    </span>
                  </div>
                </div>
              </div>

              {/* Indicateur que la vidéo est cliquable */}
              {!showFullscreenControls && (
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Click to show controls
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [isMainVideoPlaying, setIsMainVideoPlaying] = useState(false);
  
  const project = projectDetails;

  const toggleMainVideo = () => {
    if (mainVideoRef.current) {
      if (isMainVideoPlaying) {
        mainVideoRef.current.pause();
        setIsMainVideoPlaying(false);
      } else {
        mainVideoRef.current.play();
        setIsMainVideoPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Ajouter les styles globaux */}
      <style>{styles}</style>
      
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

          {/* Main Video Player */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Project Showcase</h2>
            
            {/* Main Video Player */}
            {project.mainVideoUrl && (
              <div className="mb-8 relative group">
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  <video 
                    ref={mainVideoRef}
                    controls
                    className="w-full h-full"
                    poster="/assets/lab-system/calendar-poster.jpg"
                    onPlay={() => setIsMainVideoPlaying(true)}
                    onPause={() => setIsMainVideoPlaying(false)}
                  >
                    <source src={project.mainVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Custom play/pause button overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={toggleMainVideo}
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                    {isMainVideoPlaying ? (
                      <Pause className="w-10 h-10 text-white" />
                    ) : (
                      <Play className="w-10 h-10 text-white" />
                    )}
                  </div>
                </div>
                
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Demo: Calendar functionality and reservation workflow
                </p>
              </div>
            )}

            {/* Video Gallery - TOUT CLIC sur la carte ouvre le plein écran */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.videos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Maximize2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                    Interactive Fullscreen Preview
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400/80">
                    Click <strong>anywhere</strong> on a feature card to view it in fullscreen mode. 
                    Videos autoplay on hover. In fullscreen, click anywhere to close.
                  </p>
                </div>
              </div>
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
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    <SiQuarkus className="inline mr-1" /> Quarkus
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    <SiPostgresql className="inline mr-1" /> PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    <SiKeycloak className="inline mr-1" /> Keycloak
                  </span>
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
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                    <SiAngular className="inline mr-1" /> Angular
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                    RxJS
                  </span>
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaUserShield className="text-xl text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Authentication</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Secure login with @usherbrooke.ca email, role-based access control
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-xl border border-purple-100 dark:border-purple-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaCalendarAlt className="text-xl text-purple-600 dark:text-purple-400" />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Scheduling</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Interactive calendar for lab reservations with real-time updates
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-xl border border-green-100 dark:border-green-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaTools className="text-xl text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Equipment</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete equipment catalog with availability and detailed descriptions
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-xl border border-amber-100 dark:border-amber-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaBoxOpen className="text-xl text-amber-600 dark:text-amber-400" />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">Inventory</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Material inventory tracking with consumption monitoring
                </p>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions Section */}
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 p-6 rounded-xl border border-rose-100 dark:border-rose-800/30">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <span className="text-rose-600 dark:text-rose-400">Challenges</span>
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400">Solutions</span>
              </h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}