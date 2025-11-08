import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBtn } from "./NavBtn";
import { Phone, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link to="/" className="flex items-center" aria-label="FurniLab home">
          <img src="/text-logo.png" alt="FurniLab" className="h-8 lg:h-10" />
        </Link>
        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center space-x-8"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <NavBtn key={label} to={href}>
              {label}
            </NavBtn>
          ))}
        </nav>
        {/* Contact Button */}
        <button className="hidden lg:flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900">
          <Phone size={16} />
        </button>
        {/* Mobile Menu Icon */}
        <button
          type="button"
          onClick={handleToggleMenu}
          className="lg:hidden rounded-full p-2 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-zinc-900"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="size-8 text-zinc-900" />
        </button>
      </div>
      {isMenuOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-lg"
        >
          <div className="container mx-auto px-4 pb-6 pt-4 flex flex-col space-y-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <NavBtn key={label} to={href}>
                {label}
              </NavBtn>
            ))}
            <Link
              to="tel:+1234567890"
              className="flex items-center justify-center space-x-2 rounded-full border border-zinc-900 bg-zinc-900 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-zinc-900"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Call FurniLab"
            >
              <Phone size={16} />
              <span>Call Us</span>
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
