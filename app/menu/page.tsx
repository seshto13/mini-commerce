"use client";
import React from "react";
import Navbar2 from "../Components/Navbar2";
import AllMenu from "./Components/AllMenu";
import Footer from "../Components/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

function page() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-auto">
      <Provider store={store}>
        <Navbar2 />
        <AllMenu />
       
      </Provider>
      <div className="w-full">
      <Footer />
      </div>
    </div>
  );
}

export default page;
