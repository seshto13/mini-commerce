"use client";
import { useState } from "react";


const CartButton = () => {
  const [quantity, setQuantity] = useState(1); // Initial quantity

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
 
  return (
    <div className="md:flex items-center justify-center container mx-auto px-2 py-8">
      <div className="w-56 h-12 px-3 md:w-72 md:h-12 border-2 borer-gray-900 flex items-center justify-between gap- rounded-full">
      <button
          className=" text-green-500  rounded"
          onClick={decreaseQuantity}
        >
          -
        </button>
        
        <span className=" text-green-500">{quantity}</span>
        <button
          className=" text-green-600 rounded "
          onClick={increaseQuantity}
        >
          +
        </button>
        </div>
        
     
      
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
