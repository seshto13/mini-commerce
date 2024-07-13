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
    .map((item: any) => parseFloat(item.quantity) * parseFloat(item.price))
    .reduce((prev: number, curr: number) => prev + curr, 0);
  // }
  /*const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Product A', price: 7000, quantity: 1 },
    { id: 2, name: 'Product B', price: 7000, quantity: 2 },
  ]);

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };
*/
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          {cart.map((item: any) => (
            <div key={item.id} className="w-[] border rounded-lg p-4 mb-4">
              <h2 className="text-lg font-semibold">{item.mainTitle}</h2>

              <div className="w-[] flex justify-between mt-2">
                <button className="flex border-2 border-gray-500 rounded-3xl">
                  <p
                    className="text-black font-bold py-2 px-4 rounded mr-2"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    {" "}
                    +{" "}
                  </p>

                  <p className="text-gray-600 pt-2">{item.quantity}</p>
                  <p
                    className="text-black font-bold py-2 px-4 rounded mr-2"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    {" "}
                    -{" "}
                  </p>
                </button>

                <p className="text-red-600 pt-2 text-xl font-medium">
                  {""}
                  <span>&#x20A6;</span>
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
      <div className="flex gap-3 items-center">
        Total amount :{" "}
        <p className="text-red-600 pt-2 text-xl font-medium">
          {" "}
          <span>&#x20A6;</span>
          {total}
        </p>
      </div>
      <div className="flex lg:justify-end">
        <div className="lg:-ml-3 p-2 ">
          <a href="">
            <button className="w-40 h-14 md:w-60 md:h-24 rounded-full border-2 px-8 py-3 bg-black text-white hover:bg-green-500">
              {" "}
              <p className="text-2xl md:text-4xl">Buy Now</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
