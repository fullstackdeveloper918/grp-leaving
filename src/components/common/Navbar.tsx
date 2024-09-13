import Link from "next/link";
import SearchBar from "../SearchBar";
import React from "react";

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
      <header>
        <nav className="">
          <div>
            <Link href="/" className="">
              Groupleavingcards
            </Link>
            <SearchBar />

            <div></div>

            <ul className="">
              <li>
                <Link href="/">Login</Link>
              </li>
              <li>
                <Link href="/">Sign in</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {links.map((link) => (
                <>
                  <li>{link}</li>
                </>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
