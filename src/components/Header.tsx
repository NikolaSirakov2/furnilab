import { Link } from "react-router-dom";
import { NavBtn } from "./NavBtn";
import { Phone, Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

const Header = () => {
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
        <div className="lg:hidden">
          <Menu className="size-10 text-zinc-900" />
        </div>
      </div>
    </header>
  );
};

export default Header;
