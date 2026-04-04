import React from "react";

import { 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Layers, 
  Layout, 
  Terminal, 
  Github, 
  Server, 
  Zap 
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code2 size={24} /> },
  { name: "React", icon: <Layout size={24} /> },
  { name: "Node.js", icon: <Server size={24} /> },
  { name: "Python", icon: <Terminal size={24} /> },
  { name: "Django", icon: <Cpu size={24} /> },
  { name: "MongoDB", icon: <Database size={24} /> },
  { name: "SQL", icon: <Layers size={24} /> },
  { name: "Tailwind", icon: <Globe size={24} /> },
  { name: "Git", icon: <Github size={24} /> },
  { name: "Performance", icon: <Zap size={24} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-24 px-4 text-center">
          <span className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Competencies</span>
          <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter mb-4">
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <div className="h-1.5 w-32 bg-primary rounded-full group-hover:w-48 transition-all duration-700 mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-secondary/5 backdrop-blur-3xl border border-secondary/10 p-10 rounded-[2.5rem] text-center transition-all duration-500 hover:-translate-y-4 hover:bg-secondary/10 hover:border-primary/30 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-8 inline-flex p-5 rounded-[1.5rem] bg-primary/10 text-primary group-hover:bg-primary group-hover:text-bg-dark transition-all duration-700 scale-125 group-hover:shadow-[0_0_30px_rgba(255,197,112,0.4)]">
                {skill.icon}
              </div>
              
              <div className="font-black text-secondary/60 group-hover:text-primary transition-colors tracking-[0.2em] text-xs uppercase">
                {skill.name}
              </div>
              
              {/* Complex hover detail */}
              <div className="absolute -bottom-10 group-hover:bottom-4 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                 <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em]">Mastered</span>
              </div>

              {/* Background glow */}
              <div className="absolute -inset-2 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
