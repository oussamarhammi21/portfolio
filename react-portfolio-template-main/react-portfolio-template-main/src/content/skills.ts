import type { Bi } from "@/i18n/LanguageProvider";

export interface SkillGroup {
  id: string;
  title: Bi;
  /** Where these skills were used. */
  context: Bi;
  items: string[];
}

/**
 * Only skills backed by work, school or a project shown on this site.
 * Keep this list in sync with the resume.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: { en: "Languages", fr: "Langages" },
    context: { en: "Work, internships and projects", fr: "Travail, stages et projets" },
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "SQL", "Bash"],
  },
  {
    id: "frontend",
    title: { en: "Frontend & mobile", fr: "Frontend et mobile" },
    context: { en: "Foldio, Tarif, GRCB platform", fr: "Foldio, Tarif, plateforme GRCB" },
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "PWA", "Vite"],
  },
  {
    id: "backend",
    title: { en: "Backend & APIs", fr: "Backend et API" },
    context: { en: "Foldio, GRCB platform, Super Infinite Cards", fr: "Foldio, plateforme GRCB, Super Infinite Cards" },
    items: ["FastAPI", "Quarkus", "Node.js", ".NET / ASP.NET", "REST APIs", "WebSocket", "SignalR"],
  },
  {
    id: "data",
    title: { en: "Data", fr: "Données" },
    context: { en: "Every project with a database", fr: "Tous les projets avec base de données" },
    items: ["PostgreSQL", "MySQL", "Supabase", "SQLAlchemy", "pandas", "NumPy", "Power BI"],
  },
  {
    id: "ai",
    title: { en: "Applied AI", fr: "IA appliquée" },
    context: { en: "Foldio and personal projects", fr: "Foldio et projets personnels" },
    items: ["RAG", "Embeddings", "Vector search", "LLM integration (OpenAI, Claude API)", "Multi-agent systems"],
  },
  {
    id: "security",
    title: { en: "Security & governance", fr: "Sécurité et gouvernance" },
    context: { en: "Santé Québec, B.Sc. cybersecurity specialization", fr: "Santé Québec, spécialisation cybersécurité au B.Sc." },
    items: ["NIST CSF", "NIST SP 800-53", "ISO 27001/27002", "Risk analysis", "IAM", "SSO / Keycloak", "RBAC", "Active Directory"],
  },
  {
    id: "devops",
    title: { en: "Infra & DevOps", fr: "Infra et DevOps" },
    context: { en: "Deployments of my projects", fr: "Déploiement de mes projets" },
    items: ["Docker", "Docker Compose", "Linux", "Git", "CI/CD", "Vercel", "Caddy"],
  },
  {
    id: "engine",
    title: { en: "Game & systems", fr: "Jeu et systèmes" },
    context: { en: "Ubisoft, HumanWare, computer graphics courses", fr: "Ubisoft, HumanWare, cours d'infographie" },
    items: ["C++", "Anvil/Scimitar", "OpenGL", "MVVM", "OCR", "Performance tuning"],
  },
];
