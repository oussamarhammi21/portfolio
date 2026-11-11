import { FaBoxes, FaCalculator, FaClipboardList, FaGlobe, FaHandshake, FaSlidersH } from "react-icons/fa";
import ProjectDetailLayout, { type ProjectDetail } from "./ProjectDetailLayout";

const presto: ProjectDetail = {
  title: "Tarif",
  tagline: {
    en: "Management PWA for small service teams, in production at Installation Presto",
    fr: "PWA de gestion pour petites équipes de service, en production chez Installation Presto",
  },
  description: {
    en: [
      "A management app for small service businesses run by a few partners. Everything is set from a settings page: company name, partners and their start dates, margin split, default prices, inventory, extras, travel zones and the quote messages in French and English.",
      "It covers the whole cycle: a public request page for clients, an inbox, a quote builder, job tracking and partner accounting. Its first deployment is Installation Presto, the TV mounting business I co-founded, where it has been used for every job since launch.",
    ],
    fr: [
      "Une application de gestion pour petites entreprises de service menées par quelques associés. Tout se règle dans une page de paramètres : nom de l'entreprise, associés et leur date d'arrivée, partage de la marge, prix par défaut, inventaire, extras, zones de déplacement et messages de soumission en français et en anglais.",
      "Elle couvre tout le cycle : page de demande publique pour les clients, boîte de réception, création de soumissions, suivi des jobs et comptabilité entre associés. Son premier déploiement est Installation Presto, l'entreprise d'installation de télés que j'ai cofondée, où elle sert à chaque job depuis le lancement.",
    ],
  },
  facts: [
    { label: { en: "Role", fr: "Rôle" }, value: { en: "Co-founder and full-stack developer", fr: "Cofondateur et développeur full-stack" } },
    { label: { en: "Period", fr: "Période" }, value: { en: "2026 to today", fr: "2026 à aujourd'hui" } },
    { label: { en: "Status", fr: "Statut" }, value: { en: "In production", fr: "En production" } },
  ],
  link: { href: "https://www.installationpresto.ca/", label: { en: "Installation Presto website", fr: "Site d'Installation Presto" } },
  video: {
    src: "/assets/tarif/demo.mp4",
    poster: "/assets/tarif/poster.jpg",
    caption: {
      en: "A 45 second tour: requests, quotes, jobs, money, settings and the public request page. Demo data: names and amounts are fictional.",
      fr: "Une visite de 45 secondes : demandes, soumissions, jobs, argent, paramètres et page de demande publique. Données de démo : les noms et montants sont fictifs.",
    },
  },
  screens: [
    { src: "/assets/tarif/requests.jpg", title: { en: "Requests", fr: "Demandes" }, desc: { en: "Every detail of a request, one tap to price it", fr: "Tous les détails d'une demande, un geste pour la chiffrer" } },
    { src: "/assets/tarif/quote.jpg", title: { en: "Quote", fr: "Soumission" }, desc: { en: "Live margin and a ready message in the client's language", fr: "Marge en direct et message prêt dans la langue du client" } },
    { src: "/assets/tarif/jobs.jpg", title: { en: "Jobs", fr: "Jobs" }, desc: { en: "Who was on site, who got paid, each partner's share", fr: "Qui était sur place, qui a encaissé, la part de chacun" } },
    { src: "/assets/tarif/money.jpg", title: { en: "Money", fr: "Argent" }, desc: { en: "Cash in and out, and who owes whom", fr: "Entrées, sorties et qui doit quoi à qui" } },
    { src: "/assets/tarif/partners.jpg", title: { en: "Partner balances", fr: "Soldes des associés" }, desc: { en: "What each partner earned, paid and is owed", fr: "Ce que chaque associé a gagné, payé et doit recevoir" } },
    { src: "/assets/tarif/settings.jpg", title: { en: "Settings", fr: "Paramètres" }, desc: { en: "Partners, work share and default prices", fr: "Associés, part du travail et prix par défaut" } },
    { src: "/assets/tarif/inventory.jpg", title: { en: "Inventory", fr: "Inventaire" }, desc: { en: "Stock, purchases and alert thresholds", fr: "Stock, achats et seuils d'alerte" } },
    { src: "/assets/tarif/public.jpg", title: { en: "Public request page", fr: "Page de demande publique" }, desc: { en: "The one minute form clients fill in", fr: "Le formulaire d'une minute rempli par les clients" } },
    { src: "/assets/tarif/sent.jpg", title: { en: "Request sent", fr: "Demande envoyée" }, desc: { en: "The price comes back by text", fr: "Le prix revient par texto" } },
  ],
  stack: {
    backend: ["Supabase (PostgreSQL)", "Supabase Auth", "Supabase Storage", "Vercel"],
    frontend: ["React 19", "TypeScript", "Vite", "PWA (vite-plugin-pwa)", "i18n FR / EN"],
  },
  features: [
    { icon: <FaSlidersH />, title: { en: "Fully configurable", fr: "Entièrement configurable" }, desc: { en: "Company, partners, margin split, prices, inventory, extras, travel zones and message templates are set in the app, with export and import.", fr: "Entreprise, associés, partage de marge, prix, inventaire, extras, zones et modèles de messages se règlent dans l'app, avec export et import." } },
    { icon: <FaGlobe />, title: { en: "Public request page", fr: "Page de demande publique" }, desc: { en: "Bilingual form where clients describe the job, pick options and a time slot and add a photo. Requests land in an inbox with a badge.", fr: "Formulaire bilingue où le client décrit le job, choisit ses options et une plage horaire et ajoute une photo. La demande arrive dans une boîte avec un badge." } },
    { icon: <FaCalculator />, title: { en: "Quote builder", fr: "Création de soumissions" }, desc: { en: "Price lines, extras, travel and free lines with live margin. The client message comes from templates in the client's language.", fr: "Lignes de prix, extras, déplacement et lignes libres avec marge en direct. Le message au client vient de modèles dans sa langue." } },
    { icon: <FaClipboardList />, title: { en: "Jobs and payouts", fr: "Jobs et paiements" }, desc: { en: "Each job records who was on site and who collected the money; each partner's share is computed automatically.", fr: "Chaque job note qui était sur place et qui a encaissé; la part de chaque associé est calculée automatiquement." } },
    { icon: <FaHandshake />, title: { en: "Partner accounting", fr: "Comptabilité entre associés" }, desc: { en: "Cash in and out, expenses by category, transfers between partners and a running balance of who owes whom.", fr: "Entrées et sorties, dépenses par catégorie, transferts entre associés et solde courant de qui doit quoi." } },
    { icon: <FaBoxes />, title: { en: "Inventory and assets", fr: "Inventaire et actifs" }, desc: { en: "Stock with purchase history, cost from purchases and low stock alerts. Tools and unsold stock are tracked as shared assets.", fr: "Stock avec historique d'achats, coût calculé à partir des achats et alertes de stock bas. Outils et stock invendu suivis comme actifs communs." } },
  ],
  challenges: {
    en: [
      "Making one app fit any small service business without code changes",
      "Several partners editing the same data from their phones at the same time",
      "Staying usable on a job site with a weak or no connection",
      "Splitting profits fairly when partners join later and tools are bought by different people",
    ],
    fr: [
      "Adapter une seule app à n'importe quelle petite entreprise de service sans toucher au code",
      "Plusieurs associés qui modifient les mêmes données depuis leur téléphone en même temps",
      "Rester utilisable sur un chantier avec peu ou pas de réseau",
      "Partager les profits équitablement quand des associés arrivent plus tard et que les outils sont achetés par différentes personnes",
    ],
  },
  solutions: {
    en: [
      "Everything business specific lives in a versioned, exportable configuration edited from the settings page",
      "Optimistic concurrency: each save checks a version number and reloads instead of overwriting a partner's work",
      "Local cache shown instantly at startup, with debounced background sync to Supabase",
      "A framework free calculation module: work share per job, shared pot, start dates, tools kept out of job costs",
    ],
    fr: [
      "Tout ce qui est propre à l'entreprise vit dans une configuration versionnée et exportable, modifiée depuis les paramètres",
      "Concurrence optimiste : chaque sauvegarde vérifie un numéro de version et recharge au lieu d'écraser le travail d'un associé",
      "Cache local affiché dès l'ouverture, avec synchronisation en arrière-plan vers Supabase",
      "Un module de calcul indépendant du framework : part du travail par job, pot commun, dates d'arrivée, outils exclus du coût des jobs",
    ],
  },
};

export default function PrestoDetailsPage() {
  return <ProjectDetailLayout project={presto} />;
}
