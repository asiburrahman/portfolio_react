import React from 'react';
import { motion } from 'framer-motion';
import photo from "/Asibur.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TypewriterText from './TypeWriterText';

const Hero = () => {
  return (
    <div id="hero" className="hero min-h-screen  pt-20">
      <motion.div
        className="hero-content flex-col lg:flex-row-reverse lg:gap-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}  // animate when 50% in view, run once
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Image with animation */}
        <motion.img
          src={photo}
          alt="Asibur Rahman"
          className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />

        {/* Text and icons */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold">Asibur Rahman</h1>
          <TypewriterText></TypewriterText>
          <p className="py-4 max-w-md mx-auto lg:mx-0">
            I am a passionate full-stack developer with expertise in React, Node.js, Express, and MongoDB. I build scalable, responsive web applications that solve real-world problems and deliver user satisfaction.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 text-3xl mt-4 ">
            <a href="https://github.com/asiburrahman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/asiburrahman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://x.com/asibur70" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary mt-8 w-full max-w-xs mx-auto lg:mx-0 text-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
