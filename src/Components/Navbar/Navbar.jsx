/* eslint-disable no-unused-vars */
import React from "react";
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar w-full flex justify-between px-[3vw] py-[0.9vw] bg-zinc-800">
        <img src={navlogo} className="h-[3.5vw] min-h-[8vh]" alt="" />
        <img src={navprofile} className="h-[3.5vw] min-h-[8vh]" alt="" />
      </div>
    </>
  );
};

export default Navbar;
