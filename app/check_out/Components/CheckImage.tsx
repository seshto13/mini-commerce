"use client";
import Image from "next/image";
import React from "react";



import img1 from "../../../public/assets/meals/meal1.svg";

const CheckImage = () => {
  return (
    <div className="w-2/6 relative">
    <div className=" absolute inset-0 z-10  rounded-lg mb-8 w-full h-full object-cover">
      <div className="w-full h-auto">
        <div className="flex flex-col items-center justify-center absolute inset-0 z-0  bg-[#4CAF50] w-[320px] h-[400px] top-[30%] md:left-10 mt-16 rounded-2xl mb-4">
<br />
          <div className="flex items-center justify-center gap-8 mt-24">
          <div className="w-6">
        <Image
          src="/assets/meals/timer.png"
          width={100}
          height={100}
          alt="an icon"
          className=""
        />
        </div>


<div className="w-6">
        <Image
          src="/assets/meals/star.png"
          width={100}
          height={100}
          alt="an icon"
          className=""
        />
        </div>
          </div>
<br />

          <p className="text-white text-lg ">Noodles 4.5</p>
          <br />
          <div className="">
            <button className="w-64 h-14 px-6 py-3 md:py-2 me-2  bg-black text-white border-2 border-gray-500 rounded-3xl hover:bg-[#4CAF50]  hover:text-white hover:border-0">
              10-15mins
            </button>
          </div>
        </div>

        <Image
          src={img1}
          width={200}
          height={200}
          alt="Picture of the author"
          className="w-[700px] md:w-[541px] h-[406px] absolute -top-10 md:top-0 left-10 lg:left-0"
        />
      </div>
    </div>
  </div>
  )
  }
export default CheckImage