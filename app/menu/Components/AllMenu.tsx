"use client";

import MenuImages from "./MenuImages";
import MenuHeading from "./MenuHeading";
import { menu as menu } from "./MenuList";
import Checkbtn from "./Checkbtn";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Slide, Zoom } from "react-awesome-reveal";
import { use, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const AllMenu = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  function fetchMenus(page: number) {
    setLoading(true);
    setData({});
    fetch(
      `https://api.timbu.cloud/products?organization_id=${process.env.ORGANISATION_ID}&reverse_sort=false&page=${page}&size=10&Appid=${process.env.AppID}&Apikey=${process.env.API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);

        setData(response);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMenus(1);
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

        <div className=" flex justify-center items-center">
          {" "}
          {loading && (
            <CirclesWithBar
              height="100"
              width="100"
              color="#4fa94d"
              outerCircleColor="#4fa94d"
              innerCircleColor="#4fa94d"
              barColor="#4fa94d"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
        </div>

        <div className="w-[90%] md:w-full grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-4 gap-y-6 justify-center items-center">
          {data &&
            Object.keys(data).length !== 0 &&
            data?.items.map((item: any) => {
              return (
                <MenuImages
                  key={item.id}
                  id={item.id}
                  img={"https://api.timbu.cloud/images/" + item?.photos[0]?.url}
                  Price={item.current_price[0].NGN}
                  mainTitle={item.name}
                  content={item.description}
                  callback={addToCart}
                />
              );
            })}
        </div>
        <div>
          {data && Object.keys(data).length !== 0 && (
            <div className="flex justify-center items-center">
              <div className="flex gap-5 justify-center items-center">
                {data.page === 1 ? (
                  <button disabled className=" p-2">
                    {" "}
                    <IoIosArrowBack />
                  </button>
                ) : (
                  <button
                    onClick={() => fetchMenus(data.page - 1)}
                    className="hover:bg-black hover:text-white p-2"
                  >
                    <IoIosArrowBack />
                  </button>
                )}

                <div className="flex gap-3 p-">
                  {data.page === 1 || data.page - 2 < 1 ? (
                    ""
                  ) : (
                    <button
                      className="hover:bg-black hover:text-white p-2"
                      onClick={() => fetchMenus(data.page - 2)}
                    >
                      {data.page - 2}
                    </button>
                  )}
                </div>

                {data.page === 1 ? (
                  ""
                ) : (
                  <button
                    className="hover:bg-black hover:text-white p-2"
                    onClick={() => fetchMenus(data.page - 1)}
                  >
                    {data.page - 1}
                  </button>
                )}

                <button disabled className=" bg-black text-white p-2">
                  {data.page}
                </button>

                {data.page ===
                Math.ceil(parseFloat(data.total) / parseFloat(data.size)) ? (
                  ""
                ) : (
                  <button
                    onClick={() => fetchMenus(data.page + 1)}
                    className="hover:bg-black hover:text-white p-2"
                  >
                    {data.page + 1}
                  </button>
                )}

                {data.page ===
                  Math.ceil(parseFloat(data.total) / parseFloat(data.size)) ||
                data.page + 2 >
                  Math.ceil(parseFloat(data.total) / parseFloat(data.size)) ? (
                  ""
                ) : (
                  <button
                    onClick={() => fetchMenus(data.page + 2)}
                    className="hover:bg-black hover:text-white p-2"
                  >
                    {data.page + 2}
                  </button>
                )}

                {data.page >=
                Math.ceil(parseFloat(data.total) / parseFloat(data.size)) ? (
                  <button disabled className=" p-2">
                    {" "}
                    <IoIosArrowForward />
                  </button>
                ) : (
                  <button
                    onClick={() => fetchMenus(data.page + 1)}
                    className="hover:bg-black hover:text-white p-2"
                  >
                    <IoIosArrowForward />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <Checkbtn />
      </div>
    </section>
  );
};

export default AllMenu;
