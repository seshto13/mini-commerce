"use client";
import Image from "next/image";
import React, { useState } from "react";

//import img1 from "../../../public/assets/meals/meal1.svg"
import img1 from "@/public/assets/meals/meal1.svg";

const Product = ({ images }: { images: any }) => {
  const [img, setImg] = useState(images[0]?.url);
  return (
    <div className="w-5/6 md:w-2/6 h-auto  md:my-4">
      <Image
        loader={() => "https://api.timbu.cloud/images/" + img}
        src={"https://api.timbu.cloud/images/" + img}
        width={200}
        height={200}
        alt="Picture of the author"
        className="w-full h-[300px] md:h-[350px]  "
      />
      <div></div>

      <hr />
      <div className="w-full flex gap-3 my-4">
        {images.map((item: any) => {
          return (
            <div
              key={item.position}
              className=" w-8 h-8"
              onClick={() => setImg(item.url)}
            >
              <Image
                loader={() => "https://api.timbu.cloud/images/" + item.url}
                src={"https://api.timbu.cloud/images/" + item.url}
                width={30}
                height={30}
                alt="Picture of the author"
                className="w-full h-[50px]  md:h-[55px]  "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
