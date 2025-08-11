import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../../firebase";
import { useLocation } from "react-router-dom";
import PrimaryBtn from "../../components/button";

export default function ContactForm() {
  const location = useLocation();
  const { title } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");
    try {
      const hireRef = ref(database, "hireRequests");
      await push(hireRef, formData);

      setFormData({ name: "", email: "", message: "" });
      setStatus("✅ Your request has been submitted!");
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div className="w-full p-6 bg-black text-white rounded-xl shadow-lg flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mt-20 mb-10 text-center animate-fadeIn">
        {title || "Contact Me"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg w-full animate-slideUp"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[120px] transition duration-300"
          required
        ></textarea>

        {/* Button */}
        <div className="w-full flex justify-center mb-20">
          <PrimaryBtn
            btnText="Submit"
            onclick={handleSubmit}
            loading={isLoading}
          />
        </div>
      </form>

      {/* Status Message */}
      {status && (
        <p
          className={`text-center mt-6 text-sm px-4 py-2 rounded-lg transition-all duration-500 ${
            status.startsWith("✅")
              ? "bg-green-600 text-white animate-fadeIn"
              : "bg-red-600 text-white animate-fadeIn"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}
