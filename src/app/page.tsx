import Hero from "@/components/Hero";
import React from "react";
import Card from "@/components/common/Card";
import Category from "@/components/Category";
import { fetchFromServer } from "./actions/fetchFromServer";
import { Api } from "@/interfaces/interfaces";

const Home = async () => {

  const api: Api = {
    url: 'https://fakestoreapi.com/products',
    method: 'GET',
    // body: { key: 'value' } 
  };
  
    const data = await fetchFromServer(api);
    console.log(data,"apiRes");
  return (
    <>
      <section className="">
        <div className="mt-96">
          <Hero />
        </div>

        <div className="mt-96">
          <h3>Explore all categories</h3>
          <div className="flex justify-center items-center gap-5">
            {data.slice(0,7).map((item:any, index:number) => (
              <>
                <Category item={item} index={index}/>
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
            {data.slice(0,5).map((item:any, index:number) => (
              <>
                <Card item={item} index={index}/>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
