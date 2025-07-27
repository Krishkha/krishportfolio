import React from "react";
import { motion } from "framer-motion";

import Logobtn from "../../components/Logobtn";
import PrimaryBtn from "../../components/button";
import SecondBtn from "../../components/SecondBtn";
import Logo from "../../assets/images/Logo";
import CV from "../../assets/KHATIKAR_KRISH_RESUME.pdf";
import { ContactString, logosStrings } from "../../assets/Strings/strings";

export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "Krish's_resume.pdf";
  link.click();
};

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mt-5">
            <p className="text-neutral-500 text-xl  font-[Intel_One_Mono]">Hi, My name is</p>
            <p className="Roboto_Mono text-neutral-400 text-3xl sm:text-4xl font-bold">
              {ContactString.name}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-neutral-500 text-xl font-[Intel_One_Mono]">I am a</p>
            <h1 className="Roboto_Mono text-4xl sm:text-5xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">
              {ContactString.Postion}
            </h1>
          </div>

          <div className="flex gap-4 mb-6 mt-10 flex-wrap">
            {logosStrings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Logobtn item={item} />
              </motion.div>
            ))}
          </div>

          <div className="flex gap-5 my-6 flex-wrap">
            <PrimaryBtn btnText={"Hire Me"} />
            <SecondBtn btnText={"Download CV"} onclick={handleDownload} />
          </div>

          <div className="flex bg-[#66656533] rounded-xl overflow-hidden w-100 justify-between">
            <div className="w-50 px-4 py-4">
              <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                6
              </p>
              <p className="text-white text-lg">Live Projects</p>
            </div>
            <div className="w-0.5 bg-white my-2" />
            <div className="w-50 px-4 py-4">
              <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                10 Months
              </p>
              <p className="text-white text-lg">Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center items-end"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-60 h-80 bg-[#3b3b3b4a] rounded-t-full relative overflow-visible shadow-[0_-12px_400px_rgba(100,116,139,0.4),0_70px_500px_rgba(71,85,105,0.3)]">
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
      </div>
    </div>
  );
};

export default HeroSection;
