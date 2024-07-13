import React from 'react'
import Link from 'next/link'

const Checkbtn = () => {
  return (
    <Link href="/check_out" className="fixed text-sm md:text-base -right-8 top-[30%] z-30 transform rotate-90 px-3 md:px-4 py-2 md:py-3 rounded-md bg-lime-300 text-black">
        Checkout</Link>

  )
}

export default Checkbtn
