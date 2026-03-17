import { HoverBorderGradient } from "./ui/hover-border-gradient";

type Lang = "fr" | "en";

const pdfs: Record<Lang, string> = {
  fr: "/Rhammi_Oussama2025_FR.pdf",
  en: "/Rhammi_Oussama2025_EN.pdf",
};

const filenames: Record<Lang, string> = {
  fr: "Rhammi_Oussama2025_FR.pdf",
  en: "Rhammi_Oussama2025_EN.pdf",
};

export default function ResumeButton() {
  const handleDownload = async () => {
    const lang: Lang = navigator.language.startsWith("fr") ? "fr" : "en";
    const response = await fetch(pdfs[lang]);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filenames[lang];
    a.click();
    window.URL.revokeObjectURL(blobUrl);
  };

  return (
    <HoverBorderGradient
      containerClassName="rounded-2xl text-sm"
      as="button"
      onClick={handleDownload}
      className="dark:bg-black bg-white text-black dark:text-white flex items-center"
    >
      <span>Download Resume</span>
    </HoverBorderGradient>
  );
}