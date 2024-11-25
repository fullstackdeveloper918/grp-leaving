"use client"
import CopyclickBoard from "@/components/common/CopyclickBoard";
import EscrowPayment from "@/components/EscrowPayment";
import GiftCardCollectionPot from "@/components/GiftCardCollectionPot";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
        <h1 className="text-3xl font-bold mb-4">qwerty</h1>
        <div className="flex justify-between mb-4 items-center justify-center">
          <button className="bg-blue-600 border-2 border-blue-700 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Edit Collection
          </button>
          <button className="bg-blue-600  border-2 border-blue-700 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Lock Collection
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          You have not set a delivery date yet. Set a delivery date now to
          encourage people to contribute, or send your gift immediately by
          pressing the <span className="font-semibold">Send Now</span> button.
        </p>
        <button className="bg-blue-600 border-2 border-blue-700 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Send Now
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <div className="bg-white shadow-md rounded-lg p-6 ">
            <h2 className="text-lg font-semibold mb-2">Abhay Singh</h2>
            <p className="text-gray-500 mb-4">Organiser</p>
            <div className="flex">
              <button className="text-blue-600 hover:underline mb-2">
                Add message to your team
              </button>
            </div>
            <CopyclickBoard />
            <div className="mt-4 border-t pt-4">
              <h3 className="text-md font-semibold mb-2">
                Add Greeting Card to Collection?
              </h3>
              <p className="text-gray-500 mb-4">
                Make this collection even more special by adding a group
                greeting card to it. Your gift card will remain at this same URL
                but also collect unlimited personalised messages from everyone
                contributing.
              </p>
              <Link href={`/card/farewell/1`}>
                <button className="bg-blue-600 text-black px-4 py-2 border-2 border-blue-700 rounded-md hover:bg-blue-700 transition">
                  Add Greeting Card
                </button>
              </Link>
            </div>
          </div>

         <GiftCardCollectionPot/>
        </div>
      </div>
    </div>
  );
};

export default page;
