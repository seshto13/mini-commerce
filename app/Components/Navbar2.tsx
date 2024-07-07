"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bounce, Slide } from "react-awesome-reveal";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"] });

const Navbar2 = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex items-center justify-between w-[100%] h-auto bg-white text-black py-5 px-6 md:px-10 fixed top-0 z-20 space-y-2">
      <p className={`w-1/3 text-lg md:text-2xl text-[42px] italic ${playfair.className}`}>
        Food Court
      </p>

      <div className="w-2/3 flex justify-between items-center space-x-12">
        <ul className="hidden  lg:flex justify-between items-center gap-8 text-base">
          <Link href="/">
            <li className="hover:text-[#4ECB71] cursor-pointer">Home</li>
          </Link>

          <Link href="/">
            <li className="hover:text-[#4ECB71] cursor-pointer">About</li>
          </Link>

          <Link href="/menu">
            <li className="hover:text-[#4ECB71]  cursor-pointer">Menu</li>
          </Link>

          <Link href="/">
            <li className="hover:text-[#4ECB71]  cursor-pointer">Pages</li>
          </Link>

          <Link href="/check_out ">
            <li className="hover:text-[#4ECB71] cursor-pointer">Checkout</li>
          </Link>
        </ul>

        <a href="/" className="w-auto">
          <Slide direction="right">
            <Link href=""><button className="px-4 py-1 md:py-2 me-2  bg-white border-2 border-gray-500 rounded-3xl hover:bg-[#4ECB71]  hover:text-white hover:border-0">
              Add to Cart
            </button>
            </Link>
          </Slide>
        </a>
      </div>

      {nav && (
        <div className="lg:hidden justify-between items-center gap-8 absolute  top-16 lg:top-14 left-0 bg-gray-900 w-full p-6 space-y-6 text-lg text-white">
          <ul>
            <div className="space-y-20">
              <Link href="/">
                <li className="hover:text-[#20a245] cursor-pointer">Home</li>
              </Link>

              <Link href="/">
                <li className="hover:text-[#81B440] cursor-pointer">About</li>
              </Link>

              <Link href="/menu">
                <li className="hover:text-[#81B440] cursor-pointer">Menu</li>
              </Link>

              <Link href="/">
                <li className="hover:text-[#81B440] cursor-pointer">Pages</li>
              </Link>

              <Link href="/check_out">
                <li className="hover:text-[#81B440] cursor-pointer">Checkout</li>
              </Link>
            </div>
          </ul>
        </div>
      )}

      {!nav ? (
        <div className=" lg:hidden cursor-pointer" onClick={() => setNav(true)}>
          <GiHamburgerMenu size={30} />
        </div>
      ) : (
        <div
          className=" lg:hidden cursor-pointer"
          onClick={() => setNav(false)}
        >
          <IoIosCloseCircleOutline size={30} />{" "}
        </div>
      )}
    </div>
  );
};
export default Navbar2;
