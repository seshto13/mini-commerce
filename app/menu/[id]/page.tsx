"use client";
import React from "react";

import { Provider } from "react-redux";
import ProductDetails from "./Components/ProductDetails";
import Navbar2 from "@/app/Components/Navbar2";
import store from "@/app/redux/store";

//import store from "../../../../redux/store";

const page = () => {
  return (
    <div className="h-auto my-12">
      <Provider store={store}>
        <Navbar2 />
        <ProductDetails />
      </Provider>
    </div>
  );
};

export default page;
