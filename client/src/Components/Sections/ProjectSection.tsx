import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

function ProjectSection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0, duration: 1 }}
        className="mt-[12em]"
        id="projects"
      >
        <div className="w-[1024px] mx-auto max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
          <div className="flex items-center justify-center flex-col gap-2">
            <h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
              Projects
            </h4>
            <h2 className="flex items-center gap-2 text-2xl">
              <span>My</span>
              <span className="text-green-cool">Projects</span>
            </h2>
            <p className="w-[300px] text-center text-[1rem] text-slate-500">
              Discover a curated selection of projects that exemplify my
              commitment to excellence and innovation in backend and fullstack
              development
            </p>
          </div>

          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                680: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
            >
              <SwiperSlide>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/assets/project-2.png')",
                  }}
                  className="bg-no-repeat bg-center bg-cover p-8 rounded-sm h-[300px] relative border border-slate-700"
                ></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/assets/project-3.png')",
                  }}
                  className="bg-no-repeat bg-center bg-cover p-8 rounded-sm h-[300px] relative border border-slate-700"
                ></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default ProjectSection;
