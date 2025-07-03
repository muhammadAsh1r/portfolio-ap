import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projectData = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, user auth, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative tool with real-time updates and team features.",
    tech: ["React", "Express", "Socket.io", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Weather app with forecasts, location search, and charts.",
    tech: ["React", "API", "Chart.js", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-400"
            >
              <h3 className="text-xl font-bold mb-3 text-yellow-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
                >
                  <Github size={20} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
