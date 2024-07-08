"use client";
import Image from "next/image";
import Landing from "./Components/Landing";
import NavbarHome from "./Components/NavbarHome";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Home() {
  return (
    <div className="w-full">
      <Provider store={store}>
        <NavbarHome />
        <Landing />
      </Provider>
    </div>
  );
}
