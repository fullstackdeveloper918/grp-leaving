import Hero from "@/components/Hero";
import React from "react";
import Card from "@/components/common/Card";
import Category from "@/components/Category";
import { fetchFromServer } from "./actions/fetchFromServer";
import { Api } from "@/interfaces/interfaces";
import Image_text_Card from "@/components/common/Image_text_Card";
import CustomerReview from "@/components/common/CustomerReview";
import Cards_works from "@/components/common/Cards_works";
import NewsletterForm from "@/components/Newsletter";
import Link from "next/link";
import cardData from "../constants/CardJson/card.json";
import { Carousel, Col, Row } from "antd";
import Image from "next/image";
import { capFirst } from "@/utils/validation";
// import 'antd/dist/antd.css';
const Home = async () => {
  const api: Api = {
    url: "https://fakestoreapi.com/products",
    method: "GET",
    // body: { key: 'value' }
  };

  const data = await fetchFromServer(api);
  console.log(data, "apiRes");
  // const chunkArray = (arr: any[], size: number) => {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i += size) {
  //     result.push(arr.slice(i, i + size));
  //   }
  //   return result;
  // };

  // const categoriesChunks = chunkArray(cardData.data, 5);
  const chunkArray = (arr: any, size: any) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
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
  const categoriesChunks = chunkArray(cardData.data, 5);
  return (
    <>
      <section className="">
        <div className="mt-50">
          <Hero {...cardData}/>
        </div>

        {/* <div className="container-fluid text-center py-12">
          <h3 className="xl:text-4xl md:text-xl sm:text-md font-semibold ">
            Explore all categories
          </h3>
          <div className="flex justify-center items-center gap-5 mt-5">
          
              {cardData.data.map((chunk, index) => (
                <div key={index}>
                  <Category item={chunk} index={index} />
                </div>
              ))}
          </div>
        </div> */}
        <div className="container-fluid text-center py-12">
          <h3 className="xl:text-4xl md:text-xl sm:text-md font-semibold ">
            Explore all categories
          </h3>
          <div style={{ padding: "20px" }}>
            <Carousel autoplay>
              {categoriesChunks.map((chunk, index) => (
                <div key={index}>
                  <div className="flex justify-center items-center gap-5 mt-5">
                    {chunk.map((category: any, i: any) => (
                      <div key={i}>
                        <div
                          style={{
                            display: "d-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100px",
                          }}
                        >
                          <Category item={category} index={i} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          {capFirst(category.type)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
            {/* </Row> */}
          </div>
        </div>
        <div className="container-fluid text-center py-12">
        <h3 className="xl:text-4xl md:text-xl sm:text-md font-semibold lg:max-w-[50%] md:max-w-[60%] max-w-[100%] mx-auto">
            We have Group Greeting Cards for all occasions <span className="text-blueText"> Premium </span> cards start
            at <span className="text-blueText">$1 </span>
          </h3>
          <div className="flex justify-center items-center gap-5 mt-5">
            {cardData?.data?.slice(0, 5).map((item: any, index: number) => (
              <>
                <Card item={item} index={index} />
              </>
            ))}
          </div>
        </div>

        {/* Section 4 */}

        <Image_text_Card />

        {/* Section 5 */}
        <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">How group cards work?</h1>
            <p className="text-lg text-gray-600 mb-8">
              How to create a group ecard signed by multiple people.
            </p>
          </div>
          <Cards_works />
          <div className="mt-8">
            <Link href={`/create`}>
              <button className="bg-orange-400 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-500">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* Section 6 */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              See Why Our Customers Love Our Cards
            </h2>

            {/* Reviews Grid */}

            <CustomerReview />
          </div>
        </div>

        {/* Section 7 */}
        <NewsletterForm />
      </section>
    </>
  );
};

export default Home;
