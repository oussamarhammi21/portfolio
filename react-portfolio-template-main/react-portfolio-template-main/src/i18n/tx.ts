import { frDictionary } from "./fr-dictionary";

/**
 * Dictionary based translation for the dev tool pages.
 * The English text is the key: tx("Copy") returns "Copier" in French, "Copy" in English.
 * Missing keys fall back to English, so a forgotten string never breaks the page.
 */
let current: "en" | "fr" = "en";

export function setTxLang(lang: "en" | "fr") {
  current = lang;
}

export function tx(en: string): string {
  if (current !== "fr") return en;
  return frDictionary[en] ?? en;
}
