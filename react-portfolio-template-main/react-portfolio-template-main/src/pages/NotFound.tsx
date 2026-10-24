import { Link } from "react-router-dom";

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="text-6xl font-bold text-emerald-500">404</h1>
      <p className="text-neutral-500">Page not found / Page introuvable</p>
      <Link to="/" className="underline underline-offset-4 hover:text-emerald-500">
        ← Back home / Retour à l'accueil
      </Link>
    </div>
  );
}