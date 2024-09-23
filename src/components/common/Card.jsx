import React from "react";
import Image from "next/image";
import Images from "@/constants/images";



const array = [
  {
    id: 1,
    image: Images.card_1,
    type: "farewell"
  },
  {
    id: 2,
    image: Images.card_2,
    type: "birthday"
  },
  {
    id: 3,
    image: Images.card_3,
    type: "wedding"
  },
  {
    id: 4,
    image: Images.card_4,
    type: "baby"
  },
  {
    id: 5,
    image: Images.card_5,
    type: "sympathy"
  },
  {
    id: 6,
    image: Images.card_2,
    type: "sympathy"
  },
  {
    id: 7,
    image: Images.card_3,
    type: "sympathy"
  },
]

// const array = [
//   'https://img.freepik.com/premium-psd/greeting-card-with-flowers-it-pink-background_74869-4261.jpg?w=826',
//   "https://img.freepik.com/premium-vector/simple-floral-thank-you-card-with-watercolor-background_694794-178.jpg?w=1380",
//   "https://img.freepik.com/premium-photo/wedding-invitation-with-flowers-flower-middle_1191871-49377.jpg?w=740",
//   "https://img.freepik.com/free-vector/elegant-daisy-flower-wedding-invitation-card-template_44538-9850.jpg?t=st=1726234933~exp=1726238533~hmac=76bd2c3ed266dec873f39372aaa1973615b57c50375696a913e26d05d5c0598f&w=1380",
//   "https://img.freepik.com/free-psd/beautiful-christmas-floral-wreath-frame-design_21799-10722.jpg?t=st=1726234955~exp=1726238555~hmac=c4406c10583bd202e08964dd43e645727f6f30c21b0db39506af66d271629888&w=1380",
//   "https://img.freepik.com/free-vector/summer-wedding-invitation_53876-92838.jpg?t=st=1726235013~exp=1726238613~hmac=83595c3903b855f20775c71b2bc347e136a2d79fd424053a26770c2514f71cdd&w=826",
//   "https://img.freepik.com/free-psd/beautiful-watercolor-wedding-invitation-card-with-elegant-flower-tiny-foliage_44538-10601.jpg?t=st=1726235036~exp=1726238636~hmac=d1dc9a692078bdca87612cb7db66afe125d8c3af762cab4f66d5add701eac784&w=1060"
// ]

const Card = ({ item, index }) => {


  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={`/card/new/1?category=${item?.type}`}>
          <Image
            className="rounded-t-lg w-100 h-100 object-cover"
            src={array[index]?.image}
            // width={250}
            // height={250}
            alt="card-img"
          />
        </a>
      </div>
    </>
  );
};

export default Card;
