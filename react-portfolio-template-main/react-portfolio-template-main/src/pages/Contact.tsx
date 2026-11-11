import { SiGithub, SiLinkedin } from "react-icons/si";
import { FlipWords } from "@/components/ui/flip-words";
import LinkCard from "@/components/LinkCard";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Card } from "@/components/ui/card";
import { CardBody } from "@/components/ui/3d-card";
import { SectionHeader } from "@/components/Slider";
import { useI18n } from "@/i18n/LanguageProvider";

const EMAIL = "oussamarhammi2020@hotmail.com";

const links = [
  { title: "LinkedIn", url: "https://linkedin.com/in/oussama-rhammi-252177106", icon: <SiLinkedin /> },
  { title: "GitHub", url: "https://github.com/oussamarhammi21", icon: <SiGithub /> },
];

export default function Contact(): JSX.Element {
  const { t, lang } = useI18n();

  const jokes =
    lang === "fr"
      ? [
          "Encore en train d'hésiter? Prends ton temps!",
          "J'attends... mais pas éternellement!",
          "Bon, peut-être éternellement.",
          "Sois pas gêné, je suis super sympathique!",
          "Sauf si tu demandes un café gratuit ☕.",
          "Besoin d'aide? Je suis là!",
          "Tu écris déjà? J'ai hâte!",
          "Psst... je suis encore là",
          "Ton clavier s'ennuie de toi!",
          "Le suspense me tue!",
          "Fun fact : je débogue plus vite que je réponds",
          "Si tu n'écris pas, je vais me mettre à chanter",
          "Promis, mon code est plus propre que mes blagues",
          "À toi de jouer...",
        ]
      : [
          "Still thinking? Take your time!",
          "I'll wait... but not forever!",
          "Okay, maybe forever.",
          "Don't be shy, I'm super friendly!",
          "Unless you ask for free coffee ☕.",
          "Need help? I've got you!",
          "Typing already? I'm excited!",
          "Pssst... I'm still here",
          "Your keyboard misses you!",
          "The suspense is killing me!",
          "Fun fact: I debug faster than I reply",
          "If you don't email, I'll start singing",
          "I promise my code is cleaner than my jokes",
          "Your move...",
        ];

  return (
    <div id="contact" className="pt-5">
      <SectionHeader id="contact" title={t({ en: "Contact", fr: "Contact" })} />
      <BackgroundBeamsWithCollision className="w-full h-auto z-10 rounded-2xl">
        <Card className="border-none bg-transparent py-14 sm:py-20 w-full">
          <CardBody className="w-full h-auto z-20 px-4">
            <p className="leading-9 text-center">
              {t({ en: "Feel free to get in touch at: ", fr: "N'hésite pas à m'écrire : " })}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium underline underline-offset-4 transition-colors hover:text-emerald-500 break-all"
              >
                {EMAIL}
              </a>
              <br />
              <FlipWords key={lang} words={jokes} duration={2000} />
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-10">
              {links.map((l) => (
                <LinkCard key={l.title} title={l.title} url={l.url} icon={l.icon} />
              ))}
            </div>
            <div className="text-center text-xs text-muted-foreground pt-4">
              {t({ en: "Built (because why reinvent the wheel?) with ", fr: "Fait (pourquoi réinventer la roue?) avec " })}
              <a href="https://ui.shadcn.com/" className="font-medium underline underline-offset-4 transition-colors hover:text-emerald-500" target="_blank" rel="noopener noreferrer">
                shadcn/ui
              </a>
              ,{" "}
              <a href="https://magicui.design/" className="font-medium underline underline-offset-4 transition-colors hover:text-emerald-500" target="_blank" rel="noopener noreferrer">
                magicui
              </a>{" "}
              {t({ en: "and", fr: "et" })}{" "}
              <a href="https://ui.aceternity.com/" className="font-medium underline underline-offset-4 transition-colors hover:text-emerald-500" target="_blank" rel="noopener noreferrer">
                aceternity
              </a>
              . © {new Date().getFullYear()} Oussama Rhammi
            </div>
          </CardBody>
        </Card>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
