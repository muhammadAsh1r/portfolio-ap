import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16 px-4">
           <span className="text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-4">Background</span>
           <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter mb-4 text-center">
             About <span className="text-primary italic">Me</span>
           </h2>
           <div className="h-1.5 w-24 bg-primary rounded-full group hover:w-48 transition-all duration-700" />
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-1000" />
            <div className="relative aspect-square max-w-md mx-auto bg-bg-dark/40 backdrop-blur-3xl border border-secondary/5 rounded-[3rem] p-16 flex items-center justify-center shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02]">
               <div className="text-[12rem] grayscale group-hover:grayscale-0 transition-all duration-700 drop-shadow-[0_0_50px_rgba(255,197,112,0.2)] group-hover:drop-shadow-[0_0_80px_rgba(255,197,112,0.4)]">
                 👨‍💻
               </div>
               
               {/* Stats or floating elements */}
               <div className="absolute -top-10 -right-10 bg-primary text-bg-dark font-black px-8 py-5 rounded-[2rem] shadow-2xl transform rotate-12 transition-transform group-hover:rotate-0">
                 <span className="block text-2xl">3+</span>
                 <span className="text-[10px] uppercase tracking-widest">Years Exp.</span>
               </div>
               <div className="absolute -bottom-10 -left-10 bg-accent text-white font-black px-8 py-5 rounded-[2rem] shadow-2xl transform -rotate-12 transition-transform group-hover:rotate-0">
                 <span className="block text-2xl">50+</span>
                 <span className="text-[10px] uppercase tracking-widest">Projects</span>
               </div>
            </div>
          </div>

          <div className="space-y-10 text-lg">
            <div className="bg-secondary/5 backdrop-blur-3xl border border-secondary/10 p-10 md:p-14 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-all duration-700" />
               <p className="text-secondary/70 leading-relaxed font-light text-xl first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-2 first-letter:float-left uppercase tracking-tight">
                  I transform complex challenges into elegant digital solutions. As a Full Stack Architect, my mission is to build robust, scalable, and beautifully designed ecosystems.
               </p>
               <p className="text-secondary/50 leading-relaxed font-light">
                  My journey is fueled by a passion for clean code and exceptional user experiences. I don't just write code; I craft digital legacies.
               </p>
               <div className="pt-8 border-t border-secondary/10">
                  <p className="text-2xl font-black text-primary italic leading-tight">
                    "Innovation happens at the intersection of logic and creativity."
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
               {['SaaS Architecture', 'Cloud Services', 'UI/UX Strategy', 'Agile Delivery'].map((skill, index) => (
                 <div key={index} className="flex items-center space-x-4 text-secondary/40 text-[10px] font-black uppercase tracking-[0.3em]">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,197,112,0.8)]" />
                    <span>{skill}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
