"use client";
import Image from "next/image";
import React from "react";
import CartButton from "./CartButton";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";

//( { img, … } : { img: any, … } )

import { Playfair_Display } from "next/font/google";
import CheckImage from "./CheckImage";

const playfair = Playfair_Display({ subsets: ["latin"] });

const CheckDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.timbu.cloud/products/${params.id}?organization_id=21bdf1acfdb649ab955b44826fc5c103&Appid=F3LHGQ64ZGP2HTD&Apikey=ec9b7ff977c44f858461a2643056483b20240712141205421887`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("data is " + response);

        setProduct(response);
        console.log(response);
        //console.log(response.photos[0]);

        setLoading(false);
        // setLoading(false)
      });
  }, []);

  return (
    <div className="md:flex w-full justify-around mt-12 mb-12 lg:mt-16 p-8 m-3 ">
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

      {product && Object.keys(product).length !== 0 && (
        <>
          <CheckImage images={product.photos} />
          <div className="md:w-2/6 h-auto py-8 text-black ">
            <h2
              className={`text-5xl md:text-7xl font-medium text-[#4CAF50] ${playfair.className}`}
            ></h2>
            <br />

            <CartButton
              productName={product.name}
              price={product.current_price}
              availableQuantity={product.available_quantity}
              id={product.id}
              img={product.photos[0].url}
              description={product.description}
            />
          </div>

          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default CheckDetails;
