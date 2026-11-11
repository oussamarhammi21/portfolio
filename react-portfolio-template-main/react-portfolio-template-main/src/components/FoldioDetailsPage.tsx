import { FaBrain, FaCloud, FaFileAlt, FaServer, FaShieldAlt, FaUsers } from "react-icons/fa";
import ProjectDetailLayout, { type ProjectDetail } from "./ProjectDetailLayout";

const foldio: ProjectDetail = {
  title: "Foldio",
  tagline: {
    en: "Ask questions about your documents in plain language",
    fr: "Posez des questions sur vos documents en langage courant",
  },
  description: {
    en: [
      "Foldio is a document platform for organizations that want to query their files in plain language. It uses a RAG architecture: documents are extracted, split and indexed by meaning, and each answer is built from passages of your own documents, with the sources shown.",
      "Each organization has its own isolated space, with roles and access rules, and a self-hosted language model for the free tier.",
    ],
    fr: [
      "Foldio est une plateforme documentaire pour les organisations qui veulent interroger leurs fichiers en langage courant. Elle repose sur une architecture RAG : les documents sont extraits, découpés et indexés selon leur sens, et chaque réponse est construite à partir de passages de vos propres documents, avec les sources affichées.",
      "Chaque organisation a son propre espace isolé, avec des rôles et des règles d'accès, et un modèle de langage hébergé chez nous pour l'offre gratuite.",
    ],
  },
  facts: [
    { label: { en: "Role", fr: "Rôle" }, value: { en: "Full-stack developer", fr: "Développeur full-stack" } },
    { label: { en: "Period", fr: "Période" }, value: { en: "Personal project, 2025", fr: "Projet personnel, 2025" } },
    { label: { en: "Status", fr: "Statut" }, value: { en: "In development", fr: "En développement" } },
  ],
  video: {
    src: "/assets/Foldio.mp4",
    caption: {
      en: "Full demo: document upload, semantic search and chat",
      fr: "Démo complète : téléversement de documents, recherche sémantique et clavardage",
    },
  },
  stack: {
    backend: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Docling", "Cloudflare R2"],
    frontend: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  features: [
    { icon: <FaBrain />, title: { en: "RAG pipeline", fr: "Pipeline RAG" }, desc: { en: "Documents are split into chunks and turned into vectors. The model only receives the relevant passages, never the whole file.", fr: "Les documents sont découpés en morceaux et transformés en vecteurs. Le modèle reçoit seulement les passages utiles, jamais le fichier complet." } },
    { icon: <FaUsers />, title: { en: "Role-based access", fr: "Accès par rôle" }, desc: { en: "Three roles per organization: owner, folder manager and member, each with its own view and permissions.", fr: "Trois rôles par organisation : propriétaire, gestionnaire de dossier et membre, chacun avec sa vue et ses permissions." } },
    { icon: <FaShieldAlt />, title: { en: "Data privacy", fr: "Confidentialité" }, desc: { en: "Search runs on our own infrastructure. The model only gets what it needs to write the answer.", fr: "La recherche roule sur notre propre infrastructure. Le modèle reçoit seulement ce qu'il faut pour rédiger la réponse." } },
    { icon: <FaCloud />, title: { en: "Cloud storage", fr: "Stockage infonuagique" }, desc: { en: "Files are stored on Cloudflare R2 behind signed, time-limited URLs.", fr: "Les fichiers sont stockés sur Cloudflare R2 derrière des liens signés à durée limitée." } },
    { icon: <FaFileAlt />, title: { en: "Automatic extraction", fr: "Extraction automatique" }, desc: { en: "Docling extracts and structures text from PDF, Word and PowerPoint files on upload.", fr: "Docling extrait et structure le texte des fichiers PDF, Word et PowerPoint au téléversement." } },
    { icon: <FaServer />, title: { en: "Self-hosted model", fr: "Modèle auto-hébergé" }, desc: { en: "The free tier uses a model hosted on our infrastructure; paid plans unlock stronger third party models.", fr: "L'offre gratuite utilise un modèle hébergé chez nous; les forfaits payants donnent accès à des modèles externes plus puissants." } },
  ],
  challenges: {
    en: [
      "A multi-tenant architecture with fully isolated organization data",
      "A RAG pipeline that stays accurate without sending whole documents to the model",
      "Many document extractions at once without blocking the server",
      "Fine-grained permissions across folders, roles and confidential documents",
    ],
    fr: [
      "Une architecture multi-organisation avec des données complètement isolées",
      "Un pipeline RAG précis sans envoyer les documents complets au modèle",
      "Plusieurs extractions de documents en même temps sans bloquer le serveur",
      "Des permissions fines selon les dossiers, les rôles et les documents confidentiels",
    ],
  },
  solutions: {
    en: [
      "Organization-scoped queries and row filtering across the whole data layer",
      "Semantic chunks stored in pgvector and retrieved before each model call",
      "asyncio with semaphores, plus a process pool for CPU heavy Docling jobs",
      "A composable filter that covers owner, manager and member rules",
    ],
    fr: [
      "Requêtes limitées à l'organisation et filtrage des lignes dans toute la couche de données",
      "Morceaux sémantiques stockés dans pgvector et récupérés avant chaque appel au modèle",
      "asyncio avec sémaphores, et un pool de processus pour les tâches Docling lourdes",
      "Un filtre composable qui couvre les règles du propriétaire, du gestionnaire et du membre",
    ],
  },
};

export default function FoldioDetailsPage() {
  return <ProjectDetailLayout project={foldio} />;
}
