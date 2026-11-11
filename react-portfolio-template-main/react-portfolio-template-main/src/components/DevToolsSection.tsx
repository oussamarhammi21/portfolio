import { Link } from "react-router-dom";
import { useState } from "react";
import { FiCode, FiSearch } from "react-icons/fi";
import { GiLogicGateXor } from "react-icons/gi";
import { PiHashStraightFill } from "react-icons/pi";
import { LuFileJson } from "react-icons/lu";
import { SiJsonwebtokens } from "react-icons/si";
import { MdQrCode, MdQrCodeScanner } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CometCard } from "./ui/comet-card";
import { Input } from "./ui/input";
import Slider, { SectionHeader } from "./Slider";
import { useI18n, type Bi } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type Category = "programming" | "data" | "encoding" | "security" | "utilities";

const categoryLabel: Record<Category, Bi> = {
  programming: { en: "Programming", fr: "Programmation" },
  data: { en: "Data", fr: "Données" },
  encoding: { en: "Encoding", fr: "Encodage" },
  security: { en: "Security", fr: "Sécurité" },
  utilities: { en: "Utilities", fr: "Utilitaires" },
};

const iconClass = "text-4xl text-emerald-600";

const tools: { name: Bi; description: Bi; link: string; icon: JSX.Element; category: Category; tags: string[]; beta?: boolean }[] = [
  {
    name: { en: "JSON Formatter", fr: "Formateur JSON" },
    description: { en: "Format, validate and explore JSON", fr: "Formater, valider et explorer du JSON" },
    link: "/json-formatter",
    icon: <LuFileJson className={iconClass} />,
    category: "data",
    tags: ["json", "format", "validate"],
  },
  {
    name: { en: "Base64 Encoder / Decoder", fr: "Encodeur / décodeur Base64" },
    description: { en: "Encode and decode Base64 text", fr: "Encoder et décoder du texte en Base64" },
    link: "/base64-tool",
    icon: <FiCode className={iconClass} />,
    category: "encoding",
    tags: ["base64", "encode", "decode"],
  },
  {
    name: { en: "JWT Decoder", fr: "Décodeur JWT" },
    description: { en: "Read the header and claims of a JWT, in your browser", fr: "Lire l'en-tête et les claims d'un JWT, dans ton navigateur" },
    link: "/jwt-decoder",
    icon: <SiJsonwebtokens className={iconClass} />,
    category: "security",
    tags: ["jwt", "token"],
  },
  {
    name: { en: "Hash Generator", fr: "Générateur de hachage" },
    description: { en: "MD5, SHA-1 and SHA-256 hashes", fr: "Empreintes MD5, SHA-1 et SHA-256" },
    link: "/hash-generator",
    icon: <PiHashStraightFill className={iconClass} />,
    category: "security",
    tags: ["hash", "md5", "sha256"],
  },
  {
    name: { en: "Bitwise Visualizer", fr: "Visualiseur bit à bit" },
    description: { en: "See bitwise operations bit by bit", fr: "Voir les opérations bit à bit, bit par bit" },
    link: "/bitwise-visualizer",
    icon: <GiLogicGateXor className={iconClass} />,
    category: "programming",
    tags: ["bitwise", "binary"],
  },
  {
    name: { en: "Algorithm Complexity Analyzer", fr: "Analyseur de complexité" },
    description: { en: "Estimate time and space complexity", fr: "Estimer la complexité en temps et en espace" },
    link: "/algorithm-complexity-analyzer",
    icon: <BiTime className={iconClass} />,
    category: "programming",
    tags: ["algorithm", "complexity", "big-o"],
    beta: true,
  },
  {
    name: { en: "QR Code Generator", fr: "Générateur de code QR" },
    description: { en: "QR codes for text, links and more", fr: "Codes QR pour du texte, des liens et plus" },
    link: "/qr-generator",
    icon: <MdQrCode className={iconClass} />,
    category: "utilities",
    tags: ["qr", "generator"],
  },
  {
    name: { en: "QR Code Scanner", fr: "Lecteur de code QR" },
    description: { en: "Scan with your camera or an image", fr: "Scanner avec la caméra ou une image" },
    link: "/qr-scanner",
    icon: <MdQrCodeScanner className={iconClass} />,
    category: "utilities",
    tags: ["qr", "scanner", "camera"],
  },
];

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  const { t } = useI18n();
  return (
    <Link to={tool.link} className="block h-full text-center" title={`${t(tool.name)} - ${t(tool.description)}`} draggable={false}>
      <CometCard className="h-full">
        <Card className="shadow-sm hover:text-emerald-600 transition-all duration-300 border-neutral-200 dark:border-neutral-800 h-full group relative flex flex-col min-h-[200px]">
          {tool.beta && (
            <Badge className="absolute top-2 right-2 bg-orange-100 text-orange-800 dark:bg-orange-900 hover:bg-orange-200 dark:text-orange-100 text-xs">
              Beta
            </Badge>
          )}
          <CardHeader className="font-semibold flex flex-col items-center justify-center gap-2 p-6 flex-shrink-0">
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{tool.icon}</div>
            <span className="text-center font-semibold leading-tight">{t(tool.name)}</span>
          </CardHeader>
          <CardContent className="px-6 pb-4 flex-grow flex flex-col justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2 flex-grow">{t(tool.description)}</p>
            <div className="flex justify-center mt-auto">
              <Badge variant="secondary" className="text-xs">
                {t(categoryLabel[tool.category])}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </CometCard>
    </Link>
  );
}

