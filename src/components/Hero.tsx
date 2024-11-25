"use client";
import Images from "@/constants/images";
import { List } from "antd";
import Image from "next/image";
import card_absolute from "../assets/images/card_absolute.png";
import banner_card from "../assets/images/banner_card_1.png";
import banner_flower from "../assets/images/banner_flower.png";
// import
import React, { useEffect, useState } from "react";
import cardData from "../constants/CardJson/card.json";
const categoriesName = [
  "Farewell",
  "Birthday",
  "Baby",
  "Wedding",
  "Get Well",
  "Sympathy",
  "Thank you",
  "Retirement",
  "Congratulations",
  "Anniversary",
  "Welcome",
  "New Home",
];
const Hero = (props: any) => {
  console.log(props, "props");

  const [displayedText, setDisplayedText] = useState("");
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
          setDisplayedText("");
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
  console.log(displayedText, "displayedText");

  return (
    <>
      <section className="  dark:bg-gray-900  bg-cover bg-no-repeat  align-middle  homeBanner ">


        {/********** slide 1 started  ***********/}
        <div className="relative bg-hero_banner_new slider_one heroSectionHeight">
          <div className="container-fluid  py-6 mx-auto  xl:gap-0 lg:py-14  space-y-10 items-center">
            <img src={banner_flower.src} className="card_img_left" />
            <img src={banner_card.src} className="card_img_left" />
            <div className=" mx-auto text-center w-full md:text-center xs:text-center lg:text-left ">
              <h1 className="bannerHeaderH1 text-center  mx-auto">
                Group Greeting Cards{" "}
                <span className="text-white">for {displayedText || "''"}</span>
              </h1>
              <p className="text-white text-center font-medium mx-auto ">
                The simplest way to share a virtual greeting card with everyone
                in your office.
              </p>
              <div className="bannerButton">
                <a href="/create" className=" btnPrimary">
                  {" "}
                  Start a group Card
                </a>
                <a href="/demo" className="btnSecondary ml-3">
                  {" "}
                  Try Our Demo Card
                </a>
              </div>
            </div>
            <img src={banner_card.src} className="card_img_right" />
          </div>
          <img
            src={card_absolute.src}
            className="absolute_img"
            alt="img card"
          />
        </div>
        {/************ slide 1 ended ************/}

        {/************ slide 2 started ************/}
        {/* <div className="relative bg-hero_banner_two  banner_slider_two heroSectionHeight">
          <div className="container-fluid  py-6 mx-auto  xl:gap-0 lg:py-14  space-y-10 items-center">
            <div className=" mx-auto text-center w-full md:text-lrft  slider_two  xs:text-center lg:text-left ">
              <h1 className="bannerHeaderH1 text-left ">
                Gratitude in Every Moment
              </h1>
              <p className=" text-left text-grey font-medium ">
                The most convenient way to share a virtual greeting card with
                your whole office.
              </p>
              <div className="bannerButton text-left">
                <a href="/create" className=" btnPrimary">
                  {" "}
                  Start a group Card
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/************ slide 2 ended ************/}
      </section>
    </>
  );
};
export default Hero;
