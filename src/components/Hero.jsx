import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 min-h-screen flex items-center overflow-hidden">
      {/* Background Layered Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none z-0">
         <span className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap">
            FULLSTACK DEVELOPER
         </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-10">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] animate-pulse">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>Available for Hire</span>
            </div>
            
            <div className="space-y-4">
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter text-secondary">
                 Building <span className="text-primary italic">Full Stack</span> <br />
                 Web Applications.
               </h1>
            </div>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-secondary/60 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              I’m <span className="text-primary font-bold">Ashir</span>, a Full Stack Developer specialized in 
              <span className="text-secondary font-medium italic underline decoration-primary/40 underline-offset-8"> MERN and Django </span> 
              dedicated to building secure, scalable, and user-centric web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group relative bg-primary text-bg-dark px-12 py-5 rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,197,112,0.3)]"
              >
                <span className="relative z-10 transition-all uppercase tracking-widest">View My Projects</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
              </a>
              <a
                href="#contact"
                className="px-12 py-5 rounded-full font-black text-lg border-2 border-secondary/10 text-secondary hover:bg-secondary/5 hover:border-primary transition-all uppercase tracking-widest"
              >
                Let's Talk
              </a>
            </div>

            <div className="pt-12 flex items-center justify-center lg:justify-start space-x-10 opacity-30">
               <div className="h-px w-20 bg-secondary" />
               <ChevronDown size={28} className="text-secondary animate-bounce" />
               <div className="h-px w-20 bg-secondary" />
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Complex decorative elements */}
              <div className="absolute -inset-10 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-20 border border-accent/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-bg-dark/40 shadow-[0_0_100px_rgba(26,50,99,0.5)] transition-all duration-700 hover:rounded-3xl hover:scale-[1.02]">
                <img
                  src="my_pic.webp"
                  alt="Ashir"
                  loading="eager"
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
              </div>
              
              {/* Floating tech pill */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-white px-8 py-4 rounded-3xl font-black text-sm shadow-2xl transform rotate-6 animate-float">
                 MERN & DJANGO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
