// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "./button";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", path: "/krishportfolio" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Brand */}
        <Link
        to={'/krishportfolio'}
          className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
          style={{ fontFamily: "Kapakana", fontWeight: 900 }}
        >
          Krish
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="Roboto_Mono font-medium hover:text-gray-400 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <PrimaryBtn btnText={"Hire me"} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 md:hidden z-10 animate-slideDown">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="Intel_One_Mono hover:text-gray-400 transition duration-200 "
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {item.name}
              </Link>
            ))}
            <PrimaryBtn btnText={"Hire me"} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
