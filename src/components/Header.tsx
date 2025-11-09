import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBtn } from "./NavBtn";
import { Phone, Menu } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dictionary, language, toggleLanguage } = useLanguage();

  const navItems = [
    { label: dictionary.header.nav.home, href: "/" },
    { label: dictionary.header.nav.about, href: "/about" },
    { label: dictionary.header.nav.gallery, href: "/gallery" },
  ] as const;

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip z-99">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          aria-label={dictionary.header.homeLinkAria}
        >
          <img src="/text-logo.png" alt="FurniLab" className="h-8 lg:h-10" />
        </Link>
        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center space-x-8"
          aria-label={dictionary.header.mainNavAria}
        >
          {navItems.map(({ label, href }) => (
            <NavBtn key={label} to={href}>
              {label}
            </NavBtn>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-sm transition-all duration-150 ease-in uppercase tracking-wider border p-2 px-4 rounded-full hover:-translate-y-1 border-transparent text-zinc-600 hover:border-zinc-400 hover:font-bold hover:text-zinc-900"
            aria-label={dictionary.header.languageToggleAria}
            aria-pressed={language === "bg"}
          >
            {dictionary.header.languageToggleLabel}
          </button>
        </nav>
        {/* Contact Button */}
        <button
          type="button"
          className="hidden lg:flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900"
          aria-label={dictionary.header.contactButtonAria}
          title={dictionary.header.callUs}
        >
          <Phone size={16} />
          <span className="sr-only">{dictionary.header.callUs}</span>
        </button>
        {/* Mobile Menu Icon */}
        <button
          type="button"
          onClick={handleToggleMenu}
          className="lg:hidden rounded-full p-2 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-zinc-900"
          aria-label={dictionary.header.menuToggleAria}
          aria-expanded={isMenuOpen}
        >
          <Menu className="size-8 text-zinc-900" />
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          className="lg:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-lg"
          aria-label={dictionary.header.mobileNavAria}
        >
          <div className="container mx-auto px-4 pb-6 pt-4 flex flex-col space-y-4">
            {navItems.map(({ label, href }) => (
              <NavBtn key={label} to={href}>
                {label}
              </NavBtn>
            ))}
            <Link
              to="tel:+1234567890"
              className="flex items-center justify-center space-x-2 rounded-full border border-zinc-900 bg-zinc-900 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
              aria-label={dictionary.header.callAria}
            >
              <Phone size={16} />
              <span>{dictionary.header.callUs}</span>
            </Link>
            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center rounded-full border border-zinc-900 bg-transparent py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
              aria-label={dictionary.header.languageToggleAria}
              aria-pressed={language === "bg"}
            >
              {dictionary.header.languageToggleLabel}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
