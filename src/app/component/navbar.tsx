

// Vo Dev

"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Update these import paths to match your project structure
import jordanLogo from "../../../public/nphoto/logo-2.png";
import nikeLogo from "../../../public/nphoto/nike.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Section */}
      <div className="flex justify-between items-center bg-gray-100 border-b border-gray-300 py-2 px-4 lg:px-5">
        <div className="flex space-x-4">
          <Link href="/">
            <Image src={jordanLogo || "/placeholder.svg"} alt="Jordan Logo" width={19} height={18} />
          </Link>
        </div>
        <div className="hidden md:flex justify-center gap-4 lg:gap-10">
          <Link href="/" className="hover:underline text-sm">Find a Store</Link>
          <Link href="/contactUs" className="hover:underline border-l border-black pl-4 text-sm">Help</Link>
          <Link href="/joinUs" className="hover:underline border-l border-black pl-4 text-sm">Join Us</Link>
          <Link href="/logIn" className="hover:underline border-l border-black pl-4 text-sm">Sign In</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center px-4 py-4">
        {/* Left: Logo Section */}
        <div className="flex items-center space-x-6"> 
          <Link href="/">
            <Image src={nikeLogo || "/placeholder.svg"} alt="Nike Logo" width={59} height={21} />
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-6 text-sm">
          <Link href="#" className="hover:underline">New & Featured</Link>
          <Link href="#" className="hover:underline">Men</Link>
          <Link href="#" className="hover:underline">Women</Link>
          <Link href="#" className="hover:underline">Kids</Link>
          <Link href="#" className="hover:underline">Sale</Link>
          <Link href="/all-products" className="hover:underline">SNKRS</Link>
        </nav>

        {/* Right: Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full">
            <AiOutlineSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm pl-2 w-full"
            />
          </div>
          <Link href="/shopingCart">
          <AiOutlineHeart className="text-xl hidden md:block" /> 
          </Link>     
          <Link href="/productDetail">
            <AiOutlineShoppingCart className="text-xl" />
          </Link>
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full px-4 py-2 border-t border-gray-200">
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="hover:underline py-2">New & Featured</Link>
            <Link href="#" className="hover:underline py-2">Men</Link>
            <Link href="#" className="hover:underline py-2">Women</Link>
            <Link href="#" className="hover:underline py-2">Kids</Link>
            <Link href="#" className="hover:underline py-2">Sale</Link>
            <Link href="/all-products" className="hover:underline py-2">SNKRS</Link>
          </nav>
          <div className="mt-4">
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
              <AiOutlineSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm pl-2 w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

