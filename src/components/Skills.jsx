import React from "react";
import { getTechIcon } from "./TechIcons";

const row1 = [
  { name: "JavaScript", category: "Core" },
  { name: "TypeScript", category: "Typed" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Material UI", category: "UI Library" },
  { name: "Framer Motion", category: "Animation" },
];

const row2 = [
  { name: "Node.js", category: "Runtime" },
  { name: "Express.js", category: "Backend" },
  { name: "Django", category: "Full-Stack" },
  { name: "Django REST Framework", category: "APIs" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "NoSQL" },
  { name: "Supabase", category: "BaaS" },
  { name: "MySQL", category: "Database" },
  { name: "JWT", category: "Security" },
  { name: "Supabase Auth", category: "Auth" },
  { name: "Role-Based Access Control", category: "Security" },
  { name: "REST APIs", category: "Architecture" },
];

const row3 = [
  { name: "OpenAI API", category: "AI" },
  { name: "Google Gemini API", category: "AI" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "DevOps" },
  { name: "Postman", category: "Testing" },
  { name: "Vercel", category: "Cloud" },
  { name: "Render", category: "Cloud" },
  { name: "Lemon Squeezy", category: "Payments" },
  { name: "PostHog", category: "Analytics" },
  { name: "Stripe", category: "Payments" },
  { name: "SaaS Architecture", category: "Systems" },
  { name: "SEO", category: "Optimization" },
  { name: "PDF Processing", category: "Tooling" },
  { name: "Responsive Design", category: "UX" },
  { name: "CRUD Applications", category: "Full-Stack" },
];

// Reusable Marquee Row component
const MarqueeRow = ({ items, direction = "left", duration = "70s" }) => {
  // 2 sets in halfItems gives 18 to 30 items, spanning ~3000px-5000px
  const halfItems = [...items, ...items];
  const allItems = [...halfItems, ...halfItems];

  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-row relative w-full overflow-hidden py-1">
      <div
        className={`flex w-max shrink-0 items-center gap-3 sm:gap-4 md:gap-5 ${animationClass}`}
        style={{ "--marquee-duration": duration }}
      >
        {allItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group/pill relative flex items-center gap-2.5 sm:gap-3.5 px-3.5 py-2 sm:px-5 sm:py-3 rounded-2xl bg-secondary/[0.03] hover:bg-secondary/[0.08] border border-secondary/10 hover:border-primary/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,197,112,0.18)] cursor-default select-none shrink-0"
          >
            {/* Technology Icon */}
            <div className="text-secondary/70 group-hover/pill:text-primary transition-colors duration-300 shrink-0">
              {getTechIcon(
                tech.name,
                18,
                "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/pill:scale-110"
              )}
            </div>

            {/* Technology Name */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-secondary/90 group-hover/pill:text-secondary transition-colors whitespace-nowrap">
                {tech.name}
              </span>
              {tech.category && (
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-secondary/5 text-secondary/40 border border-secondary/5 group-hover/pill:border-primary/20 group-hover/pill:text-primary/70 transition-colors">
                  {tech.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Heading & Subtitle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-20 text-center">
        <span className="text-secondary/40 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
          Stack & Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-4">
          Skills & <span className="text-primary italic">Technologies</span>
        </h2>
        <p className="text-secondary/60 max-w-xl mx-auto text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
          Tools and technologies I use to build modern, scalable products.
        </p>
        <div className="h-1.5 w-32 bg-primary rounded-full mx-auto mt-6" />
      </div>

      {/* 3 Horizontal Animated Marquee Rows */}
      <div className="space-y-4 sm:space-y-6 relative w-full overflow-hidden marquee-mask">
        {/* Row 1 — Frontend & Core Development (LEFT -> RIGHT) */}
        <MarqueeRow items={row1} direction="right" duration="65s" />

        {/* Row 2 — Backend, Databases & Security (RIGHT -> LEFT) */}
        <MarqueeRow items={row2} direction="left" duration="78s" />

        {/* Row 3 — AI, Cloud, Tools & Product Engineering (LEFT -> RIGHT) */}
        <MarqueeRow items={row3} direction="right" duration="90s" />
      </div>
    </section>
  );
};

export default React.memo(Skills);
