import Faqinputs from "@/components/common/Faqinputs";
import Faq from "@/components/Faq";
import React from "react";
import FaqJson from "../../constants/FaqJson/faq.json";
const page = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="bg-pink-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Gift Card Collection Pots
            </h2>
            <p className="text-lg mb-8">
              Add a group collection pot to all our group cards to pool money
              for a gift card.
            </p>

            {/* Image section */}
            <div className="flex justify-center space-x-4 mb-12">
              <img
                src="/amazon-card.png"
                alt="Amazon gift card"
                className="w-24"
              />
              <img
                src="/deliveroo-card.png"
                alt="Deliveroo gift card"
                className="w-24"
              />
              <img
                src="/naked-wines-card.png"
                alt="Naked Wines gift card"
                className="w-24"
              />
              <img
                src="/john-lewis-card.png"
                alt="John Lewis gift card"
                className="w-24"
              />
            </div>

            {/* How it works section */}
            <h3 className="text-2xl font-semibold mb-6">How it works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg ">
                <img
                src="https://groupleavingcards.com/_next/image?url=%2Fimages%2Fgift%2Fselect_gift.png&w=256&q=75"
                alt="Amazon gift card"
                className="w-24"
              />
                  <h4 className="text-xl font-semibold my-4">Add gift card</h4>
                  <p>Add a cash collection pot and select a gift card.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg">
                  {/* <span className="text-4xl font-bold text-purple-500">2</span> */}
                  <img
                src="	https://groupleavingcards.com/_next/image?url=%2Fimages%2Fgift%2Fcollect_cash.png&w=256&q=75"
                alt="Amazon gift card"
                className="w-24"
              />
                  <h4 className="text-xl font-semibold my-4">Collect cash</h4>
                  <p>Anyone can add to the collection.</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gray-100 p-6 rounded-lg">
                  {/* <span className="text-4xl font-bold text-purple-500">3</span> */}
                  <img
                src="	https://groupleavingcards.com/_next/image?url=%2Fimages%2Fgift%2Fdeliver_gift.png&w=256&q=75"
                alt="Amazon gift card"
                className="w-24"
              />
                  <h4 className="text-xl font-semibold my-4">
                    Deliver appreciation
                  </h4>
                  <p>Recipient receives their gift card via email.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-8">
          <section className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-6">Get Started For Free</h2>
            <div className="space-y-6">
              <div className="bg-white shadow p-6 rounded-md">
                <h3 className="font-semibold text-lg mb-2">
                  Create Free Collection Pot
                </h3>
                <p className="text-sm mb-4">
                  Create a collection pot to start collecting cash for a gift
                  card for free.
                </p>
                <button className="bg-blue-500 text-black px-4 py-2 rounded border border-black">
                  Create Free Money Pool
                </button>
              </div>

              <div className="bg-white shadow p-6 rounded-md">
                <h3 className="font-semibold text-lg mb-2">
                  Create Group Card with Collection
                </h3>
                <p className="text-sm mb-4">
                  Add a collection pot to any new or existing Group Card at no
                  additional cost.
                </p>
                <button className="bg-blue-500 text-black px-4 py-2 rounded border border-black">
                  Create Group Card
                </button>
              </div>

              <div className="bg-white shadow p-6 rounded-md">
                <h3 className="font-semibold text-lg mb-2">
                  Create Group Board with Collection
                </h3>
                <p className="text-sm mb-4">
                  Add a collection pot to any new or existing Group Board at no
                  additional cost.
                </p>
                <button className="bg-blue-500 text-black px-4 py-2 rounded border border-black">
                  Create Group Board
                </button>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-6">
              View Gift Card Selection
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <img
                src="https://gift.wegift.io/static/product_assets/NAKED-GB/NAKED-GB-card.png"
                alt="Naked Wines"
                className="w-30 mx-auto rounded"
              />
              <img
                src="https://gift.wegift.io/static/product_assets/JLSEG-GB/JLSEG-GB-card.png"
                alt="John Lewis"
                className="w-30 mx-auto rounded"
              />
              <img src="https://gift.wegift.io/static/product_assets/AMZ-GB/AMZ-GB-card.png" alt="Amazon" className="w-30 mx-auto rounded" />
              <img
                src="https://gift.wegift.io/static/product_assets/VRGNEXP-GB/VRGNEXP-GB-card.png"
                alt="Virgin Experience"
                className="w-30 mx-auto rounded"
              />
              <img src="https://gift.wegift.io/static/product_assets/AIRBNB-US/AIRBNB-US-card.png" alt="Airbnb" className="w-30 mx-auto" />
              <img
                src="https://gift.wegift.io/static/product_assets/DDASH-US/DDASH-US-card.png"
                alt="Doordash"
                className="w-30 mx-auto rounded"
              />
            </div>
            <button className="bg-blue-500 text-black px-4 py-2 rounded border border-black">
              View All Gift Cards
            </button>
          </section>
        </div>
        {FaqJson.general.map((item, index) => (
            <div key={index}>
          <Faqinputs items={item} index={index} />
            </div>
        ))}
      </div>
    </>
  );
};

export default page;
