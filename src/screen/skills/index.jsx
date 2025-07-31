import React from "react";
import { motion } from "framer-motion";
import { Skillsstrings } from "../../assets/Strings/strings";

const Skills = () => {
  return (
    <div className="w-full mt-20 text-white px-4 md:px-16 ">
      <h1 className="text-3xl font-bold text-center my-15 ">Skills</h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {Skillsstrings.language.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1E1E1E] text-white w-36  sm:w-44 md:w-52 p-5 rounded-2xl 
              border border-gray-700 hover:border-orange-500 
              shadow-md transition-all duration-300 flex flex-col items-center
              hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,115,0,0.3)]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-12 h-12 sm:w-16 sm:h-16 mb-4 object-contain"
            />
            <h2 className="text-base sm:text-lg font-semibold text-center">
              {item.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
