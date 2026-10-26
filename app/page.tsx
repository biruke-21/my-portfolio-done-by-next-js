import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      {/* Home */}
      <div id="home">
        <Hero />
      </div>

      {/* Statistics */}
      <Stats />

      {/* Skills */}
      <div id="technologies" className="scroll-mt-28">
        <Technologies />
      </div>

      {/* Projects */}
      <div id="projects" className="scroll-mt-28">
        <FeaturedProjects />
      </div>

      {/* About */}
      <div id="about" className="scroll-mt-28">
        <About />
      </div>

      {/* Services */}
      <div id="services" className="scroll-mt-28">
        <Services />
      </div>

      {/* Contact */}
      <div id="contact" className="scroll-mt-28">
        <Contact />
      </div>
    </main>
  );
}