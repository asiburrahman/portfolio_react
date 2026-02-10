import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaNetworkWired } from 'react-icons/fa';

const experienceData = [
  {
    title: 'Senior IT Officer',
    company: 'Shishir Knitting and Dyeing Ltd',
    duration: 'Aug 2022 - Present',
    icon: <FaLaptopCode className="text-xl text-primary" />,
    details: 'Hosting, WordPress, SEO, MikroTik, CCTV, LAN/Wi-Fi, Troubleshooting'
  },
  {
    title: 'Junior IT Executive',
    company: 'Career Overseas Consultants Ltd',
    duration: 'Nov 2020 – Jul 2021',
    icon: <FaNetworkWired className="text-xl text-secondary" />,
    details: 'Networking, Hardware Maintenance, Software Troubleshooting'
  }
];

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="p-6 mt-10 rounded-xl shadow-2xl w-11/12 mx-auto bg-base-200"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <ul className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className=" p-4 rounded-lg shadow-lg bg-base-100 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {exp.icon}
              <div>
                <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                <p className="text-sm">{exp.company} — {exp.duration}</p>
              </div>
            </div>
            <p className="text-sm">{exp.details}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Experience;
