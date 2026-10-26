import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Biruke | Full Stack Developer",
  description:
    "Personal portfolio of Biruke, a Full Stack Developer building modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {/* Animated 3D background */}
        <ThreeDBackground />

        {/* Website content */}
        <div className="relative z-10 min-h-screen">
          {/* Responsive navbar */}
          <Navbar />

          {/* Current page */}
          {children}

          {/* Website footer */}
          <Footer />

          {/* Floating scroll-to-top button */}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}