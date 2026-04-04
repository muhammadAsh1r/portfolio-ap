import React from "react";

const Footer = () => (
  <footer className="relative py-12 overflow-hidden border-t border-secondary/5">
    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
      <div className="mb-8">
         <span className="text-2xl font-black tracking-tighter text-secondary">Ashir<span className="text-primary italic">.dev</span></span>
      </div>
      <p className="text-secondary/40 text-xs font-bold uppercase tracking-[0.4em]">
        © {new Date().getFullYear()} All rights reserved. <br className="md:hidden" /> Crafted with <span className="text-primary">Passion</span> using React & Tailwind.
      </p>
    </div>
  </footer>
);

export default React.memo(Footer);
