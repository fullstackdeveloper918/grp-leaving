// components/ImageSlider.js
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import cardData from "../../constants/CardJson/card.json";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Card from "./Card";
const ImageSlider = () => {
  return (
      <div >
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Pagination, Scrollbar]} // Use modules array here
        >
          {cardData?.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default ImageSlider;
