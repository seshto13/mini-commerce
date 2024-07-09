import React from 'react'
import { Bounce, Slide } from 'react-awesome-reveal'
import { Playfair_Display } from "next/font/google";
import Link from 'next/link';

const playfair = Playfair_Display({subsets: ["latin"] });

function MenuHeading() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <Bounce><h2 className={` md:mt-8 text-center text-[#20a245] text-2xl text-[60px] md:text-[100px] font-normal leading-[96px]  ${playfair.className}`}>Our Meal</h2>
        </Bounce>
        <br />
        <p className="w-[80%] md:w-[50%] text-[18px] leading-6 text-center font-normal text-[#495460] DM sans"> We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
<br /><br />
        <ul className="grid grid-cols-3 md:grid-cols-5 justify-between gap-6">
        <a href="/" className="w-auto">
    <Slide direction ="right">
    <button className="px-6 py-2 me-2  bg-white hover:bg-green-600 border-2 hover:text-white border-gray-300 rounded-3xl">All</button>
    </Slide>
  </a>

        <a href="/" className="w-auto">
    <Slide direction ="right">
    <button className="px-6 py-2 me-2  bg-white hover:bg-green-600 border-2 hover:text-white border-gray-300 rounded-3xl">Italian</button>
    </Slide>
  </a>

  <a href="/" className="w-auto">
    <Slide direction ="right">
    <button className="px-6 py-2 me-2  bg-white hover:bg-green-600 border-2 hover:text-white border-gray-300 rounded-3xl">Thai</button>
    </Slide>
  </a>

  <a href="/" className="w-auto">
    <Slide direction ="right">
    <button className="px-6 py-2 me-2  bg-white hover:bg-green-600 border-2 hover:text-white border-gray-300 rounded-3xl">Asian</button>
    </Slide>
  </a>

  <a href="/" className="w-auto">
    <Slide direction ="right">
    <button className="px-6 py-2 me-2  bg-white hover:bg-green-600 border-2 hover:text-white border-gray-300 rounded-3xl">Dessert</button>
    </Slide>
  </a>
        </ul>
        </div>
  )
}

export default MenuHeading