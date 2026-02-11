"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const EducationCard = ({ delay = 0, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
        >
            {children}
        </motion.div>
    );
};

const Education = () => {
    return (
        <div
            id="education"
            className="w-11/12 lg:w-10/12 mx-auto py-10 px-4 md:px-8 rounded-lg shadow-lg bg-base-200 my-20"
        >
            <h2 className="text-3xl font-bold mb-10 text-center">
                Educational Qualification
            </h2>

            <div className="space-y-8">
                <EducationCard delay={0.1}>
                    <div className="flex items-center gap-3 text-xl font-semibold mb-4 text-primary">
                        <FaGraduationCap /> B.Sc. in Computer Science and Engineering
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <FaUniversity className="text-green-600" />
                            Bangladesh University of Business and Technology (BUBT)
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <FaCalendarAlt className="text-indigo-600" />
                            Passing Year: 2021
                        </div>
                        <div className="flex items-center justify-center gap-2">CGPA: 3.26 / 4.00</div>
                    </div>
                </EducationCard>

                <EducationCard delay={0.2}>
                    <div className="flex items-center gap-3 text-xl font-semibold mb-4 text-primary">
                        <FaGraduationCap /> Diploma in Computer Engineering
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <FaUniversity className="text-green-600" />
                            Shariatpur Polytechnic Institute
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <FaCalendarAlt className="text-indigo-600" />
                            Passing Year: 2017
                        </div>
                        <div className="flex items-center justify-center gap-2">CGPA: 3.08 / 4.00</div>
                    </div>
                </EducationCard>

                <EducationCard delay={0.3}>
                    <div className="flex items-center gap-3 text-xl font-semibold mb-4 text-primary">
                        <FaGraduationCap /> Secondary School Certificate (SSC)
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <FaSchool className="text-green-600" />
                            Charmugria Marchant High School
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <FaCalendarAlt className="text-indigo-600" />
                            Passing Year: 2011
                        </div>
                        <div className="flex items-center justify-center gap-2">GPA: 4.42 / 5.00</div>
                    </div>
                </EducationCard>
            </div>
        </div>
    );
};

export default Education;
