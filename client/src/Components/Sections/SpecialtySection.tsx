import EmailSpecialtyImg from "../../assets/email_specialty.png";
import StoreFrontImg from "../../assets/storefront.png";
import QueryStatsImg from "../../assets/query_stats.png";
import Specialty from "../Specialty";
import { motion } from "framer-motion";

const specialties = [
  {
    id: 1,
    img: EmailSpecialtyImg,
    specialty: "Frontend Development",
    description:
      "Elevate your digital presence with my frontend development services, where aesthetics meet functionality to create captivating user experiences. From crafting pixel-perfect designs to implementing responsive layouts.",
  },
  {
    id: 2,
    img: StoreFrontImg,
    specialty: "Backend Development",
    description:
      " From architecting scalable databases to crafting efficient API solutions, I specialize in building the robust foundations upon which your applications thrive. With a focus on security, scalability, and seamless integration, I empower your projects to exceed expectations and scale effortlessly",
  },
  {
    id: 3,
    img: QueryStatsImg,
    specialty: "Fullstack Development",
    description:
      "Experience the best of both worlds with my fullstack development services. From crafting captivating user interfaces to building robust backend architectures, I specialize in delivering end-to-end solutions that exceed expectations.",
  },
];

function SpecialtySection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0, duration: 1 }}
        className="mt-[12em]"
        id="specialty"
      >
        <div className="w-[1024px] mx-auto max-[1070px]:w-[initial] max-[1070px]:mx-[1.5em]">
          <div className="flex items-center justify-center flex-col gap-2">
            <h4 className="uppercase text-[0.7rem] text-slate-500 tracking-widest">
              Specialty
            </h4>
            <h2 className="flex items-center gap-2 text-2xl">
              <span>My</span>
              <span className="text-green-cool">Specialties</span>
            </h2>
            <p className="w-[300px] text-center text-[1rem] text-slate-500">
              Let me showcase my specialized skills and areas of expertise,
              meticulously honed over years of hands-on experience and
              continuous learning.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[570px]:grid-cols-1">
            {specialties.map((specialty) => {
              return (
                <Specialty
                  key={specialty.id}
                  img={specialty.img}
                  specialty={specialty.specialty}
                  description={specialty.description}
                />
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default SpecialtySection;
