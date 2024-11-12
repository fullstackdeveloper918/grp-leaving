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
      <section className="bg-heroImage  bg-cover bg-no-repeat dark:bg-gray-900 heroSectionHeight  align-middle d-flex">
        <div className="container-fluid  py-8 mx-auto  xl:gap-0 lg:py-16 d-flex justify-between flex-col lg:flex-nowrap flex-wrap space-y-10 items-center">
          <div className=" mx-0	 d-flex flex-col items-center	 w-full md:text-center xs:text-center lg:text-left ">
            <h1 className="max-w-6xl mx-0	 w-full text-center	pb-6 text-4xl tracking-tight  md:text-8xl xl:text-10xl dark:text-white text-black xl:leading-extra-loose lineHeight">
            Virtual group cards <b >Made <span className="textColor">Easy</span></b> 
            {/* {" "} */}
              {/* <span className="text-blueText">for {displayedText||"''"}</span> */}
            </h1>
            <p className="text-black max-w-6xl mx-0	 d-flex justify-center w-full text-center pb-6 font-normal lg:mb-6 md:text-lg lg:text-xl  font-medium">
            Effortlessly send online cards for all occasions, including birthdays, farewells, and thank you notes! Plus, you can add a gift card from a wide selection of  our partnered merchants.
            </p>

            {/* <ul className="list-none d-flex xl:pl-8 lg:px-5 gap-10">
              <List className="relative listBefore ml-4 md:text-lg lg:text-xl font-medium">Easy to share</List>
              <List className="relative listBefore ml-5 md:text-lg lg:text-xl font-medium">Quick to create </List>
              <List className="relative listBefore ml-5 md:text-lg lg:text-xl font-medium">Unlimited signatures</List>
            </ul> */}

           <div className="d-flex justify-center">
           <a
              href="/create"
              className=" btnPrimary"
            >Get Started</a>
            <a
              href="#"
              className="btnSecondary ml-3"
            >Explan card
            </a>
           </div>
          </div>
          <div className="w-full">
            <Image
              src={Images.HeroImg}
              width={1200}
              height={500}
              alt="hero_image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
