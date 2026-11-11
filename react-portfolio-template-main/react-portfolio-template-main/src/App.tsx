import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import router from "./config/routes";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./components/ui/toaster";
import { LanguageProvider } from "./i18n/LanguageProvider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </LanguageProvider>
      <Analytics />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
