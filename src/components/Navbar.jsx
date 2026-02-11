"use client";
import { FaDownload, FaHome, FaUser, FaEnvelope, FaGraduationCap, FaProjectDiagram } from "react-icons/fa";
import Theme from "./Theme";
import { motion } from "framer-motion";
import Image from "next/image";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const link = (
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
);

const Navbar = () => (
    <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="sticky top-0 z-50 shadow-xl font-bold bg-base-100/80 backdrop-blur-md"
    >
        <div className="navbar w-full lg:w-10/12 mx-auto px-2 md:px-4 flex justify-between items-center">
            <div className="navbar-start flex-1 flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {link}
                    </ul>
                </div>
                <button onClick={() => scrollToSection("hero")} className="avatar ml-1 hidden lg:block">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full relative">
                        <Image src="/logo.jpg" alt="Logo" fill className="rounded-full object-cover" sizes="(max-width: 768px) 40px, 48px" />
                    </div>
                </button>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{link}</ul>
            </div>

            <div className="navbar-end flex-1 flex justify-end items-center gap-1 md:gap-2">
                <a href="/asibur_rahman.pdf" download className="btn btn-outline btn-sm flex items-center gap-1">
                    <FaDownload /> <span>Resume</span>
                </a>
                <Theme />
            </div>
        </div>
    </motion.div>
);

export default Navbar;
