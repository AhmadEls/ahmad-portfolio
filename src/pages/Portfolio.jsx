import Navbar from '../components/portfolio/Navbar';
import MagneticCursor from '../components/portfolio/MagneticCursor';
import Hero from '../components/portfolio/Hero';
import FeaturedProject from '../components/portfolio/FeaturedProject';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import About from '../components/portfolio/About';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-obsidian text-core-white selection:bg-neural-teal/30 selection:text-core-white">
      <MagneticCursor />
      <Navbar />

      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-obsidian" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-neural-teal/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-logic-green/[0.03] blur-3xl" />
      </div>

      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}