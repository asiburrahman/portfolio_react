import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaPalette, FaSmile } from "react-icons/fa";
import myPhoto from '/A.jpg';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: i * 0.3,
    },
  }),
};

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="p-6  w-11/12 mx-auto "
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left side: About Details */}
        <div className="space-y-10">
          {[{
            icon: <FaCode className="text-2xl text-blue-600 flex-shrink-0" />,
            title: "My Programming Journey",
            content: `I started my programming journey exploring various technologies including HTML, CSS, and JavaScript. Over the years, I specialized in full-stack development using React, Node.js, and MongoDB, continuously learning and adapting to new frameworks and tools to build efficient and scalable web applications.`,
          },
          {
            icon: <FaBriefcase className="text-2xl text-green-600 flex-shrink-0" />,
            title: "The Type of Work I Enjoy",
            content: `I enjoy building clean, user-friendly interfaces and developing robust backend APIs. I find satisfaction in solving complex problems, optimizing performance, and contributing to collaborative projects. My learning journey with Programming Hero has helped me grow both technically and professionally.`,
          },
          {
            icon: <FaPalette className="text-2xl text-purple-600 flex-shrink-0" />,
            title: "Hobbies & Interests",
            content: `Outside of programming, I enjoy playing football and cricket, painting, swimming, and traveling. These activities help me refresh and stay creative.`,
          },
          {
            icon: <FaSmile className="text-2xl text-yellow-500 flex-shrink-0" />,
            title: "My Personality",
            content: `I am a dedicated and sincere individual who values continuous learning, teamwork, and creativity. I believe in maintaining a positive attitude and strive to bring enthusiasm and dedication to every project I work on.`,
          }].map((section, index) => (
            <motion.section
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-2">
                {section.icon}
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <p>{section.content}</p>
            </motion.section>
          ))}
        </div>

        {/* Right side: Photo Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={myPhoto}
            alt="Asibur Rahman"
            className="w-80 h-80 md:w-96 md:h-96 rounded-xl object-cover shadow-xl border-4 border-primary"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
