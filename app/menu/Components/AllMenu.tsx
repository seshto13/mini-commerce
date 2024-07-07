"use client";

import MenuImages from "./MenuImages";
import MenuHeading from "./MenuHeading";
import { Slide, Zoom } from "react-awesome-reveal";

import meal1 from "../../../public/assets/meals/meal1.svg";
import meal2 from "../../../public/assets/meals/meal2.jpeg";
import meal3 from "../../../public/assets/meals/meal3.jpeg";
import meal4 from "../../../public/assets/meals/meal4.jpeg";
import meal5 from "../../../public/assets/meals/meal5.jpeg";
import meal6 from "../../../public/assets/meals/meal6.jpeg";
import meal7 from "../../../public/assets/meals/meal7.jpeg";
import meal8 from "../../../public/assets/meals/meal8.jpeg";

const AllMenu = () => {
  return (
    <section className="w-full flex justify-center items-center my-24 ">
      <div className="md:w-[90%] h-auto md:h-[1238px] flex  flex-col items-center justify-center text-center">
        <br />


<MenuHeading />

        <div className="w-[90%] md:w-full h- grid grid-cols- lg:grid-cols-4 md:gap-x-4 gap-y-8 justify-center items-center">
          
            <MenuImages
              img={meal1}
              Price={"7000.00"}
              mainTitle={"Rice Noodles"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
          
            <MenuImages
              img={meal2}
              Price={"7000.00"}
              mainTitle={"Pasta"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
         
            <MenuImages
              img={meal3}
              Price={"7000.00"}
              mainTitle={"Strawberry Cake"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
          

         
            <MenuImages
              img={meal4}
              Price={"7000.00"}
              mainTitle={"Steak Potato"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
         

          
            <MenuImages
              img={meal5}
              Price={"7000.00"}
              mainTitle={"Steak With Sauce"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
        

         
            <MenuImages
              img={meal6}
              Price={"7000.00"}
              mainTitle={"Veggie Salad"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
         

         
            <MenuImages
              img={meal7}
              Price={"7000.00"}
              mainTitle={"Rice with Potato and Beef"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
         

         
            <MenuImages
              img={meal8}
              Price={"7000.00"}
              mainTitle={"Classic Waffles"}
              content={"Made with vanilla, strawberry and other ingredients."}
            />
          

        </div>
      </div>
    </section>
  );
};

export default AllMenu;
