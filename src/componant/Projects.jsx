import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "FlatManage",
    images: [
      "https://i.ibb.co/YFt9XhDG/2.jpg",
      "https://i.ibb.co/23b2McsX/3.jpg",
      "https://i.ibb.co/B5RmL2tR/4.jpg",
      "https://i.ibb.co/v6yGcH5r/5.jpg",
      "https://i.ibb.co/ZRQQVc4J/6.jpg",
      "https://i.ibb.co/VWk7JQXc/7.jpg",
      "https://i.ibb.co/4gZs9r9j/8.jpg",
      "https://i.ibb.co/6Lwc7SM/9.jpg",
      "https://i.ibb.co/V0908RTP/10.jpg",
      "https://i.ibb.co/YF9gy3zd/11.jpg",
      "https://i.ibb.co/Q3ztm3zm/12.jpg",
      "https://i.ibb.co/N6dmPX5Z/13.jpg",
      "https://i.ibb.co/ycb2XNjt/14.jpg",
      "https://i.ibb.co/6cycRJkG/15.jpg",
      "https://i.ibb.co/35QhBjFF/16.jpg",
      "https://i.ibb.co/zWm4qdfc/17.jpg",
      "https://i.ibb.co/BKrXv9Xs/18.jpg",
      "https://i.ibb.co/vvKpWP6h/1.jpg",
   
    ],
    techStack: ["React", "Firebase", "Tailwind CSS","DaisyUi", "Node.js", "ExpressJs","Mongodb","Jwt","Stripe"],
    description:
      "ManageFlat is a full-featured apartment and building management system designed to simplify administrative tasks for building owners and tenants. Built with the MERN Stack, this web application allows seamless management of apartment listings, member agreements, rent payments, and community announcements, all in one place.The system features role-based dashboards for Admins, Members, and Users. Admins can approve membership requests, manage announcements and coupons, and monitor apartment availability and payment statistics through a real-time dashboard. Members can securely make monthly rent payments using Stripe integration, apply discount coupons, and view payment history. Users can browse building announcements and request apartment agreements.The platform also includes authentication using Firebase, JWT-based API protection, responsive design with Tailwind CSS and DaisyUI, and support for dark/light themes. It incorporates modern libraries such as React Query for efficient data fetching, and Leaflet.js for interactive location maps.",
    shortDesc:
      "ManageFlat is a role-based apartment management system built with the MERN stack. It allows admins to manage members, apartments, coupons, and announcements, while members can pay rent using Stripe, apply discount coupons, and view payment history. The platform includes secure authentication, real-time dashboards, and responsive design with dark/light theme support.",
    liveLink: "https://manageflat-8f1f4.web.app/",
    githubLink: "https://github.com/asiburrahman/FlatManage-Fontend",
    challenges:
      "During the development of the ManageFlat project, I encountered several challenges that helped deepen my technical skills and problem-solving ability. Implementing role-based dashboards for users, members, and admins required precise control of route protection, user roles, and conditional UI rendering. Integrating Stripe for secure rent payments—along with applying coupon-based discounts dynamically—demanded a careful approach to data validation and transaction accuracy. Managing Firebase token verification on both the frontend and backend proved complex, especially in handling expired or invalid tokens gracefully. Ensuring real-time synchronization of user states, such as agreement approvals or coupon updates, also required consistent state management and effective backend queries. Additionally, building a responsive admin dashboard that could display analytics like apartment availability, user count, and occupancy rates presented significant UI/UX challenges.",
    futurePlans:
      "Looking forward, I plan to enhance the system by introducing push notifications to alert users about new announcements, payment updates, and agreement status changes. A scheduled rent reminder feature is also in the pipeline to help members stay informed about due dates. For better administrative efficiency, I aim to implement downloadable monthly reports that include payment history, user activity logs, and occupancy trends. Furthermore, I intend to add advanced filtering and search functionality for apartments based on rent, availability, and location. To improve accessibility, future updates will include multi-language support (including Bangla), and eventually, I plan to develop a mobile version of ManageFlat using React Native for broader reach and ease of use.",
  },
  {
    id: 2,
    name: "FoodNeighbor",
    images: [
      "https://i.ibb.co/Y72mTKJm/1.jpg",
      "https://i.ibb.co/WpMzMZYx/2.jpg",
      "https://i.ibb.co/PZDT1yX1/3.jpg",
      "https://i.ibb.co/kvYnGKM/4.jpg",
      "https://i.ibb.co/pBG74bCg/5.jpg",
      "https://i.ibb.co/JFpbBP1G/6.jpg",
      "https://i.ibb.co/svWsChHZ/7.jpg",
      "https://i.ibb.co/nMdrg4m4/8.jpg",
    
    ],
    techStack: ["React", "Firebase", "Tailwind CSS","DaisyUi", "Node.js", "ExpressJs","Mongodb"],
    description:
      "A web app to share food with needy people, featuring request and donation management.",
    shortDesc:
      "An application for food sharing with CRUD functionalities and secure user management.",
    liveLink: "https://foodsharing-ce4a2.web.app/",
    githubLink: "https://github.com/asiburrahman/foodNeighbor-fontend",
    challenges:
      "Managing secure user authentication and real-time updates was challenging.",
    futurePlans:
      "Adding a mobile app version and real-time chat for donors and receivers.",
  },
  {
    id: 3,
    name: "FreelanceNation",
    images: [
      "https://i.ibb.co/60yTPMhy/1.jpg",
      "https://i.ibb.co/WWVhXrx8/2.jpg",
      "https://i.ibb.co/8gsSGbLF/3.jpg",
      "https://i.ibb.co/S4JCBS0X/4.jpg",
      "https://i.ibb.co/k2H8y44q/5.jpg",
      "https://i.ibb.co/5x621Q66/6.jpg",
      "https://i.ibb.co/PvzpChvL/7.jpg",
      "https://i.ibb.co/4RWrtLbt/8.jpg",
      "https://i.ibb.co/nMGDXNrC/9.jpg",
      "https://i.ibb.co/DDW1Q8DR/10.jpg",
      "https://i.ibb.co/BV99rfYQ/11.jpg",
    ],
    techStack: ["React","Firebase", "Node.js", "Express", "MongoDB", "Tailwind CSS","DaisyUi","Mongodb"],
    description:
      "A freelancer platform to post jobs, manage proposals and hire professionals.",
    shortDesc: "Full-stack freelancer marketplace with job posting and bidding.",
    liveLink: "https://react-password-auth.web.app/",
    githubLink: "https://github.com/asiburrahman/freelance-fontend",
    challenges:
      "Implementing secure payments and real-time notifications was complex.",
    futurePlans:
      "Add advanced filtering, reviews, and payment integration.",
  },
  // {
  //   id: 4,
  //   name: "EventNest",
  //   images: [
  //     "https://i.ibb.co/MxLd2phk/4.jpg",
  //     "https://i.ibb.co/zVj1qhxV/5.jpg",
  //     "https://i.ibb.co/BVYMp35p/6.jpg",
  //     "https://i.ibb.co/fz4BjW1D/7.jpg",
  //     "https://i.ibb.co/ksyJ645F/1.jpg",
  //     "https://i.ibb.co/bMz4ynhm/2.jpg",
  //     "https://i.ibb.co/YTp2f2KZ/3.jpg",
      
  
  //   ],
  //   techStack: ["React", "Firebase", "Tailwind CSS","DaisyUi"],
  //   description:
  //     "A local event management platform to browse, RSVP, and get updates on events.",
  //   shortDesc: "Event listing and management platform with user feedback system.",
  //   liveLink: "https://eventnest.netlify.app/",
  //   githubLink: "https://github.com/asiburcse/EventNest",
  //   challenges:
  //     "Ensuring event data consistency and handling user registrations smoothly.",
  //   futurePlans:
  //     "Add calendar sync and ticketing features.",
  // },
];
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedProject(null);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <motion.div
    id="project"
      className="w-11/12 mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className=" rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: Slider */}
              <div>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  className="h-full"
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={project.name + " screenshot " + (idx + 1)}
                        className="object-cover w-full h-full lg:rounded-xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right: Project Info */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm mb-4">{project.shortDesc}</p>
                  <h4 className="font-medium mb-2">Technologies:</h4>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    {project.techStack.map((tech, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-primary text-white rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn  btn-primary  mt-6"
                  onClick={() => setSelectedProject(project)}
                >
                  View More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-base-100 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <button
                className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-xl"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="h-64 mb-4 rounded"
              >
                {selectedProject.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${selectedProject.name} screenshot ${idx + 1}`}
                      className="w-full h-64 object-cover rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <p className="mb-4 text-sm">{selectedProject.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold">Technology Stack:</h4>
                <ul className="flex flex-wrap gap-2 text-sm mt-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <li
                      key={idx}
                      className="px-3 py-1 bg-base-300 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-2 text-sm">
                <strong>Challenges:</strong> {selectedProject.challenges}
              </p>
              <p className="mb-4 text-sm">
                <strong>Future Plans:</strong> {selectedProject.futurePlans}
              </p>

              <div className="flex flex-col md:flex-col gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success w-full"
                >
                  Live Project
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
