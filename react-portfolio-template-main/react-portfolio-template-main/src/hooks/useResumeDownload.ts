type Lang = "fr" | "en";

export const pdfs: Record<Lang, string> = {
  fr: "/Rhammi_Oussama2025_FR.pdf",
  en: "/Rhammi_Oussama2025_EN.pdf",
};

export const filenames: Record<Lang, string> = {
  fr: "Rhammi_Oussama2025_FR.pdf",
  en: "Rhammi_Oussama2025_EN.pdf",
};

export function getBrowserLang(): Lang {
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

export async function downloadResume(lang: Lang): Promise<void> {
  const response = await fetch(pdfs[lang]);
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filenames[lang];
  a.click();
  window.URL.revokeObjectURL(blobUrl);
}