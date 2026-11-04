"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight, ArrowLeft, Layers, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";

const Projects = ({ limit = 3, isFullPage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Full Stack") return project.category.includes("Full Stack");
    if (selectedCategory === "Frontend") return project.category.includes("Frontend");
    return true;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
  const hasMore = limit && projectsData.length > limit;

  return (
    <section id="projects" className={`${isFullPage ? "pt-28 pb-24" : "py-24"} relative overflow-hidden`}>
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link for Full Page */}
        {isFullPage && (
          <div className="mb-10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-secondary/60 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl bg-secondary/5 border border-secondary/10 hover:border-primary/30"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-4">
            {isFullPage ? "All " : "Featured "}
            <span className="text-primary italic">Projects</span>
          </h2>
          <p className="text-secondary/60 max-w-xl text-sm uppercase tracking-[0.25em] font-medium">
            {isFullPage
              ? `Exploring all ${projectsData.length} production applications & case studies`
              : "Modern web applications & real-world software solutions"}
          </p>
          <div className="h-1.5 w-32 bg-primary rounded-full mt-6" />
        </div>

        {/* Category Filters on Full Page */}
        {isFullPage && (
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-bg-dark shadow-lg shadow-primary/20 scale-105"
                    : "bg-secondary/5 text-secondary/60 hover:text-secondary hover:bg-secondary/10 border border-secondary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl hover:-translate-y-2"
            >
              {/* Project Card Header Area */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent flex items-center justify-center overflow-hidden border-b border-secondary/5">
                <div className="absolute inset-0 bg-bg-dark/30 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Decorative Icon */}
                <div className="text-primary/30 group-hover:text-primary/60 transition-all duration-500 scale-125 group-hover:scale-150">
                  <Layers size={44} />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-bg-dark/80 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-wider rounded-full border border-primary/20 shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Detail Page Arrow Shortcut */}
                <div className="absolute top-4 right-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="p-2 rounded-xl bg-bg-dark/60 text-secondary/70 hover:text-primary hover:bg-primary/20 border border-white/5 transition-all"
                    title="View Case Study"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-3 text-secondary group-hover:text-primary transition-colors tracking-tight">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-secondary/60 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/5 text-secondary/50 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-secondary/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-primary/5 text-primary px-2.5 py-1 rounded-lg text-[10px] font-bold">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-secondary/5 gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-secondary/70 hover:text-primary text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    <Sparkles size={13} className="text-primary" /> Case Study
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-secondary/60 hover:text-primary transition-colors rounded-xl hover:bg-secondary/5"
                        title="Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-primary text-bg-dark px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-md active:scale-95"
                      >
                        Live <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button on Home Page */}
        {!isFullPage && hasMore && (
          <div className="flex justify-center mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 bg-secondary/5 hover:bg-primary text-secondary hover:text-bg-dark border border-secondary/15 hover:border-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>View All Projects ({projectsData.length})</span>
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Projects);