/** "slider" on the home page, searchable "grid" on /devtools. */
export default function ToolsForDev({ variant = "grid" }: { variant?: "slider" | "grid" }) {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");

  const header = (
    <SectionHeader
      id="devtools"
      title={t({ en: "Dev tools", fr: "Outils dev" })}
      subtitle={t({
        en: "A collection of essential tools to boost your development workflow. Everything runs in your browser.",
        fr: "Une collection d'outils pratiques pour accélérer ton développement. Tout roule dans ton navigateur.",
      })}
    />
  );

  if (variant === "slider") {
    return (
      <div id="devtools" className="pt-5 mb-6">
        {header}
        <Slider
          label={t({ en: "Dev tools", fr: "Outils pour développeurs" })}
          itemClassName="basis-[70%] sm:basis-[calc((100%-3rem)/3)] lg:basis-[calc((100%-4.5rem)/4)]"
        >
          {tools.map((tool) => (
            <ToolCard key={tool.link} tool={tool} />
          ))}
        </Slider>
      </div>
    );
  }

  const q = query.trim().toLowerCase();
  const filtered = tools.filter((tool) => {
    const matchesQuery =
      !q ||
      [tool.name.en, tool.name.fr, tool.description.en, tool.description.fr, ...tool.tags].some((s) =>
        s.toLowerCase().includes(q)
      );
    return matchesQuery && (category === "all" || tool.category === category);
  });
  const categories = ["all", ...new Set(tools.map((tool) => tool.category))] as (Category | "all")[];

  return (
    <section id="devtools" aria-labelledby="devtools-title" className="py-8 max-w-6xl mx-auto px-4 sm:px-6">
      {header}
      <div className="relative mb-4 max-w-md">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
        <Input
          type="search"
          placeholder={t({ en: "Search: json, encode, qr…", fr: "Rechercher : json, encoder, qr…" })}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
          aria-label={t({ en: "Search tools", fr: "Rechercher un outil" })}
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              category === c
                ? "bg-emerald-600 text-white"
                : "bg-neutral-100 dark:bg-neutral-800 hover:bg-emerald-100 dark:hover:bg-emerald-900"
            )}
          >
            {c === "all" ? t({ en: "All", fr: "Tous" }) : t(categoryLabel[c])}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-neutral-500">{t({ en: "No tool found", fr: "Aucun outil trouvé" })}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-l-2 border-dotted border-emerald-300 pl-6 py-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.link} tool={tool} />
          ))}
        </div>
      )}
    </section>
  );
}
