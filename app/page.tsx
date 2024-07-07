import Image from "next/image";
import Landing from "./Components/Landing";
import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div className="w-full ">
      <Navbar2 />
      <Landing />
      <Footer />
    </div>
  );
}
