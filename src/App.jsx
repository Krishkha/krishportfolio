// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./screen/hero";
import Navbar from "./components/Navbar";
import About from "./screen/about";
import Skills from "./screen/skills";
import EduandExp from "./screen/eduandexp";
import Footer from "./screen/footer";
import Home from "./screen/Home";

function App() {
  return (
    <div className="bg-black ">
      <Router>
        <Navbar />
        <div className="w-full h-auto bg-black px-25">
          <Routes>
            <Route path="/krishportfolio" element={<Home />} />
            <Route path="/herosection" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<EduandExp />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// import React from "react";
// import HeroSection from "./screen/hero";
// import Navbar from "./components/Navbar";
// import About from "./screen/about";
// import Skills from "./screen/skills";
// import EduandExp from "./screen/eduandexp";
// import Footer from "./screen/footer";

// const App = () => {
//   return (
//     <div className="w-full h-auto bg-black ">
//       <Navbar/>
//       <div className="w-full h-auto bg-black px-25">
//         <HeroSection />
//         <About />
//         <Skills />
//         <EduandExp />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default App;
