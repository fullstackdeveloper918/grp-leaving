"use client"
import React from 'react'
import Slider from "react-slick";
const EditorCrousal = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
      };
      const images = [
        "https://groupleavingcards.com/assets/design/617318f94c962c605abdeabb.jpg",
        "https://groupleavingcards.com/assets/design/66bd382d51e4bce9bdd31fc6_sm.avif",
        "https://groupleavingcards.com/assets/design/6734d53ce8c991dba26a1a78_sm.webp",
        "https://groupleavingcards.com/assets/design/6734d2bbe8c991dba26a0288_sm.webp",
        "https://groupleavingcards.com/assets/design/66967675b0d2b479aa568c98_sm.avif",
        "https://groupleavingcards.com/assets/design/66d88499b4fb75024aa2d8de_sm.avif",
        "blob:http://localhost:3000/b4d9188d-acbc-4368-9679-9cf3a1086d12"
      ];
  return (
    <div className="slider-container mt-3" style={{padding: "0px 30px"}}>
        <div className="" style={{height:"700px"}}>
      <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "700px", borderRadius: "8px",objectFit:"cover" }} />
        </div>
      ))}
      </Slider>
      </div>

    </div>
  )
}

export default EditorCrousal