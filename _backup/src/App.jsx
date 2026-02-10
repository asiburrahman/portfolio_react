import './App.css'
import Navbar from './componant/Navbar';
import Hero from './componant/Hero';
import About from './componant/About';
import Skills from './componant/Skills';
import Education from './componant/Education';
import Experience from './componant/Experience';
import Contact from './componant/Contact';
import Footer from './componant/Footer';
import Projects from './componant/Projects';
import Squares from './componant/Squares';

function App() {
  return (
    <>
      <Squares
        speed={1}
        squareSize={40}
        direction="right"
        borderColor="#84a48d"
        hoverFillColor=""
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

export default App
