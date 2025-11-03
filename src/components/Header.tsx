import NavBtn from "./NavBtn";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className=""></div>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavBtn>Home</NavBtn>
          <NavBtn>About</NavBtn>
          <NavBtn>Works</NavBtn>
          <NavBtn>Gallery</NavBtn>
          <NavBtn>Service</NavBtn>
        </nav>
        {/* Contact Button */}
        <button className="flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900">
          <Phone size={16} />
        </button>
        {/* Mobile Menu Icon */}
        <div className=""></div>
      </div>
    </header>
  );
};

export default Header;
