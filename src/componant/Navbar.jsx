import { FaDownload, FaHome, FaUser, FaEnvelope,FaGraduationCap,FaProjectDiagram,
   } from "react-icons/fa";
import { Link } from "react-router";
import Theme from "./Theme";
import { motion } from "framer-motion";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const link = <>
    <>
    <li>
      <button onClick={() => scrollToSection("hero")} className="flex items-center gap-1">
        <FaHome /> Home
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("about")} className="flex items-center gap-1">
        <FaUser /> About
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("education")} className="flex items-center gap-1">
        <FaGraduationCap /> Education
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("project")} className="flex items-center gap-1">
        <FaProjectDiagram /> Projects
      </button>
    </li>
    <li>
      <button onClick={() => scrollToSection("contacts")} className="flex items-center gap-1">
        <FaEnvelope /> Contact
      </button>
    </li>
  </>
</>

const Navbar = () => (
    <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='sticky top-0  z-50 shadow-xl font-bold  text-black '
    >
        <div className="navbar w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {link}
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Link to='/' className="text-sm font-bold md:text-2xl lg:text-3xl">
                        <img className='w-12 h-12 rounded-full md:inline-block' src='/logo.jpg' alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <a href="/asibur_rahman.pdf" download className="btn btn-outline btn-sm flex items-center gap-2">
                    <FaDownload /> Resume
                </a>
                <Theme></Theme>
            </div>
        </div>
    </motion.div>
);

export default Navbar;