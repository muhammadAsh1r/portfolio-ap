import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I'm a Full Stack Developer with deep expertise in the MERN stack (MongoDB,
              Express, React, Node.js), Mongoose, and Django. I specialize in building
              scalable and modern SaaS platforms, admin dashboards, REST APIs, and full-featured web apps.
            </p>
            <p>
              Whether you're a startup, business, or individual looking to bring your idea to life —
              I can build fast, secure, and responsive solutions tailored to your needs.
              From authentication to deployment, I handle the full development cycle.
            </p>
            <p>
              If you need a custom SaaS solution, portfolio, e-commerce site, or dashboard —
              let's work together and turn your vision into reality.
            </p>
            <p className="font-semibold text-yellow-400">
              Ready to build something amazing? Let's connect and make it happen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
