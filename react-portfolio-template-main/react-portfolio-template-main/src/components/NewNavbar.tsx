import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import LanguageToggle from "./LanguageToggle";
import CursorGlow from "./CursorGlow";
import { useI18n } from "@/i18n/LanguageProvider";

interface NavItem {
  name: string;
  link: string;
  dropdown?: { name: string; link: string }[];
}

export function NewNavbar() {
  const { t, lang } = useI18n();
  const location = useLocation();

  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: t({ en: "About", fr: "À propos" }), link: "/#about" },
    { name: t({ en: "Experience", fr: "Expérience" }), link: "/#experience" },
    { name: t({ en: "Projects", fr: "Projets" }), link: "/#projects" },
    { name: t({ en: "Skills", fr: "Compétences" }), link: "/#skills" },
    { name: t({ en: "Contact", fr: "Contact" }), link: "/#contact" },
    {
      name: t({ en: "More", fr: "Plus" }),
      link: "#",
      dropdown: [
        { name: t({ en: "Resume", fr: "CV" }), link: "/resume" },
        { name: t({ en: "Dev tools", fr: "Outils dev" }), link: "/devtools" },
        { name: "Stats", link: "/stats" },
        { name: t({ en: "Java Q&A", fr: "Questions Java" }), link: "/java-interview-question-answers" },
      ],
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative w-full">
      <CursorGlow />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-emerald-600 focus:px-3 focus:py-2 focus:text-white"
      >
        {t({ en: "Skip to content", fr: "Aller au contenu" })}
      </a>
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="relative z-[70] flex items-center gap-3">
            <LanguageToggle />
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileDropdown(null);
            }}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="w-full">
                {item.dropdown ? (
                  <div className="mb-2">
                    <button
                      type="button"
                      aria-expanded={openMobileDropdown === idx}
                      className="w-full text-neutral-600 dark:text-neutral-300 font-medium mb-1 flex items-center justify-between py-2"
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === idx ? null : idx)}
                    >
                      <span>{item.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${openMobileDropdown === idx ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openMobileDropdown === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 border-l border-emerald-300 dark:border-emerald-700 space-y-2 mt-1 overflow-hidden"
                        >
                          {item.dropdown.map((d) => (
                            <a
                              key={d.link}
                              href={d.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-neutral-600 dark:text-neutral-300 text-sm hover:text-emerald-500 py-1"
                            >
                              {d.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-neutral-600 dark:text-neutral-300 block mb-1 py-2"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div id="main" className="min-h-screen pt-20">
        {/* Tool pages use tx(), which does not subscribe to the language: remount them when it changes */}
        <Fragment key={location.pathname === "/" ? "home" : lang}>
          <Outlet />
        </Fragment>
      </div>
    </div>
  );
}
