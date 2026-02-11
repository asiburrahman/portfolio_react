"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TypewriterText from './TypeWriterText';
import Image from 'next/image';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        <div id="hero" className="hero min-h-screen pt-20">
            <motion.div
                className="hero-content flex-col lg:flex-row-reverse lg:gap-20 w-11/12 lg:w-10/12 mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Image Section */}
                <motion.div
                    variants={itemVariants}
                    className="w-full max-w-xs lg:max-w-sm flex justify-center"
                >
                    <motion.div
                        className="relative w-80 h-[450px] md:w-96 md:h-[500px]"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src="/Asibur.jpg"
                            alt="Asibur Rahman"
                            className="rounded-2xl shadow-2xl object-cover border-4 border-primary/20"
                            fill
                            sizes="(max-width: 768px) 320px, 400px"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="text-center lg:text-left flex-1"
                    variants={itemVariants}
                >
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Asibur Rahman
                    </motion.h1>
                    <motion.div variants={itemVariants}>
                        <TypewriterText />
                    </motion.div>
                    <motion.p variants={itemVariants} className="py-4 max-w-md mx-auto lg:mx-0 text-lg opacity-90">
                        I am a passionate full-stack developer with expertise in React, Node.js, Express, and MongoDB. I build scalable, responsive web applications that solve real-world problems.
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-6 text-3xl mt-4">
                        <a href="https://github.com/asiburrahman" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-all hover:scale-110 active:scale-90"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/asiburrahman/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-all hover:scale-110 active:scale-90"><FaLinkedin /></a>
                        <a href="https://x.com/asibur70" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary transition-all hover:scale-110 active:scale-90"><FaTwitter /></a>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <a
                            href="/asibur_rahman.pdf"
                            download
                            className="btn btn-primary mt-8 px-8 py-3 rounded-xl shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 text-lg font-bold"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
