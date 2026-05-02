// components/FoldioDetailsPage.tsx
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { SiNextdotjs, SiFastapi, SiPostgresql } from "react-icons/si";
import { FaBrain, FaServer, FaShieldAlt, FaUsers, FaFileAlt, FaCloud } from "react-icons/fa";

const foldio = {
  title: "Foldio",
  longDescription: `Foldio is an AI-powered document management platform built for organizations 
    that need to query their files in natural language. Built on a RAG architecture, it extracts, 
    chunks, and semantically indexes documents so that answers are always grounded in your own content — 
    never hallucinated. The platform supports multi-tenant workspaces with isolated environments, 
    role-based access control, and a self-hosted LLM option for the free tier.`,
  role: "Full-Stack Developer",
  duration: "Personal Project • 2025",
  backendStack: ["Python", "FastAPI", "PostgreSQL", "Docling", "pgvector", "Cloudflare R2"],
  frontendStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  features: [
    { icon: <FaBrain />, title: "RAG Pipeline", desc: "Documents are chunked and encoded as semantic vectors. The AI only receives the relevant excerpts, never the full file.", color: "purple" },
    { icon: <FaUsers />, title: "Role-Based Access", desc: "Three roles per org: owner, folder manager, and member. Each sees a tailored interface with scoped permissions.", color: "blue" },
    { icon: <FaShieldAlt />, title: "Data Privacy", desc: "Retrieval is handled entirely on our infrastructure. The LLM only gets what it needs to reformulate the answer.", color: "emerald" },
    { icon: <FaCloud />, title: "Cloud Storage", desc: "Files are stored securely on Cloudflare R2 with signed URLs for time-limited access.", color: "amber" },
    { icon: <FaFileAlt />, title: "Auto Extraction", desc: "Docling extracts and structures text from PDFs, Word documents, and presentations automatically on upload.", color: "rose" },
    { icon: <FaServer />, title: "Self-Hosted LLM", desc: "Free tier includes a LLM hosted on our own infrastructure. Paid plans unlock access to more powerful third-party models.", color: "cyan" },
  ],
  challenges: [
    "Designing a multi-tenant architecture with fully isolated org data",
    "Building a RAG pipeline that stays accurate without sending full documents to the LLM",
    "Managing concurrent document extractions without blocking the event loop",
    "Implementing granular permission logic across folders, roles, and confidentiality flags",
  ],
  solutions: [
    "Used org-scoped queries and row-level filtering throughout the entire data layer",
    "Chunked documents into semantic units with pgvector for retrieval before LLM call",
    "Leveraged asyncio with semaphores and a ProcessPoolExecutor for CPU-bound Docling tasks",
    "Built a composable filter system (_build_filter) covering owner, manager, and member roles",
  ],
  mainVideoUrl: "/assets/Foldio.mp4",
};

const colorMap: Record<string, string> = {
  purple: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-100 dark:border-purple-800/30 text-purple-600 dark:text-purple-400",
  blue:   "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400",
  emerald:"from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-100 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400",
  amber:  "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-100 dark:border-amber-800/30 text-amber-600 dark:text-amber-400",
  rose:   "from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 border-rose-100 dark:border-rose-800/30 text-rose-600 dark:text-rose-400",
  cyan:   "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-100 dark:border-cyan-800/30 text-cyan-600 dark:text-cyan-400",
};

export default function FoldioDetailsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nav */}
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
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{foldio.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {foldio.longDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
              <span className="font-semibold text-blue-700 dark:text-blue-300">Role:</span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{foldio.role}</span>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-lg">
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">Duration:</span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{foldio.duration}</span>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Project Showcase</h2>
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <video
              ref={videoRef}
              controls
              className="w-full h-full"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={foldio.mainVideoUrl} type="video/mp4" />
            </video>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3 italic">
            Full demo — document upload, semantic search, and chat interface
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaServer className="text-2xl text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  <SiFastapi className="inline mr-1" /> FastAPI
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  <SiPostgresql className="inline mr-1" /> PostgreSQL
                </span>
              </div>
              <ul className="space-y-2">
                {foldio.backendStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <SiNextdotjs className="text-2xl text-gray-800 dark:text-gray-200" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  <SiNextdotjs className="inline mr-1" /> Next.js
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  TypeScript
                </span>
              </div>
              <ul className="space-y-2">
                {foldio.frontendStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foldio.features.map((f, idx) => {
              const colors = colorMap[f.color].split(" ");
              const gradientBg = `bg-gradient-to-br ${colors[0]} ${colors[1]} ${colors[2]} ${colors[3]}`;
              const border = `border ${colors[4]} ${colors[5]}`;
              const iconColor = colors[6];
              return (
                <div key={idx} className={`${gradientBg} ${border} p-5 rounded-xl`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xl ${iconColor}`}>{f.icon}</span>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{f.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 p-6 rounded-xl border border-rose-100 dark:border-rose-800/30">
            <h3 className="text-xl font-bold mb-4 text-rose-600 dark:text-rose-400">Challenges</h3>
            <ul className="space-y-3">
              {foldio.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-rose-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
            <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Solutions</h3>
            <ul className="space-y-3">
              {foldio.solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}