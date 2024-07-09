"use client";
import Image from "next/image";
import React from "react";
import CartButton from "./CartButton";

//( { img, … } : { img: any, … } )

import { Playfair_Display } from "next/font/google";
import CheckImage from "./CheckImage";

const playfair = Playfair_Display({ subsets: ["latin"] });

const CheckDetails = () => {
  return (
    <div className="md:flex w-full justify-around mt-12 mb-12 lg:mt-16 p-8 m-3 ">
      <div className="md:w-2/6 h-auto py-8 text-black ">
        <h2
          className={`text-5xl md:text-7xl font-medium text-[#4CAF50] ${playfair.className}`}
        >
          Order your <br />
          <span className="text-black text-4xl md:text-5xl font-light gap-3">favourite foods</span>
        </h2>
        <br />
        <p className="text-base p-2">
          Rice Noodles with shrimps ,egg ,pork, cabbage. Top it off with minced
          green onions and toasted sesame seeds for a delightful crunch. Serve
          it hot or cold—it’s a versatile crowd-pleaser! 
        </p>

        <p>Total Order</p>

        <CartButton />
      </div>
      <CheckImage />
      <br /><br />
    </div>
  );
};

export default CheckDetails;
