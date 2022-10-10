import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-gradient-to-br from-[#9dedf0] via-[#5ce1e6] to-[#33bbcf] rounded-[10px] hover:shadow-woke transition-shadow duration-300 outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
