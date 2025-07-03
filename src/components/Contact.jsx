import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 text-lg">
              Always open to new opportunities, projects or tech discussions.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={24} />
                <span>muhammadashirkhan373@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" size={24} />
                <span>+92 328 2020923</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" size={24} />
                <span>Hyderabad, Sindh, Pakistan</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/muhammadAsh1r"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Your message here..."
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
