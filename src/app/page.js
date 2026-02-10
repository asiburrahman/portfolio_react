import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Squares from "@/components/Squares";

export default function Home() {
  return (
    <>
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        className="fixed inset-0 z-[-1]"
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
