"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"] });

const NavbarHome = () => {
  const [nav, setNav] = useState(false);

  const currentPath = usePathname();

  return (
    <div className="flex items-center justify-between w-[100%] h-auto bg-white text-black py-5 px-6 md:px-10 fixed top-0 z-20 space-y-2">
      <p
        className={`w-1/3  leading-7 font-semibold  text-[#2C6A2F]
        text-base md:text-xl lg:text-2xl italic ${playfair.className}`}
      >
        Food Court
      </p>

      <div className="w-2/3 flex justify-around items-center space-x-12">
        <ul className="hidden  md:flex justify-between items-center gap-10 text-base">
          <Link href="/">
            <li
              className={
                currentPath === "/"
                  ? "text-[#4CAF50]"
                  : "hover:text-[#4CAF50] cursor-pointer"
              }
            >
              Home
            </li>
          </Link>

          <Link href="/menu">
            <li
              className={
                currentPath === "/menu"
                  ? "text-[#4CAF50]"
                  : "hover:text-[#4CAF50] cursor-pointer"
              }
            >
              Menu
            </li>
          </Link>

          {/* <Link href="/">
            <li className="hover:text-[#4ECB71]  cursor-pointer">Pages</li>
          </Link> */}

          <Link href="/checkout ">
            <li
              className={
                currentPath === "/checkout"
                  ? "text-[#4CAF50]"
                  : "hover:text-[#4CAF50] cursor-pointer"
              }
            >
              Checkout
            </li>
          </Link>
        </ul>

        <Link href="/" className="w-auto">
          <Bounce>
            <Link href="/my-account">
              <button className="w-32 h-12 px-4 py-1 md:py-2 me-2  bg-white border-2 border-gray-500 rounded-3xl hover:bg-[#4CAF50]   hover:text-white hover:border-0">
                Sign In
              </button>
            </Link>
          </Bounce>
        </Link>
      </div>

      {nav && (
        <div className="md:hidden justify-between items-center gap-8 absolute  top-[80px] lg:top-14 left-0 bg-gray-900  w-[70%] h-96 p-6 space-y-6 text-lg text-white">
          <ul>
            <div className="space-y-20 gap-6 ">
              <Link href="/">
              <li
              className={
                currentPath === "/"
                  ? "text-[#4CAF50]"
                  : "hover:text-[#4CAF50] cursor-pointer"
              }
            >
              Home
            </li>
              </Link>

              {/* <Link href="/">
                <li className="hover:text-[#81B440] cursor-pointer">About</li>
              </Link> */}

              <Link href="/menu">
              <li
              className={
                currentPath === "/menu"
                  ? "text-[#4CAF50]"
                  : "hover:text-[#4CAF50] cursor-pointer"
              }
            >
              Menu
            </li>
              </Link>

              {/* <Link href="/">
                <li className="hover:text-[#81B440] cursor-pointer">Pages</li>
              </Link> */}

              <Link href="/checkout">
              <li
              className={
                currentPath === "/checkout"
                  ? "text-[#4CAF50]"
                  : "hover:text-[#4CAF50] cursor-pointer"
              }
            >
              Checkout
            </li>
              </Link>
            </div>
          </ul>
        </div>
      )}

      {!nav ? (
        <div className=" md:hidden cursor-pointer" onClick={() => setNav(true)}>
          <GiHamburgerMenu size={30} />
        </div>
      ) : (
        <div
          className=" md:hidden cursor-pointer"
          onClick={() => setNav(false)}
        >
          <IoIosCloseCircleOutline size={30} />{" "}
        </div>
      )}
    </div>
  );
};
export default NavbarHome;
