import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Mesh Gradient */}
      <div className="mesh-gradient" />

      {/* Floating Theme Toggle */}
      <div className="fixed bottom-8 right-8 z-[50]">
        <ThemeToggle />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
