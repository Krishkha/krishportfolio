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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Validation helper
  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validateForm()) return;

    setIsLoading(true);
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
      setTimeout(() => setStatus(""), 3000);
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
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 bg-gray-800 border ${
              errors.name ? "border-red-500" : "border-gray-700"
            } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 bg-gray-800 border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 bg-gray-800 border ${
              errors.message ? "border-red-500" : "border-gray-700"
            } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[120px] transition duration-300`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <div className="w-full flex justify-center mb-20">
          <PrimaryBtn btnText="Submit" loading={isLoading} type="submit" />
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
