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
      <section className="bg-heroColor  dark:bg-gray-900 heroSectionHeight  align-middle d-flex homeBanner">
        <div className="container-fluid  py-8 mx-auto  xl:gap-0 lg:py-16 d-flex justify-between  lg:flex-nowrap flex-wrap space-y-10 items-center">
          <div className="lg:w-1/2 w-full md:text-center xs:text-center lg:text-left ">
            <h1 className="bannerHeaderH1">
              Group Greeting Cards{" "}
              <span className="text-blueText">for {displayedText||"''"}</span>
            </h1>
            <p className="text-blackText font-medium">
            The simplest way to share a virtual greeting card with everyone in your office.
            </p>

            <ul className="list-none d-flex xl:pl-7 lg:px-5 gap-10">
              <li className="relative listBefore ml-4 md:text-lg lg:text-lg font-medium">Easy to share</li>
              <li className="relative listBefore ml-5 md:text-lg lg:text-lg font-medium">Quick to create </li>
              <li className="relative listBefore ml-5 md:text-lg lg:text-lg font-medium">Unlimited signatures</li>
            </ul>

           <div className="bannerButton">
           <a
              href="/create"
              className=" btnPrimary"
            > Start a group Card</a>
            <a
              href="#"
              className="btnSecondary ml-3"
            >              Try Our Demo Card
            </a>
           </div>
          </div>
          <div className="lg:w-1/2 w-full">
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