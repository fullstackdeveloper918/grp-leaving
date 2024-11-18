"use client"
import Images from "@/constants/images";
import { List } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cardData from "../constants/CardJson/card.json";
import herobannner1 from "../assets/images/1.png"
import herobannner2 from "../assets/images/2.png"
import herobannner3 from "../assets/images/3.png"
import herobannner4 from "../assets/images/4.png"
import herobannner5 from "../assets/images/5.png"
// import Slider from 'react-slick';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Silder from "./common/Silder";

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
const settings = {
  dots: true,
  // infinite: true,
  // speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
// const images = [
//   Images.herobannner1,
//   Images.herobannner2,
//   Images.herobannner3,
//   Images.herobannner4,
//   Images.herobannner5
// ];
const images = [
  herobannner1,
  herobannner2,
  herobannner3,
  herobannner4,
  herobannner5,
];
console.log(images,"lkjk");
const responsive = {
  superLargeDesktop: {
    // Screens larger than 2560px
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    // Screens larger than 1024px
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    // Screens larger than 464px
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    // Screens smaller than 464px
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
  return (
    <>
      <section className="bg-heroImage  bg-cover bg-no-repeat dark:bg-gray-900 heroSectionHeight  align-middle d-flex">
        <div className="container-fluid  py-8 mx-auto  xl:gap-0 lg:py-16 d-flex justify-between flex-col lg:flex-nowrap flex-wrap space-y-10 items-center">
          <div className=" mx-0	 d-flex flex-col items-center	 w-full md:text-center xs:text-center lg:text-left ">
            <h1 className="max-w-6xl mx-0	 w-full text-center	pb-6 text-4xl tracking-tight  md:text-6xl xl:text-8xl dark:text-white text-black xl:leading-extra-loose lineHeight">
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
          <div className="w-full gap-3 d-flex justify-content-center images-div">
        
        {/* {images.map((image, index) => (
          <div key={index}>
          <Image 
              src={image.src} 
              alt={`Slide ${index + 1}`} 
              layout="responsive" 
              width={1200} 
              height={600}
              objectFit="cover"
            />
          </div>
        ))} */}
          </div>
          
        </div>
      </section>
       <Silder/>
    

    </>
  );
};
export default Hero;
