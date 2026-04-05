import React, { Suspense, lazy, useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThemeToggle from "./components/ThemeToggle";

// Lazy load sections below the fold
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Minimalist loader for Suspense
const SectionLoader = () => (
  <div className="h-40 flex items-center justify-center opacity-20">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  const progressRef = useRef(null);
  
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      if (progressRef.current) {
        progressRef.current.style.width = scroll;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative min-h-screen text-secondary selection:bg-primary selection:text-bg-dark">
      {/* Scroll Progress Bar */}
      <div 
        ref={progressRef}
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-100 ease-out" 
        style={{ width: "0%" }}
      />
      
      <div className="mesh-gradient" />
      <div className="fixed bottom-8 right-8 z-[50]">
         <ThemeToggle />
      </div>

      <Navbar />
      <Hero />
      
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
