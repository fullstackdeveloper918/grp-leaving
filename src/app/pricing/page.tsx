import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center py-12 bg-gray-50">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Pricing and Card Bundles
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Create cards one at a time to send to a friend or colleague or
          purchase a card bundle if you plan to send 5 or more cards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {/* Single Card Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Single Card
            </h2>
            <div className="flex justify-center gap-2 mb-4">
              <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
                Group
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                Individual
              </button>
            </div>
            <p className="text-center text-2xl font-bold text-gray-800 mb-4">
              $4.99
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Unlimited Pages & Signatures</li>
              <li>✅ Share card with others to collect messages</li>
              <li>✅ Images, GIFs, and Stickers</li>
              <li>✅ Upload your own covers</li>
              <li>✅ Several fonts, colors, sizes</li>
              <li>✅ PDF Download</li>
              <li>✅ Schedule Delivery or Send Manually</li>
              <li>✅ Group Gift Cards Collection Pots</li>
              <li>✅ Multiple Card Admins</li>
              <li>✅ Private/Hidden Signatures</li>
            </ul>
            {/* <button className="mt-6 bg-blue-600 text-white w-full py-2 rounded-md border-2 border-blue-700 rounded-md hover:bg-blue-700">
              Create a card for $4.99
            </button> */}
              <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Create a card for $4.99
            </button>
          </div>

          {/* Card Bundle Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Card Bundle
            </h2>
            <p className="text-center text-2xl font-bold text-gray-800 mb-4">
              From $22.45 USD
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Everything in the single card features</li>
              <li>✅ No Expiry</li>
              <li>✅ Share bundle with others</li>
              <li>✅ Use with all card categories</li>
              <li>✅ Use with any of our websites</li>
              <li>✅ Purchase more whenever you run out</li>
              <li>✅ Send cards in bulk using our batch tool</li>
              <li>✅ Single Payment (no auto-renewal)</li>
            </ul>
            {/* <button className="mt-6 bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700">
              View Bundles
            </button> */}
             <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
             View Bundles
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-12 bg-gray-50">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Pricing and Card Bundles
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Create cards one at a time to send to a friend or colleague or
          purchase a card bundle if you plan to send 5 or more cards.
        </p>

        {/* Card Bundles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Bundle Option 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              5 cards
            </h2>
            <p className="text-center text-2xl font-bold text-gray-800 mb-2">
              <span className="line-through text-gray-400">$24.95</span> $22.45
            </p>
            <p className="text-center text-green-600">Save 10%</p>
            <p className="text-center text-gray-600 mt-2">$4.49 per card</p>
            <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Select this plan
            </button>
          </div>

          {/* Bundle Option 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              10 cards
            </h2>
            <p className="text-center text-2xl font-bold text-gray-800 mb-2">
              <span className="line-through text-gray-400">$49.90</span> $42.00
            </p>
            <p className="text-center text-green-600">Save 15%</p>
            <p className="text-center text-gray-600 mt-2">$4.20 per card</p>
            <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Select this plan
            </button>
          </div>

          {/* Bundle Option 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              25 cards
            </h2>
            <div className="flex justify-center mb-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                POPULAR
              </span>
            </div>
            <p className="text-center text-2xl font-bold text-gray-800 mb-2">
              <span className="line-through text-gray-400">$124.75</span> $93.50
            </p>
            <p className="text-center text-green-600">Save 25%</p>
            <p className="text-center text-gray-600 mt-2">$3.74 per card</p>
            <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Select this plan
            </button>
          </div>

          {/* Bundle Option 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              50 cards
            </h2>
            <p className="text-center text-2xl font-bold text-gray-800 mb-2">
              <span className="line-through text-gray-400">$249.50</span>{" "}
              $174.00
            </p>
            <p className="text-center text-green-600">Save 30%</p>
            <p className="text-center text-gray-600 mt-2">$3.48 per card</p>
            <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Select this plan
            </button>
          </div>

          {/* Bundle Option 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              100 cards
            </h2>
            <p className="text-center text-2xl font-bold text-gray-800 mb-2">
              <span className="line-through text-gray-400">$499.00</span>{" "}
              $299.00
            </p>
            <p className="text-center text-green-600">Save 40%</p>
            <p className="text-center text-gray-600 mt-2">$2.99 per card</p>
            <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Select this plan
            </button>
          </div>

          {/* Custom Option */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-xl  font-semibold mb-4 text-center text-gray-800">
              Custom
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Looking for more cards or corporate plans? Contact us to get a
              custom plan.
            </p>
            <button className="mt-6 bg-blue-600 text-black w-full py-2 rounded-md border-2 border-blue-700 hover:bg-blue-700">
              Select this plan
            </button>
          </div>
        </div>

        {/* Card Bundle Disclaimer */}
        <p className="text-center text-gray-500 mt-6">
          Card bundles are a one-time payment and do not automatically renew.
          You can use them on all designs and categories and they do not expire.
        </p>


        <h4 className="mt-5 font-bold">Gift Card Pricing</h4>

        <p className="mt-3 text-center text-gray-500">
        Gift cards are included with all greeting cards at no additional cost. We do however charge a small
        fee on each contribution to cover the cost of managing the service, payment costs and fraud
        prevention. The fee depends on the currency, but is around 5%. We show this fee to all contributors
        so it is always clear how much they are contributing to the card and what the fee is. We don't charge
        any other fees when redeeming the gift card so the recipient will get the full value of the card. Gift
        cards are included with all greeting cards at no additional cost. We have also We don't charge any 
        additional fees when redeeming the gift card so the recipient will get the full value of the card.
        </p>
      </div>
    </>
  );
};

export default page;
