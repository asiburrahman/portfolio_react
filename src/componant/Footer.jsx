import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="shadow-2xl border-t border-base-300 text-center text-base-content py-10 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ duration: 2 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold">Asibur Rahman</h3>
        <p className="text-sm text-center max-w-xl">
          Full Stack Developer | MERN Stack | Passionate about building fast,
          scalable and modern web applications.
        </p>

        <div className="space-y-1 text-sm text-center">
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-primary" />
            <span>+8801747311512</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-primary" />
            <a
              href="mailto:asibur70@gmail.com"
              className="hover:underline"
            >
              asibur70@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>Mirpur-6, Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-xl mt-4">
          <a
            href="https://github.com/asiburrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/asiburrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:asibur70@gmail.com"
            className="hover:text-primary"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <hr className="w-full border-base-300 my-4" />

        <p className="text-xs">
          © {new Date().getFullYear()} Asibur Rahman — All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
