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
const Home = async () => {
  const api: Api = {
    url: "https://fakestoreapi.com/products",
    method: "GET",
    // body: { key: 'value' }
  };

  const data = await fetchFromServer(api);
  console.log(data, "apiRes");
  return (
    <>
      <section className="">
        <div className="mt-50">
          <Hero />
        </div>

        <div className="mt-55">
          <h3 className="">Explore all categories</h3>
          <div className="flex justify-center items-center gap-5">
            {data.slice(0, 7).map((item: any, index: number) => (
              <>
                <Category item={item} index={index} />
              </>
            ))}
          </div>
        </div>

        <div>
          <h3>
            We have Group Greeting Cards for all occasions  Premium cards start
            at $1
          </h3>
          <div className="flex justify-center items-center gap-5">
            {data.slice(0, 5).map((item: any, index: number) => (
              <>
                <Card item={item} index={index} />
              </>
            ))}
          </div>
        </div>

        {/* Section 4 */}

        <Image_text_Card />

        {/* Section 5 */}

        <Cards_works />
        {/* Section 6 */}
        <CustomerReview />

        {/* Section 7 */}
        <NewsletterForm />
      </section>
    </>
  );
};

export default Home;
