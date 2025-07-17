import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaSchool } from 'react-icons/fa';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  hiddenBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, } }
};

const EducationCard = ({ variantType, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Decide which hidden variant to use based on variantType prop
  let hiddenVariant = 'hiddenLeft';
  if (variantType === 'right') hiddenVariant = 'hiddenRight';
  else if (variantType === 'bottom') hiddenVariant = 'hiddenBottom';

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariant}
      animate={controls}
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      className=" bg-white text-black p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
    >
      {children}
    </motion.div>
  );
};

const Education = () => {
  return (
    <div
      id="education"
      className=" w-11/12 mx-auto py-10 px-4 md:px-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-10 text-center ">
        Educational Qualification
      </h2>

      <div className="space-y-8">
        <EducationCard variantType="left">
          <div className="flex items-center gap-3 text-xl font-semibold mb-4 text-primary">
            <FaGraduationCap /> B.Sc. in Computer Science and Engineering
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm ">
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

        <EducationCard variantType="right">
          <div className="flex items-center gap-3 text-xl font-semibold mb-4 text-primary">
            <FaGraduationCap /> Diploma in Computer Engineering
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm ">
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

        <EducationCard variantType="bottom"   >
          <div className="flex items-center gap-3 text-xl font-semibold mb-4 text-primary">
            <FaGraduationCap /> Secondary School Certificate (SSC)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-end text-sm ">
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
