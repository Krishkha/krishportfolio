import React from "react";
import { motion } from "framer-motion";

import Logo from "../../assets/images/Logo";
import { Aboutstring } from "../../assets/Strings/strings";
import PrimaryBtn from "../../components/button";
import { handleDownload } from "../hero";

const About = () => {
  return (
    <div className="w-full bg-black px-6 sm:px-10 py-16">
      <h1 className=" text-white  text-3xl text-center font-semibold">
        {Aboutstring.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center sm:mt-15 gap-10">
        {/* Avatar Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="md:w-65 md:flex sm:w-50 md:h-80 md:p-10 sm:h-65 sm:mt-20  bg-[#3b3b3b4a] rounded-t-full relative overflow-visible shadow-[0_-12px_400px_rgba(100,116,139,0.4),0_70px_500px_rgba(71,85,105,0.3)]">
            <img
              src={Logo.avatar}
              alt="Avatar"
              className="w-40 sm:w-35 md:w-45 h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
              // style={{
              //   clipPath: "ellipse(100% 85% at 50% 15%)",
              // }}
            />
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          className="flex flex-col justify-center gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="Roboto_Mono text-white text-lg font-extralight  leading-relaxed md:text-[0.9rem] sm:text-[0.8rem] lg:text-lg ">
            {Aboutstring.desc}
          </p>
          <div className="sm:self-center md:self-auto sm:text-center">
            <PrimaryBtn btnText={"Download CV"} onclick={handleDownload} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
