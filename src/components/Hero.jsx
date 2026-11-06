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
          <div className="text-center lg:text-left space-y-7">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] animate-pulse">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>Available for Hire</span>
            </div>
            
            <div>
               <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.08] tracking-tighter text-secondary">
                 I Build <span className="text-primary italic">Products That Scale.</span>
               </h1>
            </div>

            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl md:text-2xl text-secondary font-medium leading-relaxed">
                Full-Stack Developer specializing in{" "}
                <strong className="text-secondary font-bold underline decoration-primary/40 underline-offset-4">
                  modern web applications, AI-powered platforms, and SaaS products
                </strong>
                .
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-secondary/70 font-light leading-relaxed">
                I’m <strong className="text-primary font-bold">Ashir</strong> — I turn ideas into production-ready software using{" "}
                <strong className="text-secondary font-semibold">
                  Next.js, React, TypeScript, Django, Node.js, and modern cloud technologies.
                </strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                className="group relative bg-primary text-bg-dark px-10 py-4 sm:px-12 sm:py-5 rounded-full font-black text-base sm:text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,197,112,0.3)] text-center"
              >
                <span className="relative z-10 transition-all uppercase tracking-widest">Explore My Work</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
              </a>
              <a
                href="#contact"
                className="px-10 py-4 sm:px-12 sm:py-5 rounded-full font-black text-base sm:text-lg border-2 border-secondary/15 text-secondary hover:bg-secondary/5 hover:border-primary transition-all uppercase tracking-widest text-center"
              >
                Let’s Work Together
              </a>
            </div>

            {/* Focus Tagline */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-secondary/60">
              <span>Full-Stack</span>
              <span className="text-primary">•</span>
              <span>SaaS</span>
              <span className="text-primary">•</span>
              <span>AI</span>
              <span className="text-primary">•</span>
              <span>Cloud</span>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-10 opacity-30">
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
                  src="/my_pic.webp"
                  alt="Ashir"
                  loading="eager"
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
              </div>
              
              {/* Floating tech pill */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-white px-8 py-4 rounded-3xl font-black text-sm shadow-2xl transform rotate-6 animate-float">
                 FULL-STACK & AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
