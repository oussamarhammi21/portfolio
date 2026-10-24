// components/PrestoDetailsPage.tsx
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  FaBoxes,
  FaCalculator,
  FaClipboardList,
  FaGlobe,
  FaHandshake,
  FaMobileAlt,
} from "react-icons/fa";
import { SiReact, SiSupabase } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const presto = {
  title: "Installation Presto",
  subtitle: "Business management PWA for my TV-mounting service",
  longDescription: `Installation Presto is the TV-mounting business I run with two partners. I built its whole
    software side: a public bilingual request page where clients describe their job and upload a photo of
    their wall, and an installable management app we use every day to price jobs in seconds, send the quote
    in the client's language, track every job, manage our mount inventory, and split profits fairly between
    partners. It has been used in production for every job since launch.`,
  role: "Co-founder & Full-Stack Developer",
  duration: "Personal business • 2026 – Present",
  liveUrl: "https://www.installationpresto.ca/",
  backendStack: ["Supabase (PostgreSQL)", "Supabase Auth", "Supabase Storage", "Vercel"],
  frontendStack: ["React 19", "TypeScript", "Vite", "PWA (vite-plugin-pwa)", "i18n FR / EN"],
  features: [
    { icon: <FaGlobe />, title: "Public Request Page", desc: "Bilingual form where clients pick TV size, mount and extras, choose a date and upload a photo of their wall.", color: "blue" },
    { icon: <FaCalculator />, title: "Instant Quotes", desc: "Price grid with mounts, extras and travel zones. The client message is generated in the language the client used.", color: "emerald" },
    { icon: <FaClipboardList />, title: "Job Tracking", desc: "Every job with revenue, cost, margin, who worked on it and who collected the payment.", color: "purple" },
    { icon: <FaBoxes />, title: "Inventory", desc: "Mount stock with purchase history, cost computed automatically from purchases, and low-stock alerts.", color: "amber" },
    { icon: <FaHandshake />, title: "Partner Accounting", desc: "Configurable work share, shared tools and stock, and a running balance telling who owes whom.", color: "rose" },
    { icon: <FaMobileAlt />, title: "Installable PWA", desc: "Works like a native app on our phones, with an icon badge showing pending requests.", color: "cyan" },
  ],
  challenges: [
    "Three partners editing the same data from their phones at the same time",
    "Staying usable on a job site with a weak or no connection",
    "Splitting profits fairly when partners join later and tools are bought by different people",
    "Keeping the request flow simple enough for clients on mobile, in French or English",
  ],
  solutions: [
    "Optimistic concurrency: each save checks a version number and reloads instead of overwriting a partner's work",
    "Local cache shown instantly at startup, with debounced background sync to Supabase",
    "Pure, framework-free calculation module: work share per job, shared pot, entry dates per partner",
    "Short step-by-step form, wall photo compressed client-side before upload to Supabase Storage",
  ],
};

const colorMap: Record<string, string> = {
  purple: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-100 dark:border-purple-800/30 text-purple-600 dark:text-purple-400",
  blue:   "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400",
  emerald:"from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-100 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400",
  amber:  "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-100 dark:border-amber-800/30 text-amber-600 dark:text-amber-400",
  rose:   "from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 border-rose-100 dark:border-rose-800/30 text-rose-600 dark:text-rose-400",
  cyan:   "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-cyan-100 dark:border-cyan-800/30 text-cyan-600 dark:text-cyan-400",
};

export default function PrestoDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nav */}
        <div className="mb-8">
          <Link to="/#projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">{presto.title}</h1>
          <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-4">{presto.subtitle}</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {presto.longDescription}
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
              <span className="font-semibold text-blue-700 dark:text-blue-300">Role:</span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{presto.role}</span>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-lg">
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">Duration:</span>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{presto.duration}</span>
            </div>
            <Button asChild>
              <a href={presto.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit the live site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <SiSupabase className="text-2xl text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Backend</h3>
              </div>
              <ul className="space-y-2">
                {presto.backendStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <SiReact className="text-2xl text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend</h3>
              </div>
              <ul className="space-y-2">
                {presto.frontendStack.map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full" />
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
            {presto.features.map((f, idx) => {
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
              {presto.challenges.map((c, idx) => (
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
              {presto.solutions.map((s, idx) => (
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
