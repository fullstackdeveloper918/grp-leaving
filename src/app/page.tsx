// import { fetchCards, fetchCards1, fetchCardsType, fetchReview,  } from "@/utils/fakeApi";
// import Main from "../components/Home";
// import { user } from "@/utils/cybersifyApi";
// import { fetchData } from "@/utils/fetchUtils";
// interface Data {
//   id: number;
//   name: string;
// }
// const Home = async () => {
//   const res = await fetchCards();
//   const postData = {
//     id: '1',
//   };
//   // const response = await fetchData(user.listing,"GET")
//   const apiRes =await fetchData(user.add,"POST",postData )
//   console.log(apiRes,"gggg");

//   // const qwerty= await Users()
//   const reviewRes= await fetchReview()
//   const cardType= await fetchCardsType()
//   // console.log(qwerty, "res");

//   return (
//     <main className="">
//       <Main {...res} {...reviewRes} {...cardType} />
//     </main>
//   );
// };
// export default Home;

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
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
