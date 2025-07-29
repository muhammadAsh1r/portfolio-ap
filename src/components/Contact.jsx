import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [flashMessage, setFlashMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rg1tgok",   // Replace with your EmailJS service ID
        "template_29zf6to",  // Replace with your EmailJS template ID
        formRef.current,
        "Vg1pG6He_8a7WzDy4"  // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setFlashMessage({ type: "success", text: "✅ Message sent successfully!" });
          formRef.current.reset();
          setTimeout(() => setFlashMessage(null), 3000);
        },
        (error) => {
          setFlashMessage({ type: "error", text: "❌ Failed to send message. Please try again." });
          setTimeout(() => setFlashMessage(null), 3000);
        }
      );
  };

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
                href="https://www.linkedin.com/in/muhammad-ashir-khan-2b3aa7286/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-gray-800 p-8 rounded-lg border border-gray-700 space-y-6"
          >
            {flashMessage && (
              <div
                className={`rounded-lg px-4 py-3 font-semibold text-sm ${
                  flashMessage.type === "success"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {flashMessage.text}
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your message here..."
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
