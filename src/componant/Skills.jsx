import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaTools, FaFire, FaWind } from "react-icons/fa";
import 'swiper/css';

const Skills = () => (
  <div id="skills" className="p-10 bg-base-200 scroll-mt-16 w-11/12 mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
    <Swiper speed={2000}
      modules={[Autoplay]}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      spaceBetween={30}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      loop={true}
    >
      <SwiperSlide className="text-center">
        <FaReact className="text-5xl text-blue-500 mx-auto mb-2" />
        <p className="font-semibold">React</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-2" />
        <p className="font-semibold">HTML5</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaCss3Alt className="text-5xl text-blue-700 mx-auto mb-2" />
        <p className="font-semibold">CSS3</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaJs className="text-5xl text-yellow-500 mx-auto mb-2" />
        <p className="font-semibold">JavaScript</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaNodeJs className="text-5xl text-green-600 mx-auto mb-2" />
        <p className="font-semibold">Node.js</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaDatabase className="text-5xl text-purple-600 mx-auto mb-2" />
        <p className="font-semibold">MongoDB</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaFire className="text-5xl text-red-500 mx-auto mb-2" />
        <p className="font-semibold">Firebase</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaWind className="text-5xl text-cyan-500 mx-auto mb-2" />
        <p className="font-semibold">Tailwind CSS</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <FaTools className="text-5xl text-gray-500 mx-auto mb-2" />
        <p className="font-semibold">DaisyUI</p>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Skills;
