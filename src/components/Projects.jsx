import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projectData = [
  {
    title: "Food Order App",
    description:
      "Streamlined restaurant operations by replacing manual ordering with a Next.js and Django-based platform, featuring a real-time admin dashboard for reliable menu and order management.",
    tech: ["Next.js 15", "Django", "Tailwind CSS v4", "DRF"],
    github: "https://github.com/muhammadAsh1r/food-order-app.git",
    live: "https://food-order-app-git-main-ashirs-projects-4082be2a.vercel.app/",
  },
  {
    title: "Students Expense App",
    description:
      "Solves the difficulty of student budget tracking through a React and Django application with secure auth and data analytics, providing users with a clear overview of their daily spending.",
    tech: ["React", "Django", "PosteSQL", "Tailwind"],
    github: "https://github.com/muhammadAsh1r/students-expense.git",
    live: "https://students-expense.vercel.app/",
  },
  {
    title: "TechStore",
    description:
      "Addresses the gap for local electronics shops by providing a MERN-stack e-commerce platform with Stripe integration and a full admin suite, enabling a complete digital sales cycle.",
    tech: ["MERN Stack", "Stripe", "Tailwind CSS", "Node.js"],
    github: "https://github.com/muhammadAsh1r/e-commerce.git",
    live: "https://e-commerce-pi-jade.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "Provides a lightweight alternative to complex tools for daily task tracking, built with the MERN stack and JWT authentication to ensure a fast, secure, and organized user workflow.",
    tech: ["MERN Stack", "Vite", "Tailwind CSS", "JWT", "Node.js"],
    github: "https://github.com/muhammadAsh1r/todo-app2.0.git",
    live: "https://todo-app2-0-rosy.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description:
      "Solves the need for centralized weather data by integrating a React interface with external APIs and Chart.js, delivering intuitive multi-location forecasts and trend visualization.",
    tech: ["React", "API", "Chart.js", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Car Rental App",
    description:
      "Simplified the fragmented car rental process with a high-performance React and Vite UI, focusing on an efficient browsing and reservation experience for both renters and providers.",
    tech: ["React", "Vite", "Tailwind"],
    github: "https://github.com/muhammadAsh1r/car-rental-app",
    live: "https://car-rental-app-psi-ten.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-4 text-center">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <div className="h-1.5 w-32 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl hover:-translate-y-3"
            >
              {/* Project Image Placeholder/Area */}
              <div className="relative h-56 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="text-primary/20 group-hover:text-primary/40 transition-all duration-500 scale-150 group-hover:scale-[2]">
                   <Github size={48} />
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                   {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="px-3 py-1 bg-bg-dark/60 backdrop-blur-md text-secondary/80 text-[10px] font-black uppercase tracking-tighter rounded-full border border-white/5">
                        {t}
                      </span>
                   ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 text-secondary group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-secondary/60 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/5 text-secondary/40 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-secondary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-secondary/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary/60 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
                  >
                    <Github size={18} /> Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-bg-dark px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
