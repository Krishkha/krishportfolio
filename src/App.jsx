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
function App() {
  const [infodata, setInfodata] = useState();
  const [socialmeddata, setSocialmeddata] = useState([]);

  const getdata = async () => {
    const inforef = ref(database, "ContactString");
    await get(inforef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setInfodata(snapshot.val());
          // console.log("Data from Firebase:", snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  };


  const getdata2 = async () => {
    const inforef = ref(database, "logosStrings");
    await get(inforef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSocialmeddata(snapshot.val());
          // console.log("Data from Firebase:", snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  };

  useEffect(() => {
    getdata();
    getdata2();
  }, []);

  useEffect(() => {
    // console.log("sakjhbib", infodata); 
    console.log("ascacoijrek", socialmeddata);
  }, [infodata,socialmeddata]);

  return (
    <contaxtInfo.Provider value={{infodata,socialmeddata}}>
      <div className="bg-black">
        <Router>
          <Navbar />
          <div className="w-full h-auto bg-black *:m-0 *:p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/herosection" element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<EduandExp />} />
            </Routes>
          </div>
          <Footer />
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
