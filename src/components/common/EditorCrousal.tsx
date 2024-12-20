"use client";
import React, { useState } from "react";
import Slider from "react-slick";
const EditorCrousal = () => {
  const [centerIndex, setCenterIndex] = useState(0); // Track the center image index
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true, // Ensures scaling is applied on focus
    beforeChange: (current: any, next: any) => {
      setCenterIndex(next); // Update center index before the change
    },
    afterChange: (current: any) => {
      setCurrentSlide(current); // Update current slide index for progress bar
    },
  };
  const images = [
    "https://groupleavingcards.com/assets/design/617318f94c962c605abdeabb.jpg",
    "https://groupleavingcards.com/assets/design/66bd382d51e4bce9bdd31fc6_sm.avif",
    "https://groupleavingcards.com/assets/design/66e30136ffa5cb04d55d990e_sm.avif",
    "https://groupleavingcards.com/assets/design/6734d2bbe8c991dba26a0288_sm.webp",
    "https://groupleavingcards.com/assets/design/66967675b0d2b479aa568c98_sm.avif",
    "https://groupleavingcards.com/assets/design/66d88499b4fb75024aa2d8de_sm.avif",
    // "blob:http://localhost:3000/b4d9188d-acbc-4368-9679-9cf3a1086d12"
  ];
  return (
    <div className="slider-container mt-3" style={{ padding: "0px 30px" }}>
      <div style={{ position: "relative", height: "700px" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "15px",
                  objectFit: "cover",
                  transition: "transform 0.5s, height 0.5s, margin-top 0.5s",
                  marginTop: index === centerIndex ? "0px" : "66px", // Adjust top margin for side images
                  transform:
                    index === centerIndex
                      ? "scale(1.1)" // Center image will scale up
                      : "scale(0.9)", // Side images will scale down
                  height: index === centerIndex ? "600px" : "500px", // Adjust height for center and side images
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Image Count (Page 1 of 7) */}
        <div
          style={{
            position: "absolute",
            bottom: "50px", // Positioning just above the progress bar
            left: "50%",
            transform: "translateX(-50%)",
            color: "#000000",
            fontSize: "18px",
            // fontWeight: "bold",
          }}
        >
          Page {currentSlide + 1} of {images.length}
        </div>

        {/* Progress Bar with Navigation Icons */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "0",
            width: "100%",
            height: "5px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            padding: "0 30px", // Space for the icons
          }}
        >
          {/* Left Navigation Icon */}
          {/* <div
            className="slick-prev"
            style={{
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontSize: "24px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            &lt;
          </div> */}

          {/* Progress Bar Fill */}   
          <div
            style={{
              height: "5px", // Fixed height for the progress bar
              width: "100%", // Full width of the progress bar
              backgroundColor: "#e0e0e0", // Light gray background for the unfilled portion
              borderRadius: "5px",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((currentSlide + 1) / images.length) * 100}%`, // Calculate the progress width
                backgroundColor: "#007bff", // The filled color
                borderRadius: "5px",
                transition: "width 0.5s ease-in-out", // Smooth transition
              }}
            ></div>
          </div>

          {/* Right Navigation Icon */}
          {/* <div
            className="slick-next"
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontSize: "24px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            &gt;
          </div> */}
        </div>
      </div>
    </div>
    // <div className="slider-container mt-3" style={{ padding: "0px 30px" }}>
    //         <div className="" style={{ height: "700px" }}>
    //             <Slider {...settings}>
    //                 {images.map((image, index) => (
    //                     <div key={index}>
    //                         <img
    //                             src={image}
    //                             alt={`Slide ${index + 1}`}
    //                             className={`carousel-image ${index === centerIndex ? 'center-image' : ''}`} // Add custom class for center image
    //                         />
    //                     </div>
    //                 ))}
    //             </Slider>
    //         </div>
    //     </div>
  );
};

export default EditorCrousal;
