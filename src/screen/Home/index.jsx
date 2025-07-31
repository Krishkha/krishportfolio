import React from "react";
import HeroSection from "../hero";
import About from "../about";
import Skills from "../skills";
import EduandExp from "../eduandexp";

const Home = () => {
  return (
    <section className="*:m-0 *:p-0">
      <HeroSection />
      <About />
      <Skills />
      <EduandExp />
    </section>
  );
};

export default Home;
