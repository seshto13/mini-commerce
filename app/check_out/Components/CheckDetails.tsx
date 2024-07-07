"use client";
import Image from "next/image";
import React from "react";
import CartButton from "./CartButton";

import img1 from "../../../public/assets/meals/meal1.svg";

//( { img, … } : { img: any, … } )

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const CheckDetails = () => {
  return (
    <div className="flex w-full justify-around mt-24 p-8 my-6">
      <div className="w-2/6 h-auto py-8 text-black ">
        <h2
          className={`text-7xl font-medium text-green-600 ${playfair.className}`}
        >
          Order your <br />
          <span className="text-5xl font-light gap-3">favourite Foods</span>
        </h2>
        <br />
        <p className="text-base">
          Rice Noodles with shrimps ,egg ,pork, cabbage. Top it off with minced
          green onions and toasted sesame seeds for a delightful crunch. Serve
          it hot or cold—it’s a versatile crowd-pleaser! 
        </p>

        <CartButton />
      </div>

      <div className="w-2/6 relative">
        <div className="shadow-xl absolute inset-0 z-10  rounded-lg mb-8 w-full h-full object-cover">
          <div className="w-full h-auto">
            <div className="flex flex-col items-center justify-center absolute inset-0 z-0  bg-green-500 w-[320px] h-[400px] top-[30%] left-10 mt-16 rounded-2xl mb-4">
<br />
              <div className="flex items-center justify-center gap-8 mt-24">
              <div className="w-6">
            <Image
              src="/assets/meals/timer.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className=""
            />
            </div>


<div className="w-6">
            <Image
              src="/assets/meals/star.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className=""
            />
            </div>
              </div>
<br />

              <p className="text-white text-lg ">Noodles 4.5</p>
              <br />
              <div className="">
                <button className="px-6 py-3 md:py-2 me-2  bg-black text-white border-2 border-gray-500 rounded-3xl hover:bg-green-600  hover:text-white hover:border-0">
                  10-15mins
                </button>
              </div>
            </div>

            <Image
              src={img1}
              width={200}
              height={200}
              alt="Picture of the author"
              className="w-[541px] h-[406px] absolute top-0 left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckDetails;
