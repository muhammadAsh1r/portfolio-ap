import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import Certifications from "@/components/Certifications";

export const metadata = {
  title: "All Licenses & Certifications | Ashir Khan",
  description:
    "Explore all verified licenses and technical certifications earned by Ashir Khan across Full Stack Web Development, Django, AI, and Data Analysis.",
};

export default function CertificationsPage() {
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
        <Certifications limit={null} isFullPage={true} />
      </main>
      <Footer />
    </div>
  );
}
