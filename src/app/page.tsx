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
import Images from "@/constants/images";

import ExpolreallcategoryCraousal from "@/components/ExpolreallcategoryCraousal";
// import 'antd/dist/antd.css';
const Home = async () => {
  const api: Api = {
    url: "https://fakestoreapi.com/products",
    method: "GET",
    // body: { key: 'value' }
    // comment only
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
       <ExpolreallcategoryCraousal/>
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
        <div className=" bg-workBg  py-16">
          <div className="text-center container-fluid ">
            <h1 className="xl:text-4xl md:text-xl sm:text-md font-semibold">How group cards work?</h1>
            <p className="text-xl text-gray-600 font-semibold mb-8">
              How to create a group ecard signed by multiple people.
            </p>
          </div>
          <Cards_works />
          <div className="text-center mt-8">
            <Link href={`/create`}>
              <button className="btnPrimary px-4  py-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* Section 6 */}
        <div className="bg-testimonialBg bg-no-repeat py-12">
          <div className=" mx-auto px-5 text-center container-fluid">
            <h2 className="xl:text-4xl md:text-xl sm:text-md font-semibold mb-10">
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
