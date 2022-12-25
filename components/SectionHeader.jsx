import React from "react";

export default function SectionHeader({ children }) {
  return (
    <h3 className=" md:mt-16 lg:text-3xl md:text-xl font-bold text-[#046251] text-center lg:mt-5 mt-10">
      <span className=" md:text-5xl text-2xl   ">{children}</span>
    </h3>
  );
}
