"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "@/app/redux/reducer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartButton = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  //if (cart.length > 0) {
  const total = cart
    .map((item: any) => item.quantity * item.price)
    .reduce((prev: number, curr: number) => prev + curr, 0);
 
  return (
    <div className="md:flex container mx-auto px-2 py-8">
      
     <div className="flex items-center justify-center w-40 h-16 text-green-600 border-[1.5px] border-gray-400 rounded-full text-center text-2xl gap-4">
      <p>+</p> 
      <div className="h-6 w-[1px]  bg-black text-black"></div>
      <p>2</p>
      <div className="h-6 w-[1px]  bg-black text-black"></div>
      <p>1</p>
     </div>
     <br />
      
      <div className="flex lg:justify-end">
        <div className="lg:-ml-3 p-2 ">
          <a href="">
            <button className="w-60 h-16 md:w-60 md:h-16 rounded-full border-2 px-8 mb-2 bg-black text-white">
            
              <p className="text-2xl md:text-4xl text-center">Buy Now</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
