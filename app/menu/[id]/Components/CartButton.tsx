"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/reducer";

const CartButton = ({
  productName,
  price,
  availableQuantity,
  id,
  img,
  description,
}: {
  productName: any;
  price: any;
  availableQuantity: any;
  id: any;
  img: any;
  description: any;
}) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1); // Initial quantity

  const increaseQuantity = () => {
    if (quantity < availableQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-5 container mx-auto px-2 py-8 text-xl font-semibold">
      <p className="">product Name: {productName}</p>
      <br />
      <p className="text-red-600 pt-2 text-xl font-medium">
        {" "}
        <span>&#x20A6; {price}</span>
        {}
      </p>
      <p className="">Available Quantity: {availableQuantity}</p>
      <br />
      <div className="flex gap-5">
        <p className="text-black text-base">Quantity:</p>
        <div className=" w-36 px-3  md:h-8 border-2 border-gray-400 flex items-center justify-between gap-2">
          <button className=" text-green-500" onClick={decreaseQuantity}>
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
      </div>

      <div className="flex lg:justify-e">
        <div className="lg:-ml-3 p-2 ">
          <button
            className="w-72 h-16 md:w-80   border-2 px-8 py- bg-green-600 text-white"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  price: price,
                  mainTitle: productName,
                  content: description,
                  quantity: quantity,
                })
              )
            }
          >
            Add To cart
          </button>
        </div>
      </div>

      {/* <div className="flex lg:justify-end">
        <div className="lg:-ml-3 p-2 ">
          <a href="">
            <button className="w-60 h-16 md:w-60 md:h-16 rounded-full border-2 px-8 mb-2 bg-black text-white">
            
              <p className="text-2xl md:text-4xl text-center">Buy Now</p>
            </button>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default CartButton;
