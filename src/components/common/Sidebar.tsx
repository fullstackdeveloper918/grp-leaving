"use client";
import { useRouter } from "next/navigation";
import React from "react";

const categories = [
  "Farewell",
  "Birthday",
  "Baby",
  "Wedding",
  "Get Well",
  "Sympathy",
  "Teacher",
  "Thank You",
  "Retirement",
  "Congratulations",
  "Anniversary",
  "Welcome",
  "New Home",
  "Boss",
];

const Sidebar = ({ urlValue }: { urlValue: string }) => {
  console.log(urlValue, "yyyyy");
  const router = useRouter();

  const handleClick = (category: string) => {
    console.log(category, "category");
    const formattedCategory = category.toLowerCase().replace(/\s+/g, '-');
    router.push(`/card/${formattedCategory}`);
  };
  return (
    <aside className="md:w-64 sm:w-100   rounded-[10px] bg-[#ffffffcc] border p-3 responiveSlider relative">
      <ul className="md:space-y-2    md:block flex md:space-x-0 space-x-3 items-start overflow-x-auto md:sticky md:top-5 md:m-0 p-0  md:w-100  w-[90%] m-auto ">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleClick(category)}
            className={`cursor-pointer ${
              urlValue === category.toLowerCase().replace(/\s+/g, '-')
                ? "text-white font-bold md:text-wrap text-nowrap relative bg-blueBg hover:bg-blueBg    " 
                : "text-gray-500 "
            } text-blackText md:text-wrap text-nowrap p-2 rounded-[6px] hover:bg-bgWhite hover:text-blueText px-3 hover:font-bold transition-all ease-in`}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
