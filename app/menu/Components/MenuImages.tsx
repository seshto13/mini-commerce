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
  id: string;
  img: string;
  Price: number;
  mainTitle: string;
  content: string;
  callback: Function;
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto py-4 shadow-xl relative rounded-lg mb-8  mt-10 space-y-6">
      <div className="w-full h-[240px]">
        <Image
          loader={() => img}
          src={img}
          width={600}
          height={600}
          alt="Picture of the food"
          className="w-full lg:w-[306px] h-[210px] border-md"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center px-6 py-4 pb-2 md:space-y-2 text-black h-[135px]">
        <p className="text-[24px] text-red-500">
          {" "}
          <span>&#x20A6;</span>
          {Price}
        </p>
        <p className="text-[20px] font-bold">{mainTitle}</p>
        <p className="font-normal text-center text-xs mt-2 md:mt-0">
          {content}
        </p>
        <button
          className="px-4 py-1 md:py-2 me-2  bg-white border-2 border-gray-500 rounded-3xl hover:bg-[#4CAF50]  hover:text-white hover:border-0"
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                img: img,
                price: Price,
                mainTitle: mainTitle,
                content: content,
                quantity: 1,
              })
            )
          }
        >
          Add to Cart
        </button>

        <Link href={"menu/" + id}>View </Link>
        <br />

        <div className="absolute bottom-0 right-0 size-8 bg-green text-white flex items-center justify-center rounded-tl-lg rounded-br-lg"></div>
      </div>

      <br />
    </div>
  );
}

export default MenuImages;
