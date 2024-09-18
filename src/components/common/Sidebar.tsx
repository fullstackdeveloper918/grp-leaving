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
    router.push(`/card/${category.toLowerCase()}`);
  };
  return (
    <aside className="w-64 bg-white p-4 border-r border-gray-300">
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleClick(category)}
            className={`cursor-pointer ${
              urlValue === category.toLowerCase()
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            } hover:text-blue-500`}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
