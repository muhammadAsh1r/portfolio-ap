import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import Projects from "@/components/Projects";

export const metadata = {
  title: "All Projects & Case Studies | Ashir Khan",
  description:
    "Explore all production web applications, full stack architectures, and frontend projects built by Ashir Khan using Next.js, Django, React, and MERN.",
};

export default function ProjectsPage() {
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
        <Projects limit={null} isFullPage={true} />
      </main>
      <Footer />
    </div>
  );
}
