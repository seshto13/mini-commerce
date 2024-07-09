"use client";
import React from "react";


import { IoLogoFacebook } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#A4A4A4]">
      <div
        className="w-full md:w-[50%] grid grid-cols-2 justify-around  text-black bg-[#A4A4A4]
] p-8 h-auto gap-3 space-y-4 md:space-y-2"
      >
        {/* <!-- <h3 className="footer-title">OFUBIZ</h3> --> */}
        <div className="">
          <p className="w-1/3 md:text-2xl text-sm  font-bold leading-4 decoration-solid underline">
            Sources
          </p>
          <ul className="flex flex-col gap-3 text-sm leading-4" >
            <a href="">About Us</a>
            <a href="">Services</a>
            <a href="">Vision</a>
            <a href="">Mission</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
          </ul>

          <br />
        </div>

        <div className="flex flex-col md:ml-4 space-y-3 text-md">
        <p className="w-1/3 md:text-2xl text-sm  font-bold leading-4 decoration-solid underline">Links</p>

          <ul className="flex flex-col gap-3 text-sm leading-4">
          <a href="">Our Vision</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        
       
      </ul>

      <div className=" flex gap-4 w-6 h-6">
        <a href=""><IoLogoFacebook /></a>
        <a href=""><FiInstagram /></a>
        
        <a href=""><IoLogoLinkedin /></a>

      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
