import Image from 'next/image'
import React from 'react'
import logo from  '../../../public/png/logo.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 bg-white shadow px-20 py-3 bg-white w-full shadow z-50">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="Logo" width={'auto'} height={50} />
      </div>
      <nav className="flex items-center gap-8 text-sm font-semibold uppercase text-gray-800">
        <span className="bg-[#3E57A7] text-white px-4 py-1 rounded-full">Home</span>
        {/* <a href="#">About Us</a> */}
        {/* <a href="#">Products</a> */}
        <a href="#">Services</a>
        {/* <a href="#">Blog</a> */}
        {/* <a href="#">Gallery</a> */}
        <a href="#">Products</a>
        <a href="#">Login/Signup</a>
        <svg className="w-4 h-4 text-gray-700 cursor-pointer" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
      </nav>
    </header>
  )
}

export default Header
