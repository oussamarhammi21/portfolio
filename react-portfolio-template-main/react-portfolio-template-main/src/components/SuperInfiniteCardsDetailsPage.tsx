import { FaChartLine, FaComments, FaEye, FaGamepad, FaServer } from "react-icons/fa";
import ProjectDetailLayout, { type ProjectDetail } from "./ProjectDetailLayout";

const superCards: ProjectDetail = {
  title: "Super Infinite Cards",
  tagline: {
    en: "Real-time multiplayer card game with ranking",
    fr: "Jeu de cartes multijoueur en temps réel avec classement",
  },
  description: {
    en: [
      "A card game in the style of Hearthstone, built as our cégep capstone over 3 sprints by a team of 4. Players battle in real time, collect cards, build decks and climb an ELO ranking.",
      "We worked in Agile with test-driven development, continuous integration on Azure DevOps and mandatory code reviews.",
    ],
    fr: [
      "Un jeu de cartes dans le style de Hearthstone, réalisé comme projet de fin d'études au cégep en 3 sprints, par une équipe de 4. Les joueurs s'affrontent en temps réel, collectionnent des cartes, montent des decks et grimpent dans un classement ELO.",
      "Nous avons travaillé en Agile avec le développement piloté par les tests, l'intégration continue sur Azure DevOps et des revues de code obligatoires.",
    ],
  },
  facts: [
    { label: { en: "Role", fr: "Rôle" }, value: { en: "Full-stack developer", fr: "Développeur full-stack" } },
    { label: { en: "Team", fr: "Équipe" }, value: { en: "4 people", fr: "4 personnes" } },
    { label: { en: "Period", fr: "Période" }, value: { en: "Cégep capstone, 2023", fr: "Projet de fin d'études au cégep, 2023" } },
  ],
  stack: {
    backend: [".NET 7", "ASP.NET Web API", "Entity Framework Core", "SignalR", "JWT", "xUnit", "PostgreSQL"],
    frontend: ["Angular 15", "TypeScript", "RxJS", "Angular Material", "SignalR client", "Reactive Forms"],
  },
  features: [
    { icon: <FaGamepad />, title: { en: "Multiplayer", fr: "Multijoueur" }, desc: { en: "Live matches synced with SignalR, with powers such as First Strike, Thorns, Heal, Poison and Stun.", fr: "Parties en direct synchronisées avec SignalR, avec des pouvoirs comme First Strike, Thorns, Heal, Poison et Stun." } },
    { icon: <FaChartLine />, title: { en: "Ranking", fr: "Classement" }, desc: { en: "ELO based matchmaking and leaderboard.", fr: "Jumelage et tableau de classement basés sur l'ELO." } },
    { icon: <FaEye />, title: { en: "Spectator mode", fr: "Mode spectateur" }, desc: { en: "Watch live games with a built-in chat.", fr: "Regarder des parties en direct avec un clavardage intégré." } },
    { icon: <FaComments />, title: { en: "Collection and decks", fr: "Collection et decks" }, desc: { en: "Cards by rarity (common to legendary) and a deck builder.", fr: "Cartes par rareté (commune à légendaire) et création de decks." } },
    { icon: <FaServer />, title: { en: "Administration", fr: "Administration" }, desc: { en: "Admin panel to manage cards, users and game content.", fr: "Panneau d'administration pour gérer les cartes, les utilisateurs et le contenu du jeu." } },
  ],
  extra: {
    title: { en: "How we worked", fr: "Notre façon de travailler" },
    items: [
      { title: { en: "Agile and sprints", fr: "Agile et sprints" }, points: { en: ["Sprint planning", "Retrospectives", "Azure DevOps Boards"], fr: ["Planification de sprint", "Rétrospectives", "Azure DevOps Boards"] } },
      { title: { en: "Test-driven development", fr: "Développement piloté par les tests" }, points: { en: ["Unit tests with xUnit", "Integration tests", "Coverage requirements"], fr: ["Tests unitaires avec xUnit", "Tests d'intégration", "Exigences de couverture"] } },
      { title: { en: "DevOps", fr: "DevOps" }, points: { en: ["Continuous integration", "Mandatory code reviews", "Branch protection"], fr: ["Intégration continue", "Revues de code obligatoires", "Protection des branches"] } },
    ],
  },
  challenges: {
    en: [
      "Syncing player actions in real time",
      "Managing complex game states (powers, status effects)",
      "Testing complex game logic",
      "Shipping often without breaking the game",
    ],
    fr: [
      "Synchroniser les actions des joueurs en temps réel",
      "Gérer des états de jeu complexes (pouvoirs, effets)",
      "Tester une logique de jeu complexe",
      "Livrer souvent sans briser le jeu",
    ],
  },
  solutions: {
    en: [
      "SignalR hubs for real-time communication",
      "A state machine for the game logic, inside a clean architecture",
      "Tests written first, with xUnit",
      "A CI pipeline on Azure DevOps that runs the tests on every change",
    ],
    fr: [
      "Des hubs SignalR pour la communication en temps réel",
      "Une machine à états pour la logique du jeu, dans une architecture propre",
      "Des tests écrits d'abord, avec xUnit",
      "Un pipeline d'intégration continue sur Azure DevOps qui roule les tests à chaque changement",
    ],
  },
};

export default function SuperInfiniteCardsDetailsPage() {
  return <ProjectDetailLayout project={superCards} />;
}
