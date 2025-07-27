import React from "react";

const SecondBtn = ({ btnText, onclick, tailwindcss }) => {
  return (
    <button
      onClick={onclick}
      className={`${tailwindcss} bg-transparent text-white border border-amber-50 px-10 py-2 rounded-[6px] cursor-pointer hover:bg-white hover:text-black`}
    >
      {btnText}
    </button>
  );
};

export default SecondBtn;
