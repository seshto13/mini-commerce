"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/reducer";
import Link from "next/link";

function MenuImages({
  id,
  img,
  Price,
  mainTitle,
  content,
  callback,
}: {
  id: any;
  img: any;
  Price: any;
  mainTitle: any;
  content: any;
  callback: Function;
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center w-full shadow-xl relative rounded-lg mb-8  mt-10 space-y-10">
      <div className="w-full h-[240px]">
        <Image
          src={img}
          width={600}
          height={600}
          alt="Picture of the food"
          className="w-full lg:w-[306px] h-[230px] border-md"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-6 pb-2 md:space-y-4 text-black h-[128px]">
        <p className="text-[24px] text-red-500">
          {" "}
          <span>&#x20A6;</span>
          {Price}
        </p>
        <p className="text-[20px] font-bold whitespace-nowrap">{mainTitle}</p>
        <p className="font-normal text-center text-sm mt-2 md:mt-0">
          {content}
        </p>
        <Link
          href="/checkout"
          className="px-4 py-1 md:py-2 me-2  bg-white border-2 border-gray-500 rounded-3xl hover:bg-[#4ECB71]  hover:text-white hover:border-0"
        >
          Add to Cart
        </Link>
        <br />

        <div className="absolute bottom-0 right-0 size-8 bg-green text-white flex items-center justify-center rounded-tl-lg rounded-br-lg"></div>
      </div>
      <div className="ml-4 mb-4">
        <br />
      </div>
    </div>
  );
}

export default MenuImages;
