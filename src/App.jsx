// App.js
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./screen/hero";
import Navbar from "./components/Navbar";
import About from "./screen/about";
import Skills from "./screen/skills";
import EduandExp from "./screen/eduandexp";
import Footer from "./screen/footer";
import Home from "./screen/Home";
import { contaxtInfo } from "./contaxt/contaxt";
import { get, ref } from "firebase/database";
import { database } from "./firebase";
import ContactForm from "./screen/contactForm";
import Formdata from "./admin/formdata";

function App() {
  const [infodata, setInfodata] = useState(null);
  const [socialmeddata, setSocialmeddata] = useState(null);
  const [loading, setLoading] = useState(true);

  const getdata = async () => {
    const inforef = ref(database, "ContactString");
    const snapshot = await get(inforef);
    if (snapshot.exists()) {
      setInfodata(snapshot.val());
    }
  };

  const getdata2 = async () => {
    const inforef = ref(database, "logosStrings");
    const snapshot = await get(inforef);
    if (snapshot.exists()) {
      setSocialmeddata(snapshot.val());
    }
  };

  useEffect(() => {
    Promise.all([getdata(), getdata2()]).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white flex justify-center items-center min-h-screen">
        <div className="loader border-4 border-gray-300 border-t-orange-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <contaxtInfo.Provider value={{ infodata, socialmeddata }}>
      <div className="bg-black">
        <Router>
          <Navbar />
          <div className="w-full h-auto bg-black *:m-0 *:p-0">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route path="/herosection" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<EduandExp />} />
              <Route
                path="/contact"
                element={
                  <>
                    <ContactForm />
                    <Footer />
                  </>
                }
              />
              <Route path="/formdata" element={<Formdata />} />
            </Routes>
          </div>
        </Router>
      </div>
    </contaxtInfo.Provider>
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
