"use client";
import React from "react";

import { Bounce } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Landing = () => {
  return (
    <div className="w-full h-screen px-4 my-4">
      <div className="w-full h-screen bg-[url('/assets/meals/image1.png')] bg-cover bg-center flex items-center  justify-center bg-transparent bg-opacity">
        <div className=" text-center ">
          <p className={`text-[50px] lg:px-52 font-medium ${playfair.className}`}>
            Get Your Favourite <br />
            Meals Delivered
          </p>
          <br />
          <p className="text-[20px]">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <br />
          <br />
          <div className=" flex items-center justify-center md:gap-10">
            <a href="/buy" className=" w-auto  ">
              <button className="w-[170px] h-[64px] border-[1.5px] px-8 py-2 me-2  bg-[#0a9230] text-white hover:bg-lime-200 hover:text-[#20a245]  border-white rounded-full">
                Get Started
              </button>
            </a>

            <a href="/buy" className="w-auto">
              <button className="w-[170px] h-[64px] px-8 py-2 me-2  bg-transparent  hover:bg-lime-200  hover:text-[#20a245] border-[1.5px]  border-black hover:border-white rounded-full">
                More Menu
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
