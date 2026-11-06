export const projectsData = [
  {
    slug: "makeresume-pro",
    title: "MakeResume.pro",
    category: "Full Stack (SaaS & AI)",
    tagline: "AI-powered resume builder, ATS scoring engine, and career SaaS platform",
    description:
      "A commercial-grade SaaS platform that enables job seekers to generate ATS-optimized resumes and cover letters using generative AI, real-time rich text editing, drag-and-drop customization, and pixel-perfect PDF exports.",
    overview:
      "MakeResume (makeresume.pro) is an end-to-end AI resume builder and ATS compatibility scoring platform engineered for modern job seekers. Built with Next.js 16, React 19, and Supabase, it provides an intuitive TipTap rich-text editing experience, drag-and-drop section customization, headless Chromium serverless PDF generation, and an automated ATS scoring engine that grades resumes against industry standards.",
    problem:
      "Legacy resume builders feature predatory recurring subscription traps, rigid layouts that scramble when exported, poor ATS compatibility, and lack intelligent role-tailored content assistance.",
    solution:
      "Architected a high-performance modern SaaS platform with Next.js 16 App Router and Supabase PostgreSQL with Row-Level Security (RLS). Integrated Google Gemini and OpenAI APIs for context-rich bullet point generation, TipTap for interactive editing, and headless Chromium (Puppeteer) for serverless, pixel-perfect PDF rendering, complete with Lemon Squeezy and Stripe subscription monetization.",
    keyFeatures: [
      "AI Resume & Cover Letter Content Generation via OpenAI & Google Gemini APIs",
      "Automated ATS compatibility scanner with a weighted criteria-based scoring engine",
      "TipTap-powered rich text resume editor with inline styling and formatting controls",
      "Interactive drag-and-drop section reordering using @dnd-kit",
      "Serverless pixel-perfect PDF compilation using headless Chromium (Puppeteer)",
      "Supabase Auth with SSR session management and PostgreSQL Row-Level Security (RLS)",
      "Commercial SaaS billing & checkout integration with Lemon Squeezy and Stripe",
      "Dynamic programmatic SEO comparison hub with published scoring rubrics",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI API",
      "Gemini API",
      "Puppeteer",
      "PostgreSQL",
      "Lemon Squeezy",
    ],
    github: "https://github.com/muhammadAsh1r/resume-builder.git",
    live: "https://www.makeresume.pro",
    image: "/projects/makeresume.webp",
  },
  {
    slug: "food-order-app",
    title: "Food Order App",
    category: "Full Stack",
    tagline: "Restaurant ordering platform with real-time Django & Next.js admin dashboard",
    description:
      "Streamlined restaurant operations by replacing manual ordering with a Next.js and Django-based platform, featuring a real-time admin dashboard for reliable menu and order management.",
    overview:
      "A modern end-to-end food ordering and restaurant management platform. Designed to eliminate manual phone orders and paper menus by providing customers with an intuitive ordering experience and staff with a live order processing dashboard.",
    problem:
      "Traditional restaurants experience order inaccuracies, slow turnaround times, and lack of menu flexibility during rush hours.",
    solution:
      "Built a decoupled architecture using Django REST Framework for robust order state management and Next.js 15 with Tailwind CSS v4 on the frontend for lightning-fast customer browsing and instant status updates.",
    keyFeatures: [
      "Dynamic digital menu with category filtering and real-time item availability",
      "Interactive cart, customization options, and checkout flow",
      "Real-time kitchen order management dashboard for staff",
      "Role-based access control with secure JWT authentication",
      "RESTful API design with clean serializer validation in Django",
    ],
    tech: ["Next.js 15", "Django", "Tailwind CSS v4", "Django REST Framework", "PostgreSQL"],
    github: "https://github.com/muhammadAsh1r/food-order-app.git",
    live: "https://food-order-app-git-main-ashirs-projects-4082be2a.vercel.app/",
  },
  {
    slug: "students-expense-app",
    title: "Students Expense App",
    category: "Full Stack",
    tagline: "Student budgeting and spending analytics tracker built with React & Django",
    description:
      "Solves the difficulty of student budget tracking through a React and Django application with secure auth and data analytics, providing users with a clear overview of their daily spending.",
    overview:
      "A targeted financial management tool tailored specifically for students. It simplifies expense logging, categorizes spending habits, and generates visual analytics to help students avoid overspending throughout the semester.",
    problem:
      "Students often struggle to track daily micro-expenses, leading to month-end budget shortages and financial stress.",
    solution:
      "Engineered an intuitive budget dashboard with instant expense entry, category breakdowns (food, rent, study supplies), and monthly spending charts connected to a secure Django backend.",
    keyFeatures: [
      "Expense logging with custom categories, dates, and payment notes",
      "Monthly budget limit alerts and spending breakdown graphs",
      "Secure user authentication with individual private financial databases",
      "Search, filter, and CSV data export capabilities",
      "Responsive mobile-first layout optimized for on-the-go tracking",
    ],
    tech: ["React", "Django", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/muhammadAsh1r/students-expense.git",
    live: "https://students-expense.vercel.app/",
  },
  {
    slug: "techstore-ecommerce",
    title: "TechStore E-Commerce",
    category: "Full Stack (MERN)",
    tagline: "Full-cycle digital electronics storefront with Stripe payments and admin suite",
    description:
      "Addresses the gap for local electronics shops by providing a MERN-stack e-commerce platform with Stripe integration and a full admin suite, enabling a complete digital sales cycle.",
    overview:
      "A complete commercial-grade online storefront designed for tech retailers. Integrates end-to-end shopping cart functionality, customer account profiles, Stripe checkout processing, and comprehensive inventory management.",
    problem:
      "Local electronic businesses need a turnkey online presence with secure payment collection and automated inventory decrementing without expensive third-party subscription fees.",
    solution:
      "Developed a full MERN stack web app utilizing Node/Express for API routing, MongoDB for flexible product schemas, and Stripe API for PCI-compliant checkout sessions.",
    keyFeatures: [
      "Product catalog with keyword search, brand filtering, and sorting",
      "Secure Stripe payment gateway integration with webhooks",
      "Customer reviews and star rating calculation system",
      "Admin portal for adding products, managing stock, and viewing sales",
      "JWT-based role authentication separating customers from administrators",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "Tailwind CSS"],
    github: "https://github.com/muhammadAsh1r/e-commerce.git",
    live: "https://e-commerce-pi-jade.vercel.app/",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    category: "Full Stack (MERN)",
    tagline: "High-productivity workflow and task organizer with JWT security",
    description:
      "Provides a lightweight alternative to complex tools for daily task tracking, built with the MERN stack and JWT authentication to ensure a fast, secure, and organized user workflow.",
    overview:
      "An agile productivity app designed to keep personal and team workflows organized. Emphasizes low-latency interactions, quick task creation, status updates, and deadline reminders.",
    problem:
      "Heavyweight project management suites often cause cognitive overload for individuals needing a focused, clutter-free task tracking solution.",
    solution:
      "Built a sleek, responsive Single Page Application with optimized state management, category tagging, priority flags, and instant optimistic UI updates.",
    keyFeatures: [
      "Kanban-style task organization with Drag & Drop status toggles",
      "Priority indicators (High, Medium, Low) and due-date filters",
      "Encrypted user authentication using JWT and bcrypt",
      "Real-time search and filter by status, priority, and keyword",
      "Clean glassmorphism dark/light interface with fluid animations",
    ],
    tech: ["MERN Stack", "Vite", "Tailwind CSS", "JWT", "Node.js", "Express"],
    github: "https://github.com/muhammadAsh1r/todo-app2.0.git",
    live: "https://todo-app2-0-rosy.vercel.app/",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    category: "Frontend",
    tagline: "Multi-city meteorological forecasts with dynamic Chart.js visualizations",
    description:
      "Solves the need for centralized weather data by integrating a React interface with external APIs and Chart.js, delivering intuitive multi-location forecasts and trend visualization.",
    overview:
      "An interactive weather analytics dashboard that aggregates real-time weather metrics from OpenWeatherMap, rendering temperature curves, wind speeds, humidity indices, and multi-day projections.",
    problem:
      "Standard weather widgets typically display only basic current temperatures without clear historical trends or visual forecast curves.",
    solution:
      "Integrated React state hooks with Chart.js canvas elements to produce interactive meteorological trend graphs that dynamically respond to city searches.",
    keyFeatures: [
      "Real-time weather data fetching via OpenWeatherMap API",
      "5-day forecast breakdown with hourly temperature trends",
      "Interactive Chart.js visual charts for temperature and humidity",
      "Automatic geolocation detection and favorites list",
      "Adaptive weather condition icons and dynamic backgrounds",
    ],
    tech: ["React", "REST API", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/muhammadAsh1r",
    live: "#",
  },
  {
    slug: "car-rental-app",
    title: "Car Rental App",
    category: "Frontend",
    tagline: "Vehicle reservation and fleet browsing interface optimized for user speed",
    description:
      "Simplified the fragmented car rental process with a high-performance React and Vite UI, focusing on an efficient browsing and reservation experience for both renters and providers.",
    overview:
      "A car rental discovery and booking frontend created to streamline fleet exploration. Features detailed car specifications, pricing calculations, rental dates selection, and responsive vehicle comparison.",
    problem:
      "Car rental websites frequently suffer from complex, multi-step booking forms that lead to high bounce rates.",
    solution:
      "Engineered an efficient client-side reservation experience featuring visual vehicle cards, instant date-range price calculations, and streamlined booking inputs.",
    keyFeatures: [
      "Vehicle fleet showcase with category filtering (SUV, Luxury, Economy)",
      "Interactive date picker calculating estimated rental cost",
      "Detailed modal displaying vehicle specs (mileage, transmission, fuel)",
      "Mobile-optimized reservation confirmation dialog",
      "Lightweight, snappy UI with zero page reload friction",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/muhammadAsh1r/car-rental-app",
    live: "https://car-rental-app-psi-ten.vercel.app/",
  },
];
