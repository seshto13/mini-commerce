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
    <div className="md:flex w-full justify-around mt-24 p-8 my-6">
      <div className="md:w-2/6 h-auto py-8 text-black ">
        <h2
          className={`text-8xl md:text-7xl font-medium text-green-600 ${playfair.className}`}
        >
          Order your <br />
          <span className="text-6xl font-light gap-3">favourite foods</span>
        </h2>
        <br />
        <p className="text-base">
          Rice Noodles with shrimps ,egg ,pork, cabbage. Top it off with minced
          green onions and toasted sesame seeds for a delightful crunch. Serve
          it hot or cold—it’s a versatile crowd-pleaser! 
        </p>

        <CartButton />
      </div>
      <CheckImage />
    </div>
  );
};

export default CheckDetails;
