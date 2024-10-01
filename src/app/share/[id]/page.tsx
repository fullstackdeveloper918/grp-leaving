import EscrowPayment from "@/components/EscrowPayment";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
        <h1 className="text-3xl font-bold mb-4">qwerty</h1>
        <div className="flex justify-between mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Edit Collection
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Lock Collection
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          You haven’t set a delivery date yet. Set a delivery date now to
          encourage people to contribute, or send your gift immediately by
          pressing the <span className="font-semibold">Send Now</span> button.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Send Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Abhay Singh</h2>
          <p className="text-gray-500 mb-4">Organiser</p>
          <button className="text-blue-600 hover:underline mb-2">
            Add message to your team
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Share collection
          </button>
          <div className="mt-4 border-t pt-4">
            <h3 className="text-md font-semibold mb-2">
              Add Greeting Card to Collection?
            </h3>
            <p className="text-gray-500 mb-4">
              Make this collection even more special by adding a group greeting
              card to it. Your gift card will remain at this same URL but also
              collect unlimited personalised messages from everyone
              contributing.
            </p>
            <button className="bg-blue-600 text-black px-4 py-2  border-2 border-blue-700 rounded-md hover:bg-blue-700 transition">
              Add Greeting Card
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Gift Card Collection Pot
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="https://gift.runa.io/static/product_assets/AMZ-GB/AMZ-GB-card.png" // Replace with your gift card image
              alt="Gift Card"
              className="w-32 h-20 object-contain"
            />
          </div>
          {/* <div className="text-center mb-4 justify-center">
            <p className="text-2xl font-bold">£0</p>
          </div> */}
           <EscrowPayment />
          <div className="text-center mb-2 justify-center">

          <button className="text-black-600  hover:underline">
            Delete
          </button>
          </div>
      <div className="mt-6 text-center justify-center">
        <button className="bg-blue-600 text-black border-2 border-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Add Gift Card
        </button>
      </div>
        </div>
      </div>

    </div>
  );
};

export default page;
