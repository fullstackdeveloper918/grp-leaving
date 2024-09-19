"use client"
import Images from "@/constants/images";
import { List } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cardData from "../constants/CardJson/card.json";
const categoriesName = ['Farewell', 'Birthday', 'Baby', 'Wedding', 'Get Well', 'Sympathy', 'Thank you', 'Retirement', 'Congratulations', 'Anniversary', 'Welcome', 'New Home'];
const Hero = (props:any) => {
 console.log(props,"props");

const [displayedText, setDisplayedText] = useState('');
const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
const [isTyping, setIsTyping] = useState(true);
const [categoryName, setCategoryName] = useState(props?.data[0]);

useEffect(() => {
  const typeWriter = (text: string, index: number) => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text[index]);
      setTimeout(() => typeWriter(text, index + 1), 100); 
    } else {
      setIsTyping(false);
      setTimeout(() => {
        setDisplayedText('');
        setIsTyping(true);
        setCurrentCategoryIndex((prev) => (prev + 1) % categoriesName.length);
      }, 1500); 
    }
  };

  if (isTyping) {
    setCategoryName(categoriesName[currentCategoryIndex]);
    typeWriter(categoriesName[currentCategoryIndex], 0);
  }
}, [currentCategoryIndex, isTyping]); 
console.log(displayedText,"displayedText");

  return (
    <>
      <section className="bg-heroBg dark:bg-gray-900 heroSectionHeight  align-middle d-flex">
        <div className="container-fluid  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 d-flex justify-between">
          <div className="place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight  md:text-5xl xl:text-6xl dark:text-white text-black leading-extra-loose">
              Group Greeting Cards{" "}
              <span className="text-blueText">for {displayedText||"''"}</span>
            </h1>
            <p className="text-black max-w-2xl mb-6 font-normal lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">
              The easiest way to pass a virtual greeting card around your
              office.
            </p>

            <ul className="list-none d-flex px-3 gap-10">
              <List className="relative listBefore ml-4 md:text-lg lg:text-lg">Easy to share</List>
              <List className="relative listBefore ml-5 md:text-lg lg:text-lg">Quick to create </List>
              <List className="relative listBefore ml-5 md:text-lg lg:text-lg">Unlimited signatures</List>
            </ul>

           <div className="mt-5">
           <a
              href="/create"
              className=" inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 no-underline bg-blueBg text-white"
            > Start a group Card            </a>
            <a
              href="#"
              className="text-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-[#282828] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-2 no-underline hover:bg-blueBg hover:text-white"
            >              Try Our Demo Card
            </a>
           </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={Images.Hero}
              width={900}
              height={900}
              alt="hero_image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
