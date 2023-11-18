import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import avatar from "../assets/avatar.png";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import ReactParticle from "./ReactParticle";
import { MdArrowOutward } from "react-icons/md";
const Hero = () => {
  return (
    <section className=" w-full h-[87vh] flex items-center mb-[-100px]">
      <div
        className={`w-full px-10 flex lg:flex-row xs:flex-col-reverse justify-around items-center md:mt-35`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}
        <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]"> Dhruv</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop awesome web applications{" "}
            <br className="sm:block hidden" /> and user interfaces
          </p>

          <div
            className="cursor-pointer z-50"
            onClick={() => window.open("https://bit.ly/3RV9VZ9", "_blank")}
          >
            <button className="mt-5 py-3 px-5 border-white-100 border-[2px] rounded-lg flex items-center gap-2">
              Resume
              <MdArrowOutward />
            </button>
          </div>
        </motion.div>
        <ReactParticle />
        <div className="relative group ">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-full blur opacity-100"></div>

            <div className="relative p-3 bg-white rounded-full leading-none flex items-top justify-center">
              <motion.img
                src={avatar}
                alt="Hero Image"
                className="xs:w-[100px] xs:h-[100px] md:w-[200px] md:h-[200px] object-contain rounded-full"
                whileHover={{ scale: 1.1, rotate: 360 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");

{
  /* <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-full border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */
}
