import Hero from "@/components/Hero";
import React from "react";
import Card from "@/components/common/Card";
import Category from "@/components/Category";

const Home = async () => {
  return (
    <>
      <section className="">
        <div className="mt-96">
          <Hero />
        </div>

        <div className="mt-96">
          <h3>Explore all categories</h3>
          <div className="flex justify-center items-center gap-5">
            {Array.from({ length: 7 }).map((item) => (
              <>
                <Category />
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
            {Array.from({ length: 5 }).map((item) => (
              <>
                <Card />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
