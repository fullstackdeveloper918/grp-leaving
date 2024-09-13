"use client";
import React, { useEffect, useState } from "react";
import bannerImage from "../assets/images/back_header.webp";
import Cards from "./common/Card";
import CustomerReview from "./common/CustomerReview";
import Image_text_Card from "./common/Image_text_Card";
import Join_company from "./common/Join_company";
import Cards_works from "./common/Cards_works";
import { Button, Card, Carousel, Col, Rate, Row, Tag, Typography } from "antd";
const { Title, Text } = Typography;
import Image from "next/image";
import Meta from "antd/es/card/Meta";
import { PlusOutlined } from "@ant-design/icons";
const logos = [
  { src: "/airbnb.png", alt: "Airbnb" },
  { src: "/harris.png", alt: "Harris" },
  { src: "/scotiabank.png", alt: "Scotiabank" },
  { src: "/toronto_pearson.png", alt: "Toronto Pearson" },
  { src: "/accenture.png", alt: "Accenture" },
  { src: "/novartis.png", alt: "Novartis" },
  { src: "/cloudlex.png", alt: "Cloudlex" },
];

const categories = [
  { name: "Deals", icon: "/deals.png" },
  { name: "Business Cards", icon: "/business_cards.png" },
  { name: "Print Advertising", icon: "/print_advertising.png" },
  { name: "Banners & Displays", icon: "/banners_displays.png" },
  { name: "Labels & Packaging", icon: "/labels_packaging.png" },
  { name: "Clothing & Bags", icon: "/clothing_bags.png" },
  { name: "Promotional Products", icon: "/promotional_products.png" },
  { name: "Invitations & Stationery", icon: "/invitations_stationery.png" },
  { name: "Wedding Shop", icon: "/wedding_shop.png" },
  { name: "Websites by Vista", icon: "/websites_by_vista.png" },
];

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
// 

const ITEMS_PER_SLIDE = 5;

const splitIntoChunks = (array: any, size: number): any[] => {
  const result: any[] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
const Home = (props: any) => {
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
  const rating = 4.5;
  const chunkArray = (arr: any, size: any) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const categoriesChunks = chunkArray(categories, 5);
  const chunks = splitIntoChunks(props?.data, ITEMS_PER_SLIDE);
  return (
    <div className="container mt-3">
      <div className="row">
        {/* section 1 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px",
            backgroundColor: "#fef5f1",
          }}
        >
          {/* Text Section */}
          <div style={{ flex: 1 }}>
            {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span>Read our <strong>1479</strong> reviews</span>
            <Rate allowHalf defaultValue={rating} disabled style={{color:'#07bc0c'}}/>
          </div> */}
            <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
              Group Greeting Cards
            </h1>
            <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
              <span style={{ color: "#e60050" }}>
                for {displayedText || " "}
              </span>
            </h1>
            

            <p style={{ fontSize: "1.2rem", color: "#666", marginTop: "20px" }}>
              The easiest way to pass a virtual greeting card around your
              office.
            </p>

            <div style={{ marginTop: "20px" }}>
              <button
                style={{
                  backgroundColor: "#0033cc" /* Dark Blue */,
                  color: "#fff",
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  marginRight: "20px",
                }}
              >
                Start A group Card
              </button>
              <a
                href="#"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  border: "2px solid black" /* Added black border */,
                  padding:
                    "0.5rem" /* Optional: Add padding for better appearance */,
                  borderRadius: "4px",
                }}
              >
                Try Our Demo Card
              </a>
            </div>
            <Row
              justify="center"
              gutter={16}
              className="mt-3"
              style={{ marginBottom: "40px" }}
            >
              <Col span={8}>
                <Text>✅ Easy to share</Text>
              </Col>
              <Col span={8}>
                <Text>✅ Quick to create</Text>
              </Col>
              <Col span={8}>
                <Text>✅ Unlimited signatures</Text>
              </Col>
            </Row>
          </div>

          {/* Image Section */}
          <div style={{ flex: 1 }}>
            <img
              src={bannerImage.src}
              alt="Celebration"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          {/* Header */}
          <h1
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Trusted by Over Seven Million Users
          </h1>
          <p style={{ textAlign: "center", marginBottom: "40px" }}>
            We take immense pride in serving individuals, charities, and
            corporate businesses with our virtual group cards.
          </p>

          {/* Logo Carousel */}
          <Carousel autoplay>
            {logos.map((logo, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100px",
                }}
              >
                <Image src={logo.src} alt={logo.alt} width={120} height={80} />
              </div>
            ))}
          </Carousel>

          {/* Categories Section */}
          <h2 style={{ textAlign: "center", margin: "40px 0 20px" }}>
            Explore All Categories
          </h2>
          {/* <Row gutter={[16, 16]}> */}
          <Carousel autoplay>
            {categoriesChunks.map((chunk, index) => (
              <div key={index}>
                <Row gutter={[16, 16]}>
                  {chunk.map((category: any, i: any) => (
                    <Col xs={12} sm={8} md={6} lg={4} key={i}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100px",
                        }}
                      >
                        <Image
                          src={category.icon}
                          alt={category.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div style={{ textAlign: "center" }}>{category.name}</div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Carousel>
          {/* </Row> */}
        </div>
        {/* section 2 */}
        <div
          style={{
            padding: "50px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Get Started by Selecting a Card Design or Uploading Your Own!
          </h1>

          {/* Subtext */}
          <p style={{ fontSize: "18px", color: "#555" }}>
            All cards include{" "}
            <strong style={{ textDecoration: "underline", color: "#000" }}>
              unlimited messages and pages
            </strong>
            . You can change your design at any time before sending.
          </p>

          {/* Card Images */}
          {/* <Row gutter={[20, 20]} justify="center" style={{ marginBottom: '40px' }}> */}
          <Carousel autoplay>
            {chunks.map((chunk, index) => (
              <div key={index}>
                <div style={{ display: "flex" }} key={index}>
                  {chunk.map((card:any, idx:any) => (
                    <Col key={idx} xs={24} sm={12} md={8} lg={6} >
                      <Card
                        hoverable
                        cover={<img alt={card.title} src={card.img} />}
                        // actions={
                        //   card.isNew ? [<Tag color="orange">New</Tag>] : []
                        // }
                      >
                        <Meta title={card.title} />
                      </Card>
                    </Col>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
          {/* </Row> */}

          {/* Button */}
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size="large"
          >
            See more designs
          </Button>
        </div>

        {/* section 2 */}
        <Cards {...props} />
        {/* section 3 */}
        <CustomerReview {...props} />

        {/* section 4 */}

        <Image_text_Card />

        {/* section 5 */}
        <Join_company />

        {/* section 6 */}
        <Image_text_Card />

        {/* section 7 */}
        <Cards_works />

        {/* section 8 */}
        <Image_text_Card />

        {/* section 9 */}
        <Image_text_Card />
      </div>
    </div>
  );
};

export default Home;
// import Hero from '../components/Hero'



// import React from 'react'

// const  Home = async() => {
//   return (
//     <>
//      <Hero />
//     </>
//   )
// }

// export default Home
