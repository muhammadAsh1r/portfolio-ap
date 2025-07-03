import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Django",
  "MongoDB",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Git",
  "MySQL",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-400"
            >
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
