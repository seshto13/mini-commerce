"use client";
import React from "react";

import { Bounce } from "react-awesome-reveal";
import Image from "next/image";

import { FaEnvelope } from "react-icons/fa";



import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"] });

const Footer = () => {
  return (
    
<div>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center  text-black bg-[#E2F9EE] p-8 h-auto gap-3 space-y-4 md:space-y-2">
      {/* <!-- <h3 className="footer-title">OFUBIZ</h3> --> */}
      <div className="">
        {/* <Bounce>
          {" "}
          <div className="">
            <Image
              src=""
              width={100}
              height={100}
              alt="Picture of the author"
              className=""
            />
          </div>
        </Bounce> */}
        <p className={`w-1/3 text-lg md:text-2xl text-[42px] italic ${playfair.className}`}>
        Food Court
      </p>

        <br />
        <p>
          At FoodCourt, we are dedicated to providing top-notch food services{" "}
        </p>
      </div>

      
      

      <div className="md:ml-4 space-y-3 text-md">
        <h3 className="text-xl font-bold">Quick Contact</h3>

        
        <div className="flex gap-2">
          <div className="mt-1">
            <FaEnvelope />
          </div>
          <a href="mailto:ofubiz@gmail.com" className="hover:text-green">
            food_court@gmail.com
          </a>
        </div>
        
      </div>

     
    </div>
     <div className="text-center bg-[#E2F9EE] text-green-700">
     <p>FoodCourt....&copy;2024</p>
     <br />
   </div>
   </div>
   
  );
};

export default Footer;