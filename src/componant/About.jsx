import { FaCode, FaBriefcase, FaPalette, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className=" p-6 bg-base-100 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="space-y-10">
        {/* Programming Journey */}
        <section>
          <div className="flex items-center space-x-3 mb-2">
            <FaCode className="text-2xl text-blue-600 flex-shrink-0" />
            <h3 className="text-xl font-semibold">My Programming Journey</h3>
          </div>
          <p>
            I started my programming journey exploring various technologies including HTML, CSS, and JavaScript. Over the years, I specialized in full-stack development using React, Node.js, and MongoDB, continuously learning and adapting to new frameworks and tools to build efficient and scalable web applications.
          </p>
        </section>

        {/* Type of Work */}
        <section>
          <div className="flex items-center space-x-3 mb-2">
            <FaBriefcase className="text-2xl text-green-600 flex-shrink-0" />
            <h3 className="text-xl font-semibold">The Type of Work I Enjoy</h3>
          </div>
          <p>
            I enjoy building clean, user-friendly interfaces and developing robust backend APIs. I find satisfaction in solving complex problems, optimizing performance, and contributing to collaborative projects. My learning journey with Programming Hero has helped me grow both technically and professionally.
          </p>
        </section>

        {/* Hobbies & Interests */}
        <section>
          <div className="flex items-center space-x-3 mb-2">
            <FaPalette className="text-2xl text-purple-600 flex-shrink-0" />
            <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
          </div>
          <p>
            Outside of programming, I enjoy playing football and cricket, painting, swimming, and traveling. These activities help me refresh and stay creative.
          </p>
        </section>

        {/* Personality */}
        <section>
          <div className="flex items-center space-x-3 mb-2">
            <FaSmile className="text-2xl text-yellow-500 flex-shrink-0" />
            <h3 className="text-xl font-semibold">My Personality</h3>
          </div>
          <p>
            I am a dedicated and sincere individual who values continuous learning, teamwork, and creativity. I believe in maintaining a positive attitude and strive to bring enthusiasm and dedication to every project I work on.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
