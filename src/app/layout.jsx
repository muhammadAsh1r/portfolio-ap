import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ashir Khan | Full Stack Developer Portfolio",
  description:
    "Portfolio of Ashir Khan, a Full Stack Developer specialized in MERN, Django, and modern web architectures. Explore my projects and contact me for collaborations.",
  keywords: [
    "Ashir Khan",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "MERN Stack",
    "Portfolio",
    "Islamabad Developer",
    "Web Architect",
  ],
  authors: [{ name: "Ashir Khan" }],
  metadataBase: new URL("https://muhammadash1r.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://muhammadash1r.github.io/",
    title: "Ashir Khan | Full Stack Developer Portfolio",
    description:
      "Portfolio of Ashir Khan, a Full Stack Developer specialized in MERN, Django, and modern web architectures. Explore my projects and contact me for collaborations.",
    images: [
      {
        url: "/my_pic.jpg",
        alt: "Ashir Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashir Khan | Full Stack Developer Portfolio",
    description:
      "Portfolio of Ashir Khan, a Full Stack Developer specialized in MERN, Django, and modern web architectures. Explore my projects and contact me for collaborations.",
    images: ["/my_pic.jpg"],
  },
  icons: {
    icon: "/my_icon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
