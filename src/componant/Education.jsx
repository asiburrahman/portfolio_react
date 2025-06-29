import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const Education = () => {
    return (
        <div className=" bg-base-100 animate-fade-in w-11/12 mx-auto" id="education">
            <h2 className="text-3xl font-bold mb-8 text-center">Educational Qualification</h2>
            <div className="space-y-6">
                {/* B.Sc. in CSE */}
                <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center gap-3 text-xl font-semibold mb-2">
                        <FaGraduationCap className="text-blue-600" /> B.Sc. in Computer Science and Engineering
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                        <div className="flex items-center  gap-2"><FaUniversity className="text-green-600" /> Bangladesh University of Business and Technology (BUBT)</div>
                        <div className="flex items-center justify-center gap-2"><FaCalendarAlt className="text-indigo-600" /> Passing Year: 2021</div>
                        <div className="flex items-center justify-center gap-2">CGPA: 3.26 / 4.00</div>
                    </div>
                </div>

                {/* Diploma */}
                <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center gap-3 text-xl font-semibold mb-2">
                        <FaGraduationCap className="text-blue-600" /> Diploma in Computer Engineering
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm ">
                        <div className="flex items-center  gap-2"><FaUniversity className="text-green-600" /> Shariatpur Polytechnic Institute</div>
                        <div className="flex items-center justify-center gap-2"><FaCalendarAlt className="text-indigo-600" /> Passing Year: 2017</div>
                        <div className="flex items-center justify-center gap-2">CGPA: 3.08 / 4.00</div>
                    </div>
                </div>

                {/* SSC */}
                <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex items-center gap-3 text-xl font-semibold mb-2">
                        <FaGraduationCap className="text-blue-600" /> Secondary School Certificate (SSC)
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-end text-sm ">
                        <div className="flex items-center  gap-2"><FaSchool className="text-green-600" /> Charmugria Marchant High School</div>
                        <div className="flex items-center justify-center gap-2"><FaCalendarAlt className="text-indigo-600" /> Passing Year: 2011</div>
                        <div className="flex items-center justify-center gap-2">GPA: 4.42 / 5.00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;

