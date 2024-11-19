"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Images from "@/constants/images";
import Image from "next/image";
import api from "@/utils/api";
import LogoutModal from "./LogoutModal";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies } from "nookies";
import GoodLuckCad from "../../assets/svg/GoodLuckCards.svg"
import register from "../../assets/images/register.png"
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
    // let res = await api.Auth.logout();
    // console.log(res, "qweqwe");
    destroyCookie(null, "token", { path: "/" });
    router.push(`/login`);
  };

  const confirmLogout = () => {
    handleLogout();
    setIsModalOpen(false);
  };
  const cookies = parseCookies();
  const accessToken = cookies.auth_token;
const getuserData= cookies.userInfo
if (getuserData) {
  try {
      const user_info = JSON.parse(getuserData);
      console.log(user_info, "user_info");
  } catch (error) {
      console.error("Error parsing JSON:", error);
  }
} else {
  console.error("getuserData is undefined or null.");
}

  return (
    <>
      <header className="w-full">
        {/* Banner */}
        {/* <div className="bg-blueBg text-center text-sm md:py-3 py-2 text-white ">
          <span className="w-4/5 px-2 d-block mx-auto md:text-sm text-sm container-fluid">
            Our back-to-school sale is here! Save 15% on Coins for all your fall
            invitations with code BACKTOFALL. Ends 9/3.{" "}
            <a href="#" className="underline text-white">
              Shop Now
            </a>
          </span>
        </div> */}

        {/* Main Header */}
        <div className="flex justify-between items-center md:py-4 md:px-6 px-2 py-3 container-fluid">
          {/* Logo */}
          <Link href={`/`} className="no-underline w-3/12">
          <Image src={GoodLuckCad.src} height={100} width={300} alt="Good Luck" className="text-4xl font-bold" />
          </Link>

          <div className="flex items-center space-x-4 w-9/12 justify-end">
            {/* Search Bar */}
            {/* <div className="relative hidden md:block w-1/3">
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
            </div> */}

            {/* Auth and Button */}
            <div className="flex items-center lg:space-x-4 sm:space-x-2">
            <a
                    href="/account/cards"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    Cards by occasion
                  </a>
                  <a
                    href="/account/cards"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    Cards
                  </a>
                  <a
                    href="/account/cards"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    Pricing
                  </a>
                  <a
                    href="/account/cards"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    Computers
                  </a>
                  <a
                    href="/account/cards"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    Fashion
                  </a>
              {accessToken ? 
                <>
                  <button
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Logout
                  </button>
                  <a
                    href="/account/cards"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    My Account
                  </a>
                  <div className="dropdown">
                    <img
                      src="https://img.freepik.com/premium-psd/greeting-card-…h-flowers-it-pink-background_74869-4261.jpg?w=826"
                      alt="Profile"
                      style={{
                        width: "40px", // Adjust size as needed
                        height: "40px", // Adjust size as needed
                        borderRadius: "50%", // Makes the image circular
                        cursor: "pointer", // Changes the cursor to indicate it's clickable
                      }}
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              : 
                <>
                  <a
                    href="/login"
                    className="text-sm text-blackText hidden md:block text-blackText no-underline"
                  >
                    Login
                  </a>

                  <Link href={`/register`}>
                    <button className="text-white px-3 py-2 rounded-md bg-blueBg d-hide-btn">
                      Register
                    </button>
                    <img src={register.src} alt="img" className="mobileVisible" />
                  </Link>
                </>
              }

              {isMobile ? (
                isMenuOpen ? (
                  <button
                    className="text-gray-600 z-20 absolute top-2 right-2"
                    onClick={handleMenuToggle}
                  >
                    {"✖"}
                  </button>
                ) : (
                  <button
                    className="text-gray-600 z-20 ml-2"
                    onClick={handleMenuToggle}
                  >
                    {"☰"}
                  </button>
                )
              ) : null}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        {/* {isMobile ? (
          <nav
            className={`md:hidden text-sm text-gray-700  absolute inset-x-0 top-16 transition-transform duration-300 p-5 top-0 bg-white z-10 h-lvh ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <a
              href="/card/farewell"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0  border-b border-[#f6faff]"
            >
              Farewellsf
            </a>
            <a
              href="/card/birthday"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Birthday Cards
            </a>
            <a
              href="/card/baby"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              New Baby
            </a>
            <a
              href="/card/retirement"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Retirement
            </a>
            <a
              href="/card/sympathy"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Sympathy
            </a>
            <a
              href="/card/wedding"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Wedding
            </a>
            <a
              href="/card/welcome"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Welcome
            </a>
            <a
              href="/card/thank-you"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Thank You
            </a>
          </nav>
        ) : (
          <nav className="hidden md:flex md:justify-center md:space-x-6 text-sm text-gray-700 py-2 bg-white">
            <a
              href="/card/farewell"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Farewell
            </a>
            <a
              href="/card/birthday"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Birthday Cards
            </a>
            <a
              href="/card/baby"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              New Baby
            </a>
            <a
              href="/card/retirement"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Retirement
            </a>
            <a
              href="/card/sympathy"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Sympathy
            </a>
            <a
              href="/card/wedding"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Wedding
            </a>
            <a
              href="/card/welcome"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Welcome
            </a>
            <a
              href="/card/thank-you"
              className="block lg:px-4 md:px-2 py-2 hover:text-blueText no-underline text-black m-0"
            >
              Thank You
            </a>
          </nav>
        )} */}
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
