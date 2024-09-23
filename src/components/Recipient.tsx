import Image from "next/image";
import React from "react";
import MultiStepForm from "./common/MultiStepForm";
import cardData from "../constants/CardJson/card.json";
const Recipient = ({ searchParams }: any) => {
  console.log(searchParams?.category);
  return (
    <div className="min-h-screen flex">
      {/* Left Part - Card Design */}
      <div className="w-1/2 bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-1">Create a Group Card</h1>
          <p className="text-gray-500 mb-6">
            Watering can {searchParams?.category} card
          </p>

          {/* Card Image */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            {cardData.data
              .filter((card) => card.type === searchParams?.category)
              .map((card: any, index:number) => (
                <span key={index}>
                <Image
                  src={card?.imageSrc}
                  alt="We will miss you - Enjoy your retirement"
                  className="rounded-lg object-cover"
                  height={300}
                  width={400}
                />
                </span>
              ))}
          </div>

          {/* Choose another design */}
          <a href={`/card/${searchParams?.category}`} className="text-red-500 no-underline">
          <p className="mt-6 text-red-500 text-sm  hover:underline">
            Choose another design
          </p>
          </a>
        </div>
      </div>

      {/* Right Part - Form Section */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <MultiStepForm />
      </div>
    </div>
  );
};

export default Recipient;
