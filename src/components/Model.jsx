import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { ref, push } from "firebase/database";
import { useLocation } from "react-router-dom";
import { database } from "../firebase";
import PrimaryBtn from "./button";

// Required for react-modal accessibility
Modal.setAppElement("#root");

export default function ContactModal({ modalIsOpen, setIsOpen,title }) {
//   const location = useLocation();
//   const { title } = location.state || {};
  const subtitleRef = useRef();

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

  const customStyles = {
    content: {
      background: "transparent",
      border: "none",
      position: "relative",
      padding: 0,
      inset: "auto",
      overflow: "visible",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // slightly lighter so blur shows
      backdropFilter: "blur(8px)", // <-- blur effect
      WebkitBackdropFilter: "blur(8px)", // Safari support
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 50,
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

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
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={300} // matches exit animation
    >
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gray-800 w-auto  text-white rounded-2xl shadow-lg max-w-lg p-6 relative"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            <h2
              ref={subtitleRef}
              className="text-2xl font-bold mb-4 text-center"
            >
              {title || "Contact Me"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full md:w-100 sm:100 p-3 bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
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
                  className={`w-full md:w-100 sm:100 p-3 bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
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
                  className={`w-full md:w-100 sm:100 p-3 bg-gray-800 border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-h-[120px]`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-2">
                <PrimaryBtn
                  btnText="Submit"
                  loading={isLoading}
                  type="submit"
                />
                {/* <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                >
                  Close
                </button> */}
              </div>
            </form>

            {/* Status */}
            {status && (
              <p
                className={`text-center mt-4 text-sm px-4 py-2 rounded-lg ${
                  status.startsWith("✅") ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
