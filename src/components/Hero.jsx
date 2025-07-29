import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Info */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-400">Ashir</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Full Stack Developer | MERN & Django
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-xl">
            I help build full-stack web apps — from simple landing pages to complete SaaS platforms and dashboards.
            I work with React, Node.js, MongoDB, Mongoose, and Django.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              Let's Talk
            </a>
          </div>
          <div className="mt-12 animate-bounce hidden md:block">
            <ChevronDown size={32} className="text-yellow-400" />
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="flex justify-center">
          <img
            src="/public/my_pic.jpg" // 🔁 Replace with your actual image path
            alt="Ashir"
            className="w-64 h-64 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
