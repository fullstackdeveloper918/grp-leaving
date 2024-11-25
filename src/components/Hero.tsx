"use client"
import Images from "@/constants/images";
import { List } from "antd";
import Image from "next/image";
import card_absolute from "../assets/images/card_absolute.png"
// import
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
      <section className="  dark:bg-gray-900  bg-cover bg-no-repeat  align-middle  homeBanner ">
       <div className="relative bg-hero_banner_new heroSectionHeight">
       <div className="container-fluid  py-8 mx-auto  xl:gap-0 lg:py-16  space-y-10 items-center">
          <div className=" mx-auto text-center w-full md:text-center xs:text-center lg:text-left ">
            <h1 className="bannerHeaderH1 text-center max-w-[50%] mx-auto">
              Group Greeting Cards{" "}
              <span className="text-white">for {displayedText||"''"}</span>
            </h1>
            <p className="text-white text-center font-medium mx-auto ">
            The simplest way to share a virtual greeting card with everyone in your office.
            </p>

            {/* <ul className="list-none flex xl:pl-7 lg:px-5 gap-10 justify-center ">
              <li className="relative listBefore ml-4 md:text-lg lg:text-lg font-medium text-white">Easy to share</li>
              <li className="relative listBefore ml-5 md:text-lg lg:text-lg font-medium text-white">Quick to create </li>
              <li className="relative listBefore ml-5 md:text-lg lg:text-lg font-medium text-white">Unlimited signatures</li>
            </ul> */}

           <div className="bannerButton">
           <a
              href="/create"
              className=" btnPrimary"
            > Start a group Card</a>
            <a
              href="/demo"
              className="btnSecondary ml-3"
            >              Try Our Demo Card
            </a>
           </div>
          </div>
          {/* <div className="lg:w-1/2 w-full"> */}
            {/* <Image
              src={Images.Hero}
              width={900}
              height={900}
              alt="hero_image"
            /> */}
          {/* </div> */}
        </div>
        <img src={card_absolute.src} className="absolute_img" alt="img card"/>
       </div>
        </section>
    </>
  );
};
export default Hero;