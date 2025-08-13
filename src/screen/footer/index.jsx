import React, { useContext } from "react";
import Logo from "../../assets/images/Logo";
import Logobtn from "../../components/Logobtn";
import {
  ContactString,
  logosStrings,
  menuItems,
} from "../../assets/Strings/strings";
import { Link } from "react-router-dom";
import { contaxtInfo } from "../../contaxt/contaxt";

const Footer = () => {
  const data = useContext(contaxtInfo) || {};

  const { Postion, email, phoneno, tagname, logname } = data.infodata || {};
  // console.log("from footer", infodata);

  return (
    <footer className="bg-[#ffffff07] text-gray-300 w-full py-12 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10 py-10">
        {/* Logo */}
        <h1
          className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
          style={{ fontFamily: "Kapakana", fontWeight: 900 }}
        >
          {logname}
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-lg">
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
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-5">
          {logosStrings.map((item, index) => (
            <div
              key={index}
              className="transition hover:scale-110 duration-300"
            >
              <Logobtn item={item} />
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
          {/* Email */}
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="group border border-zinc-400 w-10 h-10 p-2 rounded-full cursor-pointer bg-transparent hover:bg-white transition duration-300 flex items-center justify-center"
            >
              <img
                src={Logo.email}
                alt="Email"
                className="w-full h-full invert brightness-0 group-hover:invert-0 group-hover:brightness-[0.85] transition duration-300"
              />
            </a>
            <span className="text-sm">{email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${phoneno}`}
              className="group border border-zinc-400 w-10 h-10 p-2 rounded-full cursor-pointer bg-transparent hover:bg-white transition duration-300 flex items-center justify-center"
            >
              <img
                src={Logo.phone}
                alt="Phone"
                className="w-full h-full invert brightness-0 group-hover:invert-0 group-hover:brightness-[0.85] transition duration-300"
              />
            </a>
            <span className="text-sm">{phoneno}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-6 text-xs text-gray-500">
          Designed by <span className="text-orange-400">@{tagname}</span> —{" "}
          {Postion}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
