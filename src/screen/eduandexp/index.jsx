import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  EducationStrings,
  ExperienceStrings,
} from "../../assets/Strings/strings";
import { database } from "../../firebase";
import { get, ref } from "firebase/database";

const EduandExp = () => {
  const [edudata, setEdudata] = useState([]);
  const [expdata, setExpdata] = useState([]);

  useEffect(() => {
    const aboutRef = ref(database, "EducationStrings");
    // console.log("aboutref", aboutRef);

    get(aboutRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEdudata(snapshot.val());
          // console.log("Data from Firebase:", snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []);

  // useEffect(() => {
  //   console.log('dijsniujn',edudata);
    
  // }, [edudata])

  useEffect(() => {
    const aboutRef = ref(database, "ExperienceStrings");
    console.log("aboutref", aboutRef);

    get(aboutRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setExpdata(snapshot.val());
          // console.log("Data from Firebase:", snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Firebase error:", error);
      });
  }, []);

  // useEffect(() => {
  //   console.log('dijsniujn',edudata);
    
  // }, [edudata])
  
  return (
    <section className="px-6 sm:px-10 md:px-16 bg-black text-white ">
      <h1 className="text-3xl font-bold text-center mt-10 ">
        Education & Experience
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-6 py-20">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6 sm:mb-10">
            EDUCATION
          </h2>
          <div className="border-l-4 border-green-500 pl-4 space-y-6">
            {/* {EducationStrings.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C2C2C] hover:bg-[#333] transition-all shadow-lg p-4 sm:p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-green-400 font-semibold">
                  {item.year}
                </p>
                <h3 className="font-bold text-lg mt-1">{item.degree}</h3>
                <p className="text-gray-300 mt-2">From: {item.name}</p>
                <p className="text-gray-400 mt-1">Score: {item.percentage}</p>
              </motion.div>
            ))} */}
            {edudata.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C2C2C] hover:bg-[#333] transition-all shadow-lg p-4 sm:p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-green-400 font-semibold">
                  {item.year}
                </p>
                <h3 className="font-bold text-lg mt-1">{item.degree}</h3>
                <p className="text-gray-300 mt-2">From: {item.name}</p>
                <p className="text-gray-400 mt-1">Score: {item.percentage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-400 mb-6 sm:mb-10">
            EXPERIENCE
          </h2>
          <div className="border-l-4 border-green-500 pl-4 space-y-6">
            {/* {ExperienceStrings.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C2C2C] hover:bg-[#333] transition-all shadow-lg p-4 sm:p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-green-400 font-semibold">
                  {item.duration}
                </p>
                <h3 className="text-lg font-light">{item.Position}</h3>
                <h3 className="font-bold text-lg mt-1">From: {item.name}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </motion.div>
            ))} */}
            {expdata.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C2C2C] hover:bg-[#333] transition-all shadow-lg p-4 sm:p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-green-400 font-semibold">
                  {item.duration}
                </p>
                <h3 className="text-lg font-light">{item.Position}</h3>
                <h3 className="font-bold text-lg mt-1">From: {item.name}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EduandExp;
