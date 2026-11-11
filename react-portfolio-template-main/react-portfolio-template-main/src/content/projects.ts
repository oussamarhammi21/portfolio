import type { Bi } from "@/i18n/LanguageProvider";

export type ProjectStatus = "production" | "deploying" | "development" | "completed" | "live";

export interface ProjectItem {
  id: string;
  title: string;
  description: Bi;
  status: ProjectStatus;
  period: Bi;
  techStack: string[];
  imageUrl?: string;
  /** Internal route ("/projects/…") or external URL. */
  href?: string;
}

export const statusLabel: Record<ProjectStatus, Bi> = {
  production: { en: "In production", fr: "En production" },
  deploying: { en: "Being deployed", fr: "En déploiement" },
  development: { en: "In development", fr: "En développement" },
  completed: { en: "Completed", fr: "Terminé" },
  live: { en: "Live", fr: "En ligne" },
};

export const projects: ProjectItem[] = [
  {
    id: "presto",
    title: "Tarif",
    description: {
      en: "Management PWA for small service teams: public request page, quotes, jobs, inventory and partner accounting. Used daily at Installation Presto, my TV mounting business.",
      fr: "PWA de gestion pour petites équipes de service : page de demande publique, soumissions, jobs, inventaire et comptabilité entre associés. Utilisée chaque jour chez Installation Presto, mon entreprise d'installation de télés.",
    },
    status: "production",
    period: { en: "Personal project · 2026", fr: "Projet personnel · 2026" },
    techStack: ["React 19", "TypeScript", "Vite", "Supabase", "PostgreSQL", "PWA", "Vercel"],
    imageUrl: "/assets/tarif/thumb.jpg",
    href: "/projects/presto",
  },
  {
    id: "grcb",
    title: "GRCB Lab Platform",
    description: {
      en: "Full-stack platform for the Cement and Concrete Research Group at Université de Sherbrooke: equipment booking, inventory and access control. Started as a capstone, now being deployed at the university.",
      fr: "Plateforme full-stack pour le Groupe de recherche sur le ciment et le béton de l'Université de Sherbrooke : réservation d'équipements, inventaire et contrôle d'accès. Projet de fin d'études, en cours de déploiement à l'université.",
    },
    status: "deploying",
    period: { en: "Capstone · 2024 to today", fr: "Projet de fin d'études · 2024 à aujourd'hui" },
    techStack: ["Java 17", "Quarkus", "Angular 17", "PostgreSQL", "Keycloak", "WebSocket", "SSO / RBAC"],
    imageUrl: "/assets/logoProjet1.jpg",
    href: "/projects/1",
  },
  {
    id: "foldio",
    title: "Foldio",
    description: {
      en: "Multi-tenant document platform: ask questions about your files in plain language through a secure RAG pipeline.",
      fr: "Plateforme documentaire multi-organisation : posez des questions sur vos fichiers en langage courant grâce à un pipeline RAG sécurisé.",
    },
    status: "development",
    period: { en: "Personal project · 2025", fr: "Projet personnel · 2025" },
    techStack: ["Next.js", "FastAPI", "Python", "PostgreSQL", "RAG", "Docling", "Cloudflare R2"],
    imageUrl: "/assets/foldio.png",
    href: "/projects/foldio",
  },
  {
    id: "super-cards",
    title: "Super Infinite Cards",
    description: {
      en: "Online card game in the style of Hearthstone with real-time multiplayer, ranking and a spectator mode.",
      fr: "Jeu de cartes en ligne dans le style de Hearthstone, avec multijoueur en temps réel, classement et mode spectateur.",
    },
    status: "completed",
    period: { en: "Cégep capstone · 2023", fr: "Projet de fin d'études au cégep · 2023" },
    techStack: ["Angular", "TypeScript", ".NET 7", "SignalR", "EF Core", "PostgreSQL", "xUnit"],
    href: "/projects/2",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: {
      en: "This site: bilingual, responsive, with a set of free developer tools.",
      fr: "Ce site : bilingue, adaptatif, avec une série d'outils gratuits pour développeurs.",
    },
    status: "live",
    period: { en: "Personal project", fr: "Projet personnel" },
    techStack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    imageUrl: "/assets/portfolio-thumb.png",
    href: "https://github.com/oussamarhammi21/portfolio",
  },
];
