import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/LanguageProvider";

export default function NotFoundPage(): JSX.Element {
  const { t } = useI18n();
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="text-6xl font-bold text-emerald-500">404</h1>
      <p className="text-neutral-500">{t({ en: "Page not found", fr: "Page introuvable" })}</p>
      <Link to="/" className="underline underline-offset-4 hover:text-emerald-500">
        {t({ en: "Back home", fr: "Retour à l'accueil" })}
      </Link>
    </div>
  );
}
