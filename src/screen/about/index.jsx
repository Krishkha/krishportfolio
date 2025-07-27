import React from "react";
import { motion } from "framer-motion";

import Logo from "../../assets/images/Logo";
import { Aboutstring } from "../../assets/Strings/strings";
import PrimaryBtn from "../../components/button";
import { handleDownload } from "../hero";

const About = () => {
  return (
    <div className="w-full bg-black px-6 md:px-20 py-16">
      <h1 className="text-white text-3xl text-center font-semibold">
        {Aboutstring.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-16 gap-10">
        {/* Avatar Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-60 h-80 bg-[#3b3b3b4a] rounded-t-full relative overflow-visible shadow-[0_-12px_400px_rgba(100,116,139,0.4),0_25px_400px_rgba(71,85,105,0.3)]">
            <img
              src={Logo.avatar}
              alt="Avatar"
              className="w-44 h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
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
          <p className="text-white text-lg font-light leading-relaxed">
            {Aboutstring.desc}
          </p>
          <div>
            <PrimaryBtn btnText={"Download CV"} onclick={handleDownload} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
