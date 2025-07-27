import React from "react";

const PrimaryBtn = ({ btnText, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="font-bold relative overflow-hidden px-10 py-2 rounded-md cursor-pointer text-white bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-in-out
        before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 hover:scale-105 hover:shadow-lg"
    >
      <span className="relative z-10">{btnText}</span>
    </button>
  );
};

export default PrimaryBtn;
