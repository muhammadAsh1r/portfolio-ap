import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Globe, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import { projectsData } from "@/data/projects";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Ashir Khan",
    };
  }

  return {
    title: `${project.title} | Case Study - Ashir Khan`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      <ScrollProgress />
      <div className="mesh-gradient" />

      <div className="fixed bottom-8 right-8 z-[50]">
        <ThemeToggle />
      </div>

      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary/60 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl bg-secondary/5 border border-secondary/10 hover:border-primary/30"
            >
              <ArrowLeft size={16} /> Back to All Projects
            </Link>

            <span className="text-secondary/40 text-xs font-bold uppercase tracking-widest">
              Case Study
            </span>
          </div>

          {/* Project Hero Header */}
          <div className="space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider">
              <Sparkles size={14} />
              <span>{project.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-secondary/70 font-light leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-bg-dark px-7 py-3.5 rounded-full font-black text-sm uppercase tracking-wider hover:bg-secondary transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
                >
                  <ExternalLink size={16} /> Live Application
                </a>
              )}

              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-sm uppercase tracking-wider border-2 border-secondary/10 text-secondary hover:bg-secondary/5 hover:border-primary transition-all"
                >
                  <Github size={18} /> View Source Code
                </a>
              )}
            </div>
          </div>

          {/* Key Metrics / Snapshot Card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16 p-6 rounded-3xl bg-secondary/5 backdrop-blur-xl border border-secondary/10">
            <div>
              <span className="block text-secondary/40 text-[10px] font-black uppercase tracking-widest mb-1">
                Category
              </span>
              <span className="text-secondary font-bold text-sm sm:text-base">
                {project.category}
              </span>
            </div>
            <div>
              <span className="block text-secondary/40 text-[10px] font-black uppercase tracking-widest mb-1">
                Role
              </span>
              <span className="text-secondary font-bold text-sm sm:text-base">
                Full Stack Architecture
              </span>
            </div>
            <div>
              <span className="block text-secondary/40 text-[10px] font-black uppercase tracking-widest mb-1">
                Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live & Maintained
              </span>
            </div>
          </div>

          {/* Project Visual Showcase */}
          {project.image && (
            <div className="mb-16 rounded-3xl overflow-hidden border border-secondary/10 bg-secondary/5 shadow-2xl">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full max-h-[520px] object-cover object-top"
              />
            </div>
          )}

          {/* Overview & Problem/Solution Section */}
          <div className="space-y-12 mb-16">
            <div className="bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
              <h2 className="text-2xl font-black text-secondary tracking-tight">
                Project <span className="text-primary italic">Overview</span>
              </h2>
              <p className="text-secondary/70 leading-relaxed text-base sm:text-lg font-light">
                {project.overview}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
                <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                  The Challenge
                </span>
                <h3 className="text-xl font-black text-secondary tracking-tight">
                  Problem Statement
                </h3>
                <p className="text-secondary/60 leading-relaxed text-sm sm:text-base font-light">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl">
                <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                  Engineering Approach
                </span>
                <h3 className="text-xl font-black text-secondary tracking-tight">
                  The Solution
                </h3>
                <p className="text-secondary/60 leading-relaxed text-sm sm:text-base font-light">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl space-y-8">
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
                Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight">
                Core Features & Capabilities
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-secondary/75 text-sm sm:text-base leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="bg-bg-dark/40 backdrop-blur-xl border border-secondary/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl space-y-6">
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">
                Technologies
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight">
                Tech Stack & Architecture
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-secondary/5 text-secondary/80 hover:text-primary text-xs font-bold uppercase tracking-wider rounded-xl border border-secondary/10 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Next & Previous Project Navigation Footer */}
          <div className="border-t border-secondary/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-secondary/60 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] text-secondary/40 font-normal">Previous Project</span>
                  <span>{prevProject.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-secondary/60 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider"
              >
                <div className="text-right">
                  <span className="block text-[10px] text-secondary/40 font-normal">Next Project</span>
                  <span>{nextProject.title}</span>
                </div>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
