import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";
import ImageLightbox from "./ImageLightbox";
import Slider from "./Slider";
import { useI18n, type Bi } from "@/i18n/LanguageProvider";

export interface ProjectDetail {
  title: string;
  tagline: Bi;
  description: Bi<string[]>;
  facts: { label: Bi; value: Bi }[];
  link?: { href: string; label: Bi };
  video?: { src: string; poster?: string; caption: Bi };
  clips?: { src: string; poster?: string; title: Bi; desc: Bi }[];
  screens?: { src: string; title: Bi; desc: Bi }[];
  stack: { backend: string[]; frontend: string[] };
  features: { icon: ReactNode; title: Bi; desc: Bi }[];
  /** Each challenge is shown next to the solution with the same index. */
  challenges: Bi<string[]>;
  solutions: Bi<string[]>;
  /** Optional extra block (e.g. methodology). */
  extra?: { title: Bi; items: { title: Bi; points: Bi<string[]> }[] };
}

const h2 = "text-xl sm:text-2xl font-bold mb-5 text-neutral-900 dark:text-neutral-100";
const card = "h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-5 shadow-sm";

export default function ProjectDetailLayout({ project }: { project: ProjectDetail }) {
  const { t } = useI18n();
  const [openImage, setOpenImage] = useState<number | null>(null);
  const screens = project.screens?.map((s) => ({ src: s.src, title: t(s.title), desc: t(s.desc) }));

  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <Helmet>
        <title>{`${project.title} · Oussama Rhammi`}</title>
        <meta name="description" content={t(project.tagline)} />
      </Helmet>

      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 -ml-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {t({ en: "Back to projects", fr: "Retour aux projets" })}
      </Link>

      {/* Header */}
      <header className="mt-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">{project.title}</h1>
        <p className="mt-2 text-lg text-emerald-600 dark:text-emerald-400">{t(project.tagline)}</p>
        <div className="mt-4 space-y-3 max-w-3xl">
          {t(project.description).map((p) => (
            <p key={p} className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <dl className="mt-6 flex flex-wrap gap-3">
          {project.facts.map((f) => (
            <div key={f.label.en} className="rounded-xl bg-neutral-100 dark:bg-neutral-800/70 px-4 py-2 text-sm">
              <dt className="inline font-semibold text-neutral-900 dark:text-white">{t(f.label)} : </dt>
              <dd className="inline text-neutral-600 dark:text-neutral-300">{t(f.value)}</dd>
            </div>
          ))}
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              {t(project.link.label)}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </dl>
      </header>

      {/* Main video */}
      {project.video && (
        <section className="mb-12">
          <h2 className={h2}>{t({ en: "Demo", fr: "Démo" })}</h2>
          <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
            <video controls playsInline preload="metadata" poster={project.video.poster} className="w-full h-full">
              <source src={project.video.src} type="video/mp4" />
            </video>
          </div>
          <p className="mt-3 text-center text-sm text-neutral-500 italic">{t(project.video.caption)}</p>
        </section>
      )}

      {/* Short clips */}
      {project.clips && (
        <section className="mb-12">
          <h2 className={h2}>{t({ en: "Walkthrough", fr: "Visite guidée" })}</h2>
          <Slider label={t({ en: "Video clips", fr: "Extraits vidéo" })} itemClassName="basis-[90%] sm:basis-[calc((100%-1rem)/2)]">
            {project.clips.map((c) => (
              <figure key={c.src} className={card}>
                <div className="aspect-video overflow-hidden rounded-xl bg-neutral-900">
                  <video controls playsInline preload="none" poster={c.poster} className="w-full h-full">
                    <source src={c.src} type="video/mp4" />
                  </video>
                </div>
                <figcaption className="mt-3">
                  <p className="font-semibold">{t(c.title)}</p>
                  <p className="text-sm text-neutral-500">{t(c.desc)}</p>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </section>
      )}

      {/* Phone screens */}
      {screens && (
        <section className="mb-12">
          <h2 className={h2}>{t({ en: "Screens", fr: "Écrans" })}</h2>
          <Slider
            label={t({ en: "Screenshots", fr: "Captures d'écran" })}
            itemClassName="basis-[60%] sm:basis-[calc((100%-2rem)/3)] lg:basis-[calc((100%-4rem)/5)]"
          >
            {screens.map((sc, idx) => (
              <figure key={sc.src} className="flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => setOpenImage(idx)}
                  aria-label={`${t({ en: "Enlarge", fr: "Agrandir" })} : ${sc.title}`}
                  className="block w-full max-w-[220px] rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <img
                    src={sc.src}
                    alt={sc.title}
                    loading="lazy"
                    className="w-full rounded-[1.75rem] border-[6px] border-neutral-800 shadow-xl transition-transform hover:scale-[1.03] cursor-zoom-in"
                  />
                </button>
                <figcaption className="mt-3">
                  <div className="font-semibold">{sc.title}</div>
                  <div className="text-sm text-neutral-500">{sc.desc}</div>
                </figcaption>
              </figure>
            ))}
          </Slider>
          <ImageLightbox images={screens} index={openImage} onIndexChange={setOpenImage} />
        </section>
      )}

      {/* Features */}
      <section className="mb-12">
        <h2 className={h2}>{t({ en: "Key features", fr: "Fonctionnalités clés" })}</h2>
        <Slider label={t({ en: "Key features", fr: "Fonctionnalités clés" })}>
          {project.features.map((f) => (
            <article key={f.title.en} className={card}>
              <div className="flex items-center gap-3 mb-2">
                <span className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-lg text-emerald-600 dark:text-emerald-400">
                  {f.icon}
                </span>
                <h3 className="font-semibold">{t(f.title)}</h3>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{t(f.desc)}</p>
            </article>
          ))}
        </Slider>
      </section>

      {/* Stack */}
      <section className="mb-12">
        <h2 className={h2}>{t({ en: "Tech stack", fr: "Technologies" })}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(["backend", "frontend"] as const).map((side) => (
            <div key={side} className={card}>
              <h3 className="font-semibold mb-3 capitalize">{side}</h3>
              <ul className="flex flex-wrap gap-2">
                {project.stack[side].map((tech) => (
                  <li key={tech} className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Extra block */}
      {project.extra && (
        <section className="mb-12">
          <h2 className={h2}>{t(project.extra.title)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.extra.items.map((it) => (
              <div key={it.title.en} className={card}>
                <h3 className="font-semibold mb-2">{t(it.title)}</h3>
                <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                  {t(it.points).map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenges paired with solutions */}
      <section className="mb-4">
        <h2 className={h2}>{t({ en: "Challenges and solutions", fr: "Défis et solutions" })}</h2>
        <Slider label={t({ en: "Challenges and solutions", fr: "Défis et solutions" })}>
          {t(project.challenges).map((c, i) => (
            <article key={c} className={card}>
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-400">
                {t({ en: "Challenge", fr: "Défi" })}
              </p>
              <p className="mt-1 text-sm text-neutral-800 dark:text-neutral-200">{c}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                {t({ en: "Solution", fr: "Solution" })}
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t(project.solutions)[i]}</p>
            </article>
          ))}
        </Slider>
      </section>
    </main>
  );
}
