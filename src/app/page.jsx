import Hero from "@/components/Hero";
import React from "react";
import Card from "@/components/common/Card";

const Home = async () => {
  return (
    <>
      <section className="">
        <div className="mt-96">
          <Hero />
        </div>

        <div className="mt-96">
          <h3>Explore all categories</h3>
        </div>

        <div>
          <h3>
            We have Group Greeting Cards for all occasions  Premium cards start
            at $1
          </h3>
          {Array.from({ length: 9 })
          .map((item) => (
            <>
              <Card />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
