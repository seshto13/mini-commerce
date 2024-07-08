"use client";
import React from "react";
import Login from "./components/Login";
import NavbarHome from "../Components/NavbarHome";


const page = () => {
  return (
    <main className="w-full h-auto flex flex-col justify-center items-center">
    
    
        <div className="w-full h-screen">
      <NavbarHome />
      <br />
      <br />
          <Login />
        </div>
        

    </main>
  );
};

export default page;
