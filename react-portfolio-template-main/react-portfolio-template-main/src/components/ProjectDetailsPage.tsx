import { FaBoxOpen, FaCalendarAlt, FaTools, FaUserShield } from "react-icons/fa";
import ProjectDetailLayout, { type ProjectDetail } from "./ProjectDetailLayout";

/** GRCB lab management platform (Université de Sherbrooke). */
const grcb: ProjectDetail = {
  title: "GRCB Lab Platform",
  tagline: {
    en: "Lab management platform for a university research group",
    fr: "Plateforme de gestion de laboratoire pour un groupe de recherche universitaire",
  },
  description: {
    en: [
      "A lab management system for the Cement and Concrete Research Group (GRCB) at Université de Sherbrooke. It handles equipment booking, material inventory and user access for the research teams.",
      "It was designed to replace manual processes. It started as our capstone project and is now being deployed at the university.",
    ],
    fr: [
      "Un système de gestion de laboratoire pour le Groupe de recherche sur le ciment et le béton (GRCB) de l'Université de Sherbrooke. Il gère la réservation d'équipements, l'inventaire des matériaux et l'accès des utilisateurs pour les équipes de recherche.",
      "Il a été conçu pour remplacer des processus manuels. C'est notre projet de fin d'études, maintenant en cours de déploiement à l'université.",
    ],
  },
  facts: [
    { label: { en: "Role", fr: "Rôle" }, value: { en: "Full-stack developer", fr: "Développeur full-stack" } },
    { label: { en: "Period", fr: "Période" }, value: { en: "2024 to today", fr: "2024 à aujourd'hui" } },
    { label: { en: "Status", fr: "Statut" }, value: { en: "Being deployed", fr: "En déploiement" } },
  ],
  video: {
    src: "/assets/Projetvideo.mp4",
    caption: { en: "Overview of the platform", fr: "Vue d'ensemble de la plateforme" },
  },
  clips: [
    { src: "/assets/login.mp4", poster: "/assets/lab-system/login-poster.jpg", title: { en: "Sign-in", fr: "Connexion" }, desc: { en: "University account sign-in through Keycloak", fr: "Connexion avec le compte universitaire par Keycloak" } },
    { src: "/assets/calendar.mp4", poster: "/assets/lab-system/calendar-poster.jpg", title: { en: "Calendar and booking", fr: "Calendrier et réservations" }, desc: { en: "Booking calendar updated in real time", fr: "Calendrier de réservation mis à jour en temps réel" } },
    { src: "/assets/equipment.mp4", poster: "/assets/lab-system/equipment-poster.jpg", title: { en: "Equipment", fr: "Équipements" }, desc: { en: "Equipment catalog and availability", fr: "Catalogue d'équipements et disponibilité" } },
  ],
  stack: {
    backend: ["Java 17", "Quarkus", "PostgreSQL", "Keycloak", "REST API", "WebSocket", "JWT", "Maven"],
    frontend: ["Angular 17", "TypeScript", "RxJS", "Angular Material", "SCSS"],
  },
  features: [
    { icon: <FaUserShield />, title: { en: "Authentication", fr: "Authentification" }, desc: { en: "Sign-in restricted to university accounts, with roles and permissions.", fr: "Connexion réservée aux comptes de l'université, avec rôles et permissions." } },
    { icon: <FaCalendarAlt />, title: { en: "Scheduling", fr: "Planification" }, desc: { en: "Interactive booking calendar with an approval workflow.", fr: "Calendrier de réservation interactif avec circuit d'approbation." } },
    { icon: <FaTools />, title: { en: "Equipment", fr: "Équipements" }, desc: { en: "Catalog, status and availability of each piece of equipment.", fr: "Catalogue, état et disponibilité de chaque équipement." } },
    { icon: <FaBoxOpen />, title: { en: "Inventory", fr: "Inventaire" }, desc: { en: "Material stock and consumption tracking.", fr: "Suivi du stock de matériaux et de leur consommation." } },
  ],
  challenges: {
    en: [
      "Complex relations between equipment, materials and bookings",
      "Keeping the calendar in sync for many users at once",
      "Secure sign-in limited to the university domain",
      "Different permissions for each type of user",
      "Usable on every screen size",
    ],
    fr: [
      "Relations complexes entre équipements, matériaux et réservations",
      "Garder le calendrier synchronisé pour plusieurs utilisateurs à la fois",
      "Connexion sécurisée limitée au domaine de l'université",
      "Des permissions différentes selon le type d'utilisateur",
      "Utilisable sur toutes les tailles d'écran",
    ],
  },
  solutions: {
    en: [
      "A normalized PostgreSQL schema with clear foreign keys",
      "WebSocket for real-time calendar updates",
      "Keycloak with a custom sign-in flow (SSO)",
      "Role-based access control checked on the server",
      "Angular Material with responsive breakpoints",
    ],
    fr: [
      "Un schéma PostgreSQL normalisé avec des clés étrangères claires",
      "WebSocket pour mettre à jour le calendrier en temps réel",
      "Keycloak avec un parcours de connexion personnalisé (SSO)",
      "Contrôle d'accès par rôle vérifié côté serveur",
      "Angular Material avec des points de rupture adaptatifs",
    ],
  },
};

export default function ProjectDetailsPage() {
  return <ProjectDetailLayout project={grcb} />;
}
