import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CardBody } from "@/components/ui/3d-card";
import { Separator } from "@/components/ui/separator";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { pdfs, getBrowserLang, downloadResume } from "@/hooks/useResumeDownload";

type Lang = "fr" | "en";

export default function Resume() {
  const [lang, setLang] = useState<Lang | null>(null);

  useEffect(() => {
    setLang(getBrowserLang());
  }, []);

  const activeLang = lang ?? "en";

  return (
    <div className="flex justify-center items-center">
      <Card className="flex flex-col items-center sm:my-5 max-w-4xl w-full">
        <CardBody className="w-full p-8 sm:mx-10 z-20">

          <div className="text-center mb-6">
            <h1 className="text-neutral-500 dark:text-neutral-400 font-semibold tracking-[1em] text-lg sm:text-xl">
              RESUME
            </h1>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800">
              {(["fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeLang === l
                      ? "bg-white dark:bg-neutral-800 text-black dark:text-white shadow-sm"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {l === "fr" ? "Français" : "English"}
                </button>
              ))}
            </div>
          </div>

          <Separator className="mb-6" />

          {lang ? (
            <div className="w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md mb-6">
              <iframe src={pdfs[activeLang]} title="Resume PDF" className="w-full h-[75vh]" />
            </div>
          ) : (
            <div className="w-full h-[75vh] rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6">
              <p className="text-neutral-400 text-sm animate-pulse">Loading...</p>
            </div>
          )}

          <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-4">
            {activeLang === "fr" ? "Si le PDF ne s'affiche pas," : "If the PDF doesn't load,"}{" "}
            <a href={pdfs[activeLang]} target="_blank" rel="noopener noreferrer"
              className="underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
              {activeLang === "fr" ? "cliquez ici" : "click here"}
            </a>
          </p>

          <Separator className="mb-6" />

          <div className="flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-2xl text-sm"
              as="button"
              onClick={() => downloadResume(activeLang)}
              className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2"
            >
              <span>{activeLang === "fr" ? "Télécharger le CV" : "Download Resume"}</span>
            </HoverBorderGradient>
          </div>

        </CardBody>
      </Card>
    </div>
  );
}