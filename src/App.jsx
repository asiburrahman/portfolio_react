import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";


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
        direction='right' // up, down, left, right, diagonal
        borderColor='#84a48d'
        hoverFillColor=''
      />
      <Router >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects></Projects>
        <Contact />
        <Footer />

      </Router>

    </>


  )
}

export default App
