import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "FoodNeighbor",
    images: [
      "/FoodNeighbor/1.jpg",
      "/FoodNeighbor/2.jpg",
      "/FoodNeighbor/3.jpg",
      "/FoodNeighbor/4.jpg",
      "/FoodNeighbor/5.jpg",
      "/FoodNeighbor/6.jpg",
      "/FoodNeighbor/7.jpg",
      "/FoodNeighbor/8.jpg",
    
    ],
    techStack: ["React", "Firebase", "Tailwind CSS","DaisyUi", "Node.js", "ExpressJs","Mongodb"],
    description:
      "A web app to share food with needy people, featuring request and donation management.",
    shortDesc:
      "An application for food sharing with CRUD functionalities and secure user management.",
    liveLink: "https://foodsharing-ce4a2.web.app/",
    githubLink: "https://github.com/asiburcse/Food-Sharing",
    challenges:
      "Managing secure user authentication and real-time updates was challenging.",
    futurePlans:
      "Adding a mobile app version and real-time chat for donors and receivers.",
  },
  {
    id: 2,
    name: "FreelanceNation",
    images: [
      "/FreelanceNation/1.jpg",
      "/FreelanceNation/2.jpg",
      "/FreelanceNation/3.jpg",
      "/FreelanceNation/4.jpg",
      "/FreelanceNation/5.jpg",
      "/FreelanceNation/6.jpg",
      "/FreelanceNation/7.jpg",
      "/FreelanceNation/8.jpg",
      "/FreelanceNation/9.jpg",
      "/FreelanceNation/10.jpg",
      "/FreelanceNation/11.jpg",
    ],
    techStack: ["React","Firebase", "Node.js", "Express", "MongoDB", "Tailwind CSS","DaisyUi","Mongodb"],
    description:
      "A freelancer platform to post jobs, manage proposals and hire professionals.",
    shortDesc: "Full-stack freelancer marketplace with job posting and bidding.",
    liveLink: "https://react-password-auth.web.app/",
    githubLink: "https://github.com/asiburcse/FreelanceNation",
    challenges:
      "Implementing secure payments and real-time notifications was complex.",
    futurePlans:
      "Add advanced filtering, reviews, and payment integration.",
  },
  {
    id: 3,
    name: "EventNest",
    images: [
      "/EventNest/1.jpg",
      "/EventNest/2.jpg",
      "/EventNest/3.jpg",
      "/EventNest/4.jpg",
      "/EventNest/5.jpg",
      "/EventNest/6.jpg",
      "/EventNest/7.jpg",
      
  
    ],
    techStack: ["React", "Firebase", "Tailwind CSS","DaisyUi"],
    description:
      "A local event management platform to browse, RSVP, and get updates on events.",
    shortDesc: "Event listing and management platform with user feedback system.",
    liveLink: "https://eventnest.netlify.app/",
    githubLink: "https://github.com/asiburcse/EventNest",
    challenges:
      "Ensuring event data consistency and handling user registrations smoothly.",
    futurePlans:
      "Add calendar sync and ticketing features.",
  },
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
    <div className=" w-11/12 mx-auto ">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row bg-base-300 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Left side: Image slider */}
            <div className="md:w-2/3">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                className="lg:max-h-[80vh] md:h-full"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${idx + 1}`}
                      className="w-full max-h-[80vh] md:h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right side: Info and View More */}
            <div className="md:w-1/3 p-6 flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <div>
                <h4 className="font-semibold mb-2">Technology Stack:</h4>
                <ul className="list-disc list-inside ">
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <button
                className="btn btn-primary w-full mt-4"
                onClick={() => setSelectedProject(project)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            ref={modalRef}
            className="bg-base-300 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-xl"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.name}</h3>

            {/* Modal Image slider */}
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

            <p className="mb-4">{selectedProject.description}</p>

            <div className="mb-4">
              <h4 className="font-semibold">Technology Stack:</h4>
              <ul className="list-disc list-inside">
                {selectedProject.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>

            <p className="mb-2">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <p className="mb-4">
              <strong>Future Plans:</strong> {selectedProject.futurePlans}
            </p>

            <div className="flex gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-success flex-grow"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-secondary flex-grow"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
