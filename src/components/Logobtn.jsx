import React from "react";

const Logobtn = ({ item }) => {
  return (
    <a
      href={item.url}
      
      className="group border bg-[#ffffff2e] border-zinc-400 w-10 h-auto px-2 py-2 rounded-full cursor-pointer hover:bg-white transition duration-300 flex items-center justify-center"
    >
      <img
        src={item.icon}
        width={50}
        height={50}
        alt="Email Icon"
        className="invert brightness-0 group-hover:invert-0 group-hover:brightness-[0.85] transition duration-300"
      />
    </a>
  );
};

export default Logobtn;
