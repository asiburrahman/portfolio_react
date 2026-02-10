"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TypewriterText from './TypeWriterText';
import Image from 'next/image';

const Hero = () => {
    return (
        <div id="hero" className="hero min-h-screen pt-20">
            <motion.div
                className="hero-content flex-col lg:flex-row-reverse lg:gap-20 w-11/12 lg:w-10/12 mx-auto px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                {/* Image with animation */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="relative w-full max-w-xs lg:max-w-sm h-auto aspect-[3/4] flex items-center justify-center"
                >
                    <Image
                        src="/Asibur.jpg"
                        alt="Asibur Rahman"
                        className="rounded-lg shadow-2xl object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </motion.div>

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
                    <p className="py-4 max-w-md mx-auto lg:mx-0 text-lg">
                        I am a passionate full-stack developer with expertise in React, Node.js, Express, and MongoDB. I build scalable, responsive web applications that solve real-world problems and deliver user satisfaction.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-6 text-3xl mt-4 ">
                        <a href="https://github.com/asiburrahman" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/asiburrahman/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><FaLinkedin /></a>
                        <a href="https://x.com/asibur70" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors"><FaTwitter /></a>
                    </div>
                    <a
                        href="/asibur_rahman.pdf"
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
