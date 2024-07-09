"use client";

import MenuImages from "./MenuImages";
import MenuHeading from "./MenuHeading";
import { menu as menu } from "./MenuList";
import Checkbtn from "./Checkbtn";

import { Slide, Zoom } from "react-awesome-reveal";
import { useState } from "react";

const AllMenu = () => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    console.log("Cart is " + cart);
    console.log(cart);
  };
  return (
    <section className="w-full md:flex justify-center items-center my-24">
      <div className="md:w-[90%] h-auto md:h-auto flex  flex-col items-center justify-center text-center">
        <br />

        <MenuHeading />

        <div className="w-[90%] md:w-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-4 gap-y-6 justify-center items-center">
          {menu.map((item) => {
            return (
              <MenuImages
                key={item.id}
                id={item.id}
                img={item.img}
                Price={item.price}
                mainTitle={item.mainTitle}
                content={item.content}
                callback={addToCart}
              />
            );
          })}
        </div>
        <Checkbtn />
      </div>
      
    </section>
  );
};

export default AllMenu;
