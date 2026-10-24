// components/PrestoDetailsPage.tsx
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useState } from "react";
import {
  FaBoxes,
  FaCalculator,
  FaClipboardList,
  FaGlobe,
  FaHandshake,
  FaSlidersH,
} from "react-icons/fa";
import { SiReact, SiSupabase } from "react-icons/si";
import { Link } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";
import { Button } from "./ui/button";

const presto = {
  title: "Tarif – Service Business Manager",
  subtitle: "Configurable management PWA for small service teams · in production at Installation Presto",
  longDescription: `A generic management app for small service businesses run by a few partners. Everything is
    configured from a settings page: company name, partners and their join dates, how the margin is split,
    default prices, inventory, extras, travel zones and the quote messages in French and English. It covers the
    whole cycle: a public request page for clients, an inbox, a quote builder, job tracking and full partner
    accounting. Its first deployment is Installation Presto, the TV-mounting business I co-founded,
    where it has been used for every job since launch.`,
  role: "Co-founder & Full-Stack Developer",
  duration: "Personal project • 2026 – Present",
  liveUrl: "https://www.installationpresto.ca/",
  video: "/assets/tarif/demo.mp4",
  poster: "/assets/tarif/poster.jpg",
  screens: [
    { src: "/assets/tarif/requests.jpg", title: "Requests", desc: "Every detail of a client request, one tap to price it" },
    { src: "/assets/tarif/quote.jpg", title: "Quote", desc: "Live margin and a ready-to-send message in the client's language" },
    { src: "/assets/tarif/jobs.jpg", title: "Jobs", desc: "Who was on site, who collected the payment, each partner's share" },
    { src: "/assets/tarif/money.jpg", title: "Money", desc: "Cash in and out, and who owes whom" },
    { src: "/assets/tarif/partners.jpg", title: "Partner balances", desc: "What each partner earned, paid and is owed" },
    { src: "/assets/tarif/settings.jpg", title: "Settings", desc: "Partners, work share and default prices" },
    { src: "/assets/tarif/inventory.jpg", title: "Inventory", desc: "Stock, purchase history and alert thresholds" },
    { src: "/assets/tarif/public.jpg", title: "Public request page", desc: "The one-minute form clients fill in" },
    { src: "/assets/tarif/sent.jpg", title: "Request sent", desc: "The price comes back by text" },
  ],
  backendStack: ["Supabase (PostgreSQL)", "Supabase Auth", "Supabase Storage", "Vercel"],
  frontendStack: ["React 19", "TypeScript", "Vite", "PWA (vite-plugin-pwa)", "i18n FR / EN"],
  features: [
    { icon: <FaSlidersH />, title: "Fully Configurable", desc: "Company, partners, margin split, default prices, inventory, extras, travel zones and message templates are all set in the app. Config can be exported and imported.", color: "purple" },
    { icon: <FaGlobe />, title: "Public Request Page", desc: "Bilingual form where clients describe the job, pick options and a time slot, and upload a photo. Requests land in an inbox with an app-icon badge.", color: "blue" },
    { icon: <FaCalculator />, title: "Quote Builder", desc: "Price lines, extras, travel and free lines with live margin. The client message is generated from templates in the client's language.", color: "emerald" },
    { icon: <FaClipboardList />, title: "Jobs & Payouts", desc: "Each job records who was on site and who collected the money; each partner's share is computed automatically.", color: "cyan" },
    { icon: <FaHandshake />, title: "Partner Accounting", desc: "Cash in and out, expenses by category, transfers between partners and a running balance of who owes whom.", color: "rose" },
    { icon: <FaBoxes />, title: "Inventory & Assets", desc: "Stock with purchase history, cost computed from purchases and low-stock alerts. Tools and unsold stock are tracked as shared assets.", color: "amber" },
  ],
  challenges: [
    "Making one app fit any small service business without code changes",
    "Several partners editing the same data from their phones at the same time",
    "Staying usable on a job site with a weak or no connection",
    "Splitting profits fairly when partners join later and tools are bought by different people",
  ],
  solutions: [
    "Everything business-specific lives in a versioned, exportable configuration edited from the settings page",
    "Optimistic concurrency: each save checks a version number and reloads instead of overwriting a partner's work",
    "Local cache shown instantly at startup, with debounced background sync to Supabase",
    "Framework-free calculation module: work share per job, shared pot, join dates, tools kept out of job costs",
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
  const [openImage, setOpenImage] = useState<number | null>(null);

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 dark:text-white">{presto.title}</h1>
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

          </div>
        </div>

        {/* Video */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Project Showcase</h2>
          <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <video controls playsInline preload="metadata" poster={presto.poster} className="w-full h-full">
              <source src={presto.video} type="video/mp4" />
            </video>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3 italic">
            A tour of the app in 45 seconds: requests, quotes, jobs, money, settings and the public request page.
            Demo data: names and amounts are fictional. The management app runs in French; its UI was translated to English for this demo.
          </p>
        </div>

        {/* Screens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Screens</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {presto.screens.map((sc, idx) => (
              <figure key={sc.src} className="flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => setOpenImage(idx)}
                  aria-label={`Enlarge: ${sc.title}`}
                  className="block w-full max-w-[200px] rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <img
                    src={sc.src}
                    alt={sc.title}
                    loading="lazy"
                    className="w-full rounded-[1.75rem] border-[6px] border-gray-800 shadow-xl transition-transform hover:scale-[1.03] cursor-zoom-in"
                  />
                </button>
                <figcaption className="mt-3">
                  <div className="font-semibold text-gray-800 dark:text-gray-200">{sc.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{sc.desc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <ImageLightbox images={presto.screens} index={openImage} onIndexChange={setOpenImage} />
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
