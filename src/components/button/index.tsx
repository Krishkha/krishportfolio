import React from "react";

const PrimaryBtn = ({ btnText, onclick, btnstyle, loading,type = "submit" }) => {
  return (
    <button
      onClick={onclick}
      type={type}
      style={btnstyle}
      disabled={loading}
      className={`font-bold relative overflow-hidden px-10 py-2 rounded-md cursor-pointer text-white bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-in-out
        before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 hover:scale-105 hover:shadow-lg
        ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      ) : (
        <span className="relative z-10">{btnText}</span>
      )}
    </button>
  );
};

export default PrimaryBtn;
