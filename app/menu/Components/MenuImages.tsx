"use client";
import Image from 'next/image';
import React from "react";



//( { img, … } : { img: any, … } )

function MenuImages({
  img,
  Price,
  mainTitle,
  content,
  
}: {
  img: any;
  Price: any;
  mainTitle: any;
  content: any;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full shadow-xl relative rounded-lg mb-8  mt-10">
      <div className="w-full h-[240px]">
        <Image
          src={img}
          width={600}
          height={600}
          alt="Picture of the author"
          className="w-full lg:w-[306px] h-[230px] border-md"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-6 pb-2 md:space-y-4 text-black h-[128px]">

      <p className="text-[24px] text-red-500">
          {" "}
          <span>&#x20A6;</span>
          {Price}
        </p>
        <p className="ttext-[20px] font-bold ">{mainTitle}</p>
        <p className="font-normal text-center text-sm mt-2 md:mt-0">{content}</p>

        
        
        <div className="absolute bottom-0 right-0 size-8 bg-green text-white flex items-center justify-center rounded-tl-lg rounded-br-lg"></div>
      </div>
      <div className="ml-4 mb-4">
       
        <br />
      </div>
    </div>
  );
}

export default MenuImages;
