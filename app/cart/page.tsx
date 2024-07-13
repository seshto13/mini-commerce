"use client";
import React from "react";
import Navbar2 from "../Components/Navbar2";
import CheckDetails from "./Components/CheckDetails";
import { Provider } from "react-redux";
import store from "../redux/store";

const page = () => {
  return (
    <div className="h-auto my-10">
      <Provider store={store}>
        <Navbar2 />
        <CheckDetails />
      </Provider>
    </div>
  );
};

export default page;
