"use client";
import Image from "next/image";
import React from "react";

//import img1 from "../../../public/assets/meals/meal1.svg"
import img1 from "@/public/assets/meals/meal1.svg";

const CheckImage = ({ images }: { images: any }) => {
  return (
    <div className="w-2/6 md:h-[700px] relative mb-4">
      <Image
        loader={() => "https://api.timbu.cloud/images/" + images[0]?.url}
        src={"https://api.timbu.cloud/images/" + images[0]?.url}
        width={200}
        height={200}
        alt="Picture of the author"
        className="w-[541px] h-[406px] absolute -top-10 md:top-0 left-10 lg:left-0"
      />
    </div>
  );
};
export default CheckImage;
