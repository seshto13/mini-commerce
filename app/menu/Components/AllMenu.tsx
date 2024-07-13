"use client";

import MenuImages from "./MenuImages";
import MenuHeading from "./MenuHeading";
import { menu as menu } from "./MenuList";
import Checkbtn from "./Checkbtn";

import { Slide, Zoom } from "react-awesome-reveal";
import { use, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

const AllMenu = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [data, setData] = useState();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://api.timbu.cloud/products?organization_id=21bdf1acfdb649ab955b44826fc5c103&reverse_sort=false&page=1&size=10&Appid=F3LHGQ64ZGP2HTD&Apikey=ec9b7ff977c44f858461a2643056483b20240712141205421887`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("data is " + response);

        setData(response);
        console.log(data);
        setItems(response.items);
        console.log(response.items[0].photos[0].url);
        // setLoading(false)
      });
  }, []);

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
          {items.map((item) => {
            return (
              <MenuImages
                key={item.id}
                id={item.id}
                //img="https://api.timbu.cloud/images/food-store/product_pasta_e27ec1_1.jpg"
                img={"https://api.timbu.cloud/images/" + item?.photos[0]?.url}
                Price={item.current_price[0].NGN}
                mainTitle={item.name}
                content={item.description}
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
