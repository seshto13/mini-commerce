"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";
import { Playfair_Display } from "next/font/google";
import { useSelector, useDispatch } from "react-redux";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Navbar2 = () => {
  const [nav, setNav] = useState(false);

  const cart = useSelector((state: any) => state.cart);
  return (
    <div className="flex items-center justify-between w-[100%] h-auto bg-white text-black py-5 px-6 md:px-10 fixed top-0 z-20 space-y-2">
      <p
        className={`w-1/3  leading-7 font-semibold  text-[#2C6A2F]
           md:text-[28px] italic ${playfair.className}`}
      >
        Food Court
      </p>

      <div className="w-2/3 flex justify-around items-center space-x-12">
        <ul className="hidden  md:flex justify-between items-center gap-10 text-base">
          <Link href="/">
            <li className="hover:text-[background: cursor-pointer">Home</li>
          </Link>

          {/* <Link href="/">
            <li className="hover:text-[#4ECB71] cursor-pointer">About</li>
          </Link> */}

          <Link href="/menu">
            <li className="hover:text-[#4CAF50]  cursor-pointer">Menu</li>
          </Link>

          {/* <Link href="/">
            <li className="hover:text-[#4ECB71]  cursor-pointer">Pages</li>
          </Link> */}

          <Link href="/check_out ">
            <li className="hover:text-[#4CAF50] cursor-pointer">Checkout</li>
          </Link>
        </ul>

        <Link href="/" className="w-auto">
          <Bounce>
            <Link href="/menu" className="flex gap-2">
              {/* <button className=" w-auto h-12 px-4 py-1 md:py-2 me-2  bg-white border-2 border-gray-500 rounded-3xl hover:bg-[#4CAF50]   hover:text-white hover:border-0"> */}
              <div className="text-xl">
                {" "}
                <FaCartShopping />{" "}
              </div>
              <div className="">{cart.length}</div>
            </Link>
          </Bounce>
        </Link>
      </div>

      {nav && (
        <div className="md:hidden justify-between items-center gap-8 absolute  top-22 lg:top-14 left-0 bg-gray-900 w-full h-60 p-6 space-y-6 text-lg text-white">
          <ul>
            <div className="space-y-20 gap-6 ">
              <Link href="/">
                <li className="hover:text-[#4CAF50]  cursor-pointer">Home </li>
              </Link>

              {/* <Link href="/">
                <li className="hover:text-[#81B440] cursor-pointer">About</li>
              </Link> */}

              <Link href="/menu">
                <li className="hover:text-[#81B440] cursor-pointer">Menu</li>
              </Link>

              {/* <Link href="/">
                <li className="hover:text-[#81B440] cursor-pointer">Pages</li>
              </Link> */}

              <Link href="/check_out">
                <li className="hover:text-[#81B440] cursor-pointer">
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
export default Navbar2;
