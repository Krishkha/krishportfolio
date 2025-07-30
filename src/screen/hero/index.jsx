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
    <div className="bg-black text-white px-4 py-14 sm:px-10 sm:py-0 lg:px-20">
  <div className="flex flex-col-reverse items-center gap-10 mt-10 sm:flex-row sm:justify-center md:justify-between md:px-20">
    
    {/* Left side */}
    <motion.div
      className="w-full flex flex-col items-center md:items-start"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Intro */}
      <div className="mt-5 text-center md:text-left">
        <p className="text-neutral-500 text-lg font-[Intel_One_Mono]">
          Hi, My name is
        </p>
        <p className="Roboto_Mono text-neutral-400 text-2xl sm:text-4xl font-bold">
          {ContactString.name}
        </p>
      </div>

      {/* Position */}
      <div className="mt-4 text-center md:text-left">
        <p className="text-neutral-500 text-lg font-[Intel_One_Mono]">
          I am a
        </p>
        <h1 className="Roboto_Mono text-3xl sm:text-5xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold">
          {ContactString.Postion}
        </h1>
      </div>

      {/* Logo buttons */}
      <div className="flex gap-4 mb-6 mt-8 flex-wrap justify-center md:justify-start">
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

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-5 my-6">
        <PrimaryBtn btnText={"Hire Me"} />
        <SecondBtn btnText={"Download CV"} onclick={handleDownload} />
      </div>

      {/* Stats */}
      <div className="flex bg-[#66656533] rounded-xl overflow-hidden w-full max-w-md mx-auto md:mx-0 justify-between mt-6">
        <div className="w-1/2 px-4 py-4 text-center">
          <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            6
          </p>
          <p className="text-white text-base sm:text-lg">Live Projects</p>
        </div>
        <div className="w-0.5 bg-white my-2" />
        <div className="w-1/2 px-4 py-4 text-center">
          <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            10 Months
          </p>
          <p className="text-white text-base sm:text-lg">Experience</p>
        </div>
      </div>
    </motion.div>

    {/* Right side (Avatar) */}
    <motion.div
      className="hidden sm:flex justify-center items-end"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-52 h-52 sm:w-60 sm:h-64 md:w-72 md:h-80 bg-[#3b3b3b4a] rounded-t-full relative overflow-visible shadow-[0_-12px_400px_rgba(100,116,139,0.4),0_70px_500px_rgba(71,85,105,0.3)]">
        <img
          src={Logo.avatar}
          alt="Avatar"
          className="w-36 sm:w-40 md:w-48 h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </motion.div>
  </div>
</div>
  );
};

export default HeroSection;
