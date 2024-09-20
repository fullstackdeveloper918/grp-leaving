"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Images from "@/constants/images";
import Image from "next/image";
import api from "@/utils/api";
import LogoutModal from "./LogoutModal";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    let res = await api.Auth.logout();
    console.log(res, "qweqwe");
    router.push(`/login`);
  };

  const confirmLogout = () => {
    handleLogout();
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-full">
        {/* Banner */}
        <div className="bg-blueBg text-center text-sm md:py-3 py-2 text-white ">
          <span className="w-4/5 px-2 d-block mx-auto md:text-sm text-sm container-fluid">
            Our back-to-school sale is here! Save 15% on Coins for all your fall invitations with code BACKTOFALL. Ends 9/3.  {' '}
            <a href="#" className="underline text-white">Shop Now</a>
          </span>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center md:py-4 md:px-6 px-2 py-3 container-fluid">
          {/* Logo */}
          <Link href={`/`} className="no-underline w-3/12">
            <div className="flex items-center text-2xl font-semibold">
              <span className="text-black">Group</span>
              <span className="text-blueText">leaving</span>
              <span className="text-black">cards</span>
            </div>
          </Link>

          <div className="flex items-center space-x-4 w-9/12 justify-end">
            {/* Search Bar */}
            <div className="relative hidden md:block w-1/3">
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 px-2 border rounded-[6px] focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Image
                  src={Images.Search}
                  alt="search"
                  width={20}
                  height={20}
                />
              </span>
            </div>

            {/* Auth and Button */}
            <div className="flex items-center space-x-4">
              <a
                href="/login"
                className="text-sm text-blackText hidden md:block text-blackText no-underline"
              >
                Login
              </a>
             
              <button className="text-sm text-blackText hidden md:block text-blackText no-underline" onClick={() => setIsModalOpen(true)}>
                Logout
              </button>
              {/* Mobile Menu Button */}
              {/* {isMobile ? (
                <button className="text-gray-600 z-20 relative" onClick={handleMenuToggle}>
                  {isMenuOpen ? "✖" : "☰"}
                </button>
              ) : null} */}
               <Link href={`/register`}>
                <button className="text-white px-3 py-2 rounded-md bg-blueBg">
                  Register
                </button>
              </Link>
               {isMobile ? (
                isMenuOpen ? (
                  <button className="text-gray-600 z-20 absolute top-2 right-2" onClick={handleMenuToggle}>
                    {"✖"}
                  </button>
                ) : (
                  <button className="text-gray-600 z-20 " onClick={handleMenuToggle}>
                    {"☰"}
                  </button>
                )
              ) : null}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        {isMobile ? (
          <nav
            className={`md:hidden text-sm text-gray-700  absolute inset-x-0 top-16 transition-transform duration-300 p-5 top-0 bg-white z-10 h-lvh ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <a href="/card/farewell" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0  border-b border-[#f6faff]">
              Farewellsf
            </a>
            <a href="/card/birthday" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Birthday Cards
            </a>
            <a href="/card/baby" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              New Baby
            </a>
            <a href="/card/retirement" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Retirement
            </a>
            <a href="/card/sympathy" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Sympathy
            </a>
            <a href="/card/wedding" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Wedding
            </a>
            <a href="/card/welcome" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Welcome
            </a>
            <a href="/card/thank-you" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Thank You
            </a>
          </nav>
        ) : (
          <nav className="hidden md:flex md:justify-center md:space-x-6 text-sm text-gray-700 py-2 bg-white">
            <a href="/card/farewell" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Farewell
            </a>
            <a href="/card/birthday" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Birthday Cards
            </a>
            <a href="/card/baby" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              New Baby
            </a>
            <a href="/card/retirement" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Retirement
            </a>
            <a href="/card/sympathy" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Sympathy
            </a>
            <a href="/card/wedding" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Wedding
            </a>
            <a href="/card/welcome" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Welcome
            </a>
            <a href="/card/thank-you" className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0">
              Thank You
            </a>
          </nav>
        )}
      </header>
      <LogoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={confirmLogout} 
      />
    </>
  );
};

export default Navbar;
