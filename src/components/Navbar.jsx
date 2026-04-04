import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-bg-dark/60 backdrop-blur-2xl z-50 border-b border-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-3xl font-black tracking-tighter text-secondary group cursor-pointer">
            <span className="text-primary group-hover:text-secondary mb-3 transition-colors">A</span>shir<span className="text-primary italic">.dev</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="relative text-secondary group text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden py-1">
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <button onClick={toggleMenu} className="md:hidden text-primary hover:text-secondary transition-colors p-2 bg-secondary/5 rounded-xl">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-10 space-y-6 bg-bg-dark/95 backdrop-blur-3xl rounded-[2rem] mt-4 border border-secondary/10 shadow-2xl animate-in slide-in-from-top-10 duration-500">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} onClick={toggleMenu} className="block text-center text-xl font-black text-secondary/60 hover:text-primary transition-all capitalize tracking-widest">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
