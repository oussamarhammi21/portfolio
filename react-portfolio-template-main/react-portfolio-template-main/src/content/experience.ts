import type { Bi } from "@/i18n/LanguageProvider";

export interface ExperienceItem {
  title: Bi;
  company: string;
  location: string;
  logoPath?: string;
  /** "MM/YYYY" */
  from: string;
  /** "MM/YYYY" or "present" */
  to: string;
  summary: Bi;
  technologies: string[];
  achievements: Bi<string[]>;
}

export const experience: ExperienceItem[] = [
  {
    title: {
      en: "IT Analyst, Security Governance",
      fr: "Analyste informatique en gouvernance de la sécurité",
    },
    company: "Santé Québec",
    location: "Montréal, QC",
    logoPath: "/assets/sante-quebec.png",
    from: "07/2026",
    to: "present",
    summary: {
      en: "Information security governance for Québec's public health and social services network (30 institutions).",
      fr: "Gouvernance de la sécurité de l'information pour le réseau public de la santé et des services sociaux du Québec (30 établissements).",
    },
    technologies: ["NIST CSF", "NIST SP 800-53", "ISO 27001/27002", "Risk analysis", "SharePoint", "Power BI", "Excel"],
    achievements: {
      en: [
        "Analyze and write governance documents: management framework, policies, directives and procedures",
        "Run risk analyses on IT projects against NIST and ISO 27001/27002 controls",
        "Build internal tools: task automation, read tracking, KPI statistics and a SharePoint hub to publish governance documents",
      ],
      fr: [
        "Analyse et rédige des documents de gouvernance : cadre de gestion, politiques, directives et procédures",
        "Réalise des analyses de risque sur des projets TI selon les contrôles NIST et ISO 27001/27002",
        "Développe des outils internes : automatisation de tâches, suivi de lecture, statistiques d'indicateurs et plateforme SharePoint de diffusion des documents",
      ],
    },
  },
  {
    title: {
      en: "Software Engineer Intern, UI Engine Programmer",
      fr: "Stagiaire en génie logiciel, programmeur moteur UI",
    },
    company: "Ubisoft Montréal",
    location: "Montréal, QC",
    logoPath: "/assets/ubisoft.png",
    from: "05/2025",
    to: "08/2025",
    summary: {
      en: "Production C++ in Anvil/Scimitar, the engine behind Rainbow Six Siege and Skull and Bones.",
      fr: "C++ en production dans Anvil/Scimitar, le moteur de Rainbow Six Siege et Skull and Bones.",
    },
    technologies: ["C++", "Anvil/Scimitar", "Performance", "Regression testing", "CI/CD"],
    achievements: {
      en: [
        "Shipped C++ features in the UI framework of games released in 30+ countries",
        "Built an automated error detection and reporting tool that cut bug triage time for 200+ developers",
        "Wrote performance utilities and ran functional and regression tests on live AAA titles",
      ],
      fr: [
        "Livré des fonctionnalités C++ dans le framework UI de jeux distribués dans plus de 30 pays",
        "Créé un outil automatisé de détection et de rapport d'erreurs qui a réduit le temps de triage pour plus de 200 développeurs",
        "Écrit des utilitaires de performance et fait des tests fonctionnels et de régression sur des titres AAA en production",
      ],
    },
  },
  {
    title: {
      en: "IT Project Coordination & Systems Analysis Intern",
      fr: "Stagiaire en coordination de projets TI et analyse de systèmes",
    },
    company: "CIUSSS de l'Estrie – CHUS",
    location: "Sherbrooke, QC",
    logoPath: "/assets/chus.jpg",
    from: "09/2024",
    to: "12/2024",
    summary: {
      en: "IT project coordination in a 20,000+ employee health organization.",
      fr: "Coordination de projets TI dans un établissement de santé de plus de 20 000 employés.",
    },
    technologies: ["Systems analysis", "Requirements", "Vendor follow-up", "Documentation"],
    achievements: {
      en: [
        "Coordinated IT projects end to end: requirements, vendors, resources, timelines and compliance documents",
        "Wrote technical analyses and requirements documents",
        "Worked with clinical and IT teams on enterprise systems",
      ],
      fr: [
        "Coordonné des projets TI de bout en bout : besoins, fournisseurs, ressources, échéanciers et documents de conformité",
        "Rédigé des analyses techniques et des documents d'exigences",
        "Travaillé avec les équipes cliniques et TI sur des systèmes d'envergure",
      ],
    },
  },
  {
    title: { en: "Software Development Intern", fr: "Stagiaire en développement logiciel" },
    company: "HumanWare",
    location: "Montréal, QC",
    logoPath: "/assets/humanware.png",
    from: "01/2024",
    to: "04/2024",
    summary: {
      en: "Accessibility software for low vision users, in C# within a Scrum team.",
      fr: "Logiciel d'accessibilité pour personnes malvoyantes, en C# dans une équipe Scrum.",
    },
    technologies: ["C#", ".NET", "MVVM", "OCR", "Image processing", "Scrum"],
    achievements: {
      en: [
        "Integrated camera, OCR and real-time image processing on constrained hardware with MVVM",
        "Delivered cross-platform features end to end within sprint commitments",
        "Took part in code reviews",
      ],
      fr: [
        "Intégré caméra, OCR et traitement d'image en temps réel sur du matériel limité, en MVVM",
        "Livré des fonctionnalités multiplateformes de bout en bout dans les délais des sprints",
        "Participé aux revues de code",
      ],
    },
  },
];

function parse(d: string): Date {
  if (d === "present") return new Date();
  const [m, y] = d.split("/").map(Number);
  return new Date(y, m - 1, 1);
}

/** Inclusive number of months between two "MM/YYYY" dates. */
export function monthsBetween(from: string, to: string): number {
  const a = parse(from);
  const b = parse(to);
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1;
}

/** Real total of professional months (internships are not continuous). */
export function totalExperienceMonths(): number {
  return experience.reduce((sum, e) => sum + monthsBetween(e.from, e.to), 0);
}

export function formatDuration(months: number, lang: "en" | "fr"): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (lang === "fr") {
    if (y) parts.push(`${y} an${y > 1 ? "s" : ""}`);
    if (m) parts.push(`${m} mois`);
  } else {
    if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
    if (m) parts.push(`${m} mo`);
  }
  return parts.join(" ");
}

export function formatPeriod(d: string, lang: "en" | "fr"): string {
  if (d === "present") return lang === "fr" ? "aujourd'hui" : "present";
  return parse(d).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", { month: "short", year: "numeric" });
}
