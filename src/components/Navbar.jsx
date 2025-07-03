import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-yellow-400">Ashir.dev</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-yellow-400 transition-colors capitalize">
                {item}
              </a>
            ))}
          </div>
          <button onClick={toggleMenu} className="md:hidden text-yellow-400 hover:text-yellow-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="block hover:text-yellow-400 transition-colors capitalize">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
