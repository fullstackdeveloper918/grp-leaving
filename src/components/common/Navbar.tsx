import Link from "next/link";
import SearchBar from "../SearchBar";
import React from "react";
import Image from "next/image";
import Images from "../../constants/images";

const links = [
  "Birthday Cards",
  "Cards",
  "Flower & Pants",
  "Computers",
  "Fashion",
  "Health",
  "Pharmacy",
  "Toys & Games",
];

const Navbar = () => {
  return (
    <>
      <header className="w-full">
      {/* Banner */}
      <div className="bg-orange-200 text-center text-xs py-2">
        <span>
          Our back-to-school sale is here! Save 15% on Coins for all your fall invitations with code BACKTOFALL. Ends 9/3.{' '}
          <a href="#" className="underline text-orange-600">Shop Now</a>
        </span>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href={`/`} className='no-underline'>
       
        <div className="flex items-center space-x-1 text-xl font-semibold">
          <span className="text-black">Group</span>
          <span className="text-orange-500">leaving</span>
          <span className="text-black">cards</span>
        </div>
        </Link>
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 px-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

        {/* Auth and Button */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600">Login</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">
            Sign In
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-6 text-sm text-gray-700 py-2 border-t">
        <a href="/card/farewell" className="hover:text-orange-500">Farewell</a>
        <a href="/card/birthday" className="hover:text-orange-500">Birthday Cards</a>
        <a href="/card/baby" className="hover:text-orange-500">New Baby</a>
        <a href="/card/retirement" className="hover:text-orange-500">Retirement</a>
        <a href="/card/sympathy" className="hover:text-orange-500">Sympathy</a>
        <a href="/card/wedding"className="hover:text-orange-500">Wedding</a>
        <a href="/card/welcome" className="hover:text-orange-500">Welcome</a>
        <a href="/card/thank-you" className="hover:text-orange-500">Thank You</a>
      </nav>
    </header>
    </>
  );
};

export default Navbar;
