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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-4">
            Get In <span className="text-primary italic">Touch</span>
          </h2>
          <p className="text-secondary/40 max-w-lg text-sm uppercase tracking-[0.3em] font-bold">
            Let's build the future together
          </p>
          <div className="h-1.5 w-32 bg-primary rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-secondary tracking-tight">
                Let's work <br /><span className="text-primary italic">together</span>
              </h3>
              <p className="text-secondary/60 text-lg font-light leading-relaxed max-w-md">
                Always open to new opportunities, groundbreaking projects, or sharing insights about the latest in technology.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />, title: "Email Me", detail: "muhammadashirkhan373@gmail.com" },
                { icon: <Phone size={24} />, title: "Call Me", detail: "+92 328 2020923" },
                { icon: <MapPin size={24} />, title: "Location", detail: "Islamabad, Pakistan" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="p-4 rounded-2xl bg-secondary/5 text-primary border border-secondary/10 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-secondary/40 uppercase tracking-widest mb-1">{item.title}</h4>
                    <span className="text-secondary/80 font-medium group-hover:text-secondary transition-colors">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              {[
                { icon: <Github size={24} />, link: "https://github.com/muhammadAsh1r" },
                { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/muhammadash1r/" },
                { icon: <Mail size={24} />, link: "mailto:muhammadashirkhan373@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-secondary/5 text-secondary/60 border border-secondary/10 hover:bg-primary hover:text-bg-dark hover:border-primary transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative bg-bg-dark/80 backdrop-blur-2xl p-10 md:p-12 rounded-[2rem] border border-secondary/10 space-y-8 shadow-2xl"
            >
              {flashMessage && (
                <div
                  className={`rounded-2xl px-6 py-4 font-black text-sm tracking-widest uppercase text-center animate-in fade-in zoom-in duration-300 ${flashMessage.type === "success"
                      ? "bg-primary text-bg-dark"
                      : "bg-red-500 text-white"
                    }`}
                >
                  {flashMessage.text}
                </div>
              )}

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-b-2 border-secondary/10 px-0 py-4 text-secondary focus:outline-none focus:border-primary transition-all placeholder-transparent"
                    id="name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-secondary/40 font-bold uppercase tracking-widest text-xs pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-primary">
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-b-2 border-secondary/10 px-0 py-4 text-secondary focus:outline-none focus:border-primary transition-all placeholder-transparent"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-secondary/40 font-bold uppercase tracking-widest text-xs pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-primary">
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder=" "
                    required
                    className="peer w-full bg-transparent border-b-2 border-secondary/10 px-0 py-4 text-secondary focus:outline-none focus:border-primary transition-all placeholder-transparent resize-none"
                    id="message"
                  />
                  <label htmlFor="message" className="absolute left-0 top-4 text-secondary/40 font-bold uppercase tracking-widest text-xs pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-primary">
                    Your Message
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full bg-primary text-bg-dark py-5 rounded-2xl font-black uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
