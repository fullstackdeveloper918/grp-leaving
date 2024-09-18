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
              .map((card: any) => (
                <Image
                  src={card?.imageSrc}
                  alt="We will miss you - Enjoy your retirement"
                  className="rounded-lg object-cover"
                  height={300}
                  width={400}
                />
              ))}
          </div>

          {/* Choose another design */}
          <p className="mt-6 text-red-500 text-sm cursor-pointer hover:underline">
            Choose another design
          </p>
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
