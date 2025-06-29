import React from 'react';
import photo from "/Asibur.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => (
  <div id="hero" className="hero min-h-screen bg-base-200 pt-20">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={photo} className="max-w-xs lg:max-w-sm  rounded-lg shadow-2xl" alt="Asibur Rahman" />
      <div>
        <h1 className="text-5xl font-bold">Asibur Rahman</h1>
        <h2 className="text-2xl mt-2">Full Stack Developer</h2>
        <p className="py-4 max-w-md">
          I am a passionate full-stack developer with expertise in React, Node.js, Express, and MongoDB. I build scalable, responsive web applications that solve real-world problems and deliver user satisfaction.
        </p>
        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/asiburcse" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/asiburcse" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/asiburcse" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
        <a href="/resume.pdf" download className="btn btn-primary mt-4">Download Resume</a>
      </div>
    </div>
  </div>
);

export default Hero;