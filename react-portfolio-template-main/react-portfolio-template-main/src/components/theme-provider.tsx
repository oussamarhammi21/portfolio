import { createContext, useContext, useEffect } from "react";

/** The site is dark only. The provider keeps the same API so existing components keep working. */
type Theme = "dark";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState>({ theme: "dark", setTheme: () => null });

export function ThemeProvider({ children }: { children: React.ReactNode; defaultTheme?: string; storageKey?: string }) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    root.style.colorScheme = "dark";
    try {
      // Forget the old light / dark choice from the removed toggle
      localStorage.removeItem("vite-ui-theme");
    } catch {
      /* storage unavailable */
    }
  }, []);

  return (
    <ThemeProviderContext.Provider value={{ theme: "dark", setTheme: () => null }}>{children}</ThemeProviderContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeProviderContext);
