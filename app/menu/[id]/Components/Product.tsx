"use client";
import Image from "next/image";
import React from "react";

//import img1 from "../../../public/assets/meals/meal1.svg"
import img1 from "@/public/assets/meals/meal1.svg";

const Product = ({ images }: { images: any }) => {
  return (
    <div className="w-5/6 md:w-2/6 h-auto  md:my-4">
      <Image
        loader={() => "https://api.timbu.cloud/images/" + images[0]?.url}
        src={"https://api.timbu.cloud/images/" + images[0]?.url}
        width={200}
        height={200}
        alt="Picture of the author"
        className="w-full h-[300px] md:h-[350px]  "
      />
      <div></div>

      <hr />
      <Image
        loader={() => "https://api.timbu.cloud/images/" + images[0]?.url}
        src={"https://api.timbu.cloud/images/" + images[0]?.url}
        width={30}
        height={30}
        alt="Picture of the author"
        className="w-full h-[50px]  md:h-[55px]  "
      />
    </div>
  );
};
export default Product;
