"use client";
import React from "react";

import { Provider } from "react-redux";
import CheckDetails from "./Components/CheckDetails";
import Navbar2 from "@/app/Components/Navbar2";
import store from "@/app/redux/store";

//import store from "../../../../redux/store";

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
