import type { Bi } from "@/i18n/LanguageProvider";

export type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export const levelLabel: Record<ProficiencyLevel, Bi> = {
  Beginner: { en: "Beginner", fr: "Débutant" },
  Intermediate: { en: "Intermediate", fr: "Intermédiaire" },
  Advanced: { en: "Advanced", fr: "Avancé" },
  Expert: { en: "Expert", fr: "Expert" },
};

export interface SkillItem {
  name: string;
  level: ProficiencyLevel;
  /** Where it was used. Falls back to the group context. */
  where?: Bi;
}

export interface SkillGroup {
  id: string;
  title: Bi;
  context: Bi;
  items: SkillItem[];
}

/**
 * Only skills backed by work, school or a project shown on this site.
 * Keep this list in sync with the resume. Levels are self assessed.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: { en: "Programming Languages", fr: "Langages de programmation" },
    context: { en: "Work, internships and projects", fr: "Travail, stages et projets" },
    items: [
      { name: "Python", level: "Advanced", where: { en: "Foldio backend, data scripts", fr: "Backend de Foldio, scripts de données" } },
      { name: "TypeScript", level: "Intermediate", where: { en: "Tarif, Foldio, this portfolio", fr: "Tarif, Foldio, ce portfolio" } },
      { name: "JavaScript", level: "Advanced" },
      { name: "Java", level: "Advanced", where: { en: "GRCB platform (Quarkus), university", fr: "Plateforme GRCB (Quarkus), université" } },
      { name: "C++", level: "Advanced", where: { en: "4 months at Ubisoft", fr: "4 mois chez Ubisoft" } },
      { name: "C#", level: "Advanced", where: { en: "4 months at HumanWare", fr: "4 mois chez HumanWare" } },
      { name: "SQL", level: "Advanced" },
      { name: "Bash", level: "Intermediate" },
    ],
  },
  {
    id: "frontend",
    title: { en: "Frontend & Mobile", fr: "Frontend et mobile" },
    context: { en: "Tarif, Foldio, GRCB platform", fr: "Tarif, Foldio, plateforme GRCB" },
    items: [
      { name: "React", level: "Advanced", where: { en: "Tarif, this portfolio", fr: "Tarif, ce portfolio" } },
      { name: "Next.js", level: "Beginner", where: { en: "Foldio", fr: "Foldio" } },
      { name: "Angular", level: "Intermediate", where: { en: "GRCB platform, Super Infinite Cards", fr: "Plateforme GRCB, Super Infinite Cards" } },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "PWA", level: "Intermediate", where: { en: "Tarif, installable on phones", fr: "Tarif, installable sur téléphone" } },
      { name: "Vite", level: "Intermediate" },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend Development", fr: "Développement backend" },
    context: { en: "Foldio, GRCB platform, Super Infinite Cards", fr: "Foldio, plateforme GRCB, Super Infinite Cards" },
    items: [
      { name: "FastAPI", level: "Intermediate", where: { en: "Foldio", fr: "Foldio" } },
      { name: "Quarkus", level: "Beginner", where: { en: "GRCB platform", fr: "Plateforme GRCB" } },
      { name: "Node.js", level: "Intermediate" },
      { name: ".NET", level: "Intermediate", where: { en: "HumanWare, Super Infinite Cards", fr: "HumanWare, Super Infinite Cards" } },
      { name: "REST APIs", level: "Intermediate" },
      { name: "WebSocket", level: "Intermediate", where: { en: "GRCB live calendar", fr: "Calendrier en direct du GRCB" } },
      { name: "SignalR", level: "Intermediate", where: { en: "Super Infinite Cards multiplayer", fr: "Multijoueur de Super Infinite Cards" } },
    ],
  },
  {
    id: "data",
    title: { en: "Databases & Data", fr: "Bases de données et données" },
    context: { en: "Every project with a database", fr: "Tous les projets avec base de données" },
    items: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate", where: { en: "Tarif", fr: "Tarif" } },
      { name: "SQLAlchemy", level: "Intermediate", where: { en: "Foldio", fr: "Foldio" } },
      { name: "pandas", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Power BI", level: "Beginner", where: { en: "KPI dashboards at work", fr: "Tableaux de bord d'indicateurs au travail" } },
    ],
  },
  {
    id: "ai",
    title: { en: "Applied AI", fr: "IA appliquée" },
    context: { en: "Foldio and personal projects", fr: "Foldio et projets personnels" },
    items: [
      { name: "RAG", level: "Intermediate", where: { en: "Foldio", fr: "Foldio" } },
      { name: "Embeddings", level: "Intermediate" },
      { name: "Vector search", level: "Intermediate", where: { en: "pgvector in Foldio", fr: "pgvector dans Foldio" } },
      { name: "LLM integration", level: "Intermediate", where: { en: "OpenAI and Claude APIs", fr: "API OpenAI et Claude" } },
      { name: "Multi-agent systems", level: "Beginner" },
    ],
  },
  {
    id: "security",
    title: { en: "Cybersecurity & Governance", fr: "Cybersécurité et gouvernance" },
    context: { en: "Work and B.Sc. cybersecurity specialization", fr: "Travail et spécialisation cybersécurité au bac" },
    items: [
      { name: "NIST CSF", level: "Intermediate" },
      { name: "NIST SP 800-53", level: "Intermediate" },
      { name: "ISO 27001/27002", level: "Intermediate" },
      { name: "Risk analysis", level: "Intermediate" },
      { name: "IAM", level: "Intermediate" },
      { name: "SSO / Keycloak", level: "Intermediate", where: { en: "GRCB platform", fr: "Plateforme GRCB" } },
      { name: "RBAC", level: "Intermediate", where: { en: "Foldio, GRCB platform", fr: "Foldio, plateforme GRCB" } },
      { name: "Active Directory", level: "Intermediate" },
    ],
  },
  {
    id: "devops",
    title: { en: "DevOps & Cloud", fr: "DevOps et infonuagique" },
    context: { en: "Deploying my projects", fr: "Déploiement de mes projets" },
    items: [
      { name: "Docker", level: "Intermediate" },
      { name: "Docker Compose", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "CI/CD", level: "Intermediate", where: { en: "Ubisoft, Azure DevOps, Vercel", fr: "Ubisoft, Azure DevOps, Vercel" } },
      { name: "Vercel", level: "Intermediate", where: { en: "Tarif, this portfolio", fr: "Tarif, ce portfolio" } },
      { name: "Caddy", level: "Beginner" },
    ],
  },
  {
    id: "engine",
    title: { en: "Game & Systems", fr: "Jeu et systèmes" },
    context: { en: "Ubisoft, HumanWare, computer graphics courses", fr: "Ubisoft, HumanWare, cours d'infographie" },
    items: [
      { name: "Anvil/Scimitar", level: "Intermediate", where: { en: "4 months at Ubisoft", fr: "4 mois chez Ubisoft" } },
      { name: "OpenGL", level: "Intermediate", where: { en: "University course", fr: "Cours universitaire" } },
      { name: "MVVM", level: "Intermediate", where: { en: "HumanWare", fr: "HumanWare" } },
      { name: "OCR", level: "Beginner", where: { en: "HumanWare", fr: "HumanWare" } },
      { name: "Performance tuning", level: "Intermediate", where: { en: "Ubisoft", fr: "Ubisoft" } },
    ],
  },
];
