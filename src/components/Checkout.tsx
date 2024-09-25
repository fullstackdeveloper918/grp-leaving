"use client";
import React, { useState } from "react";
import GooglePay from "./common/GooglePay";
import { CardElement, useStripe } from "@stripe/react-stripe-js";
import { Button, Checkbox, Col, Form, Grid, Input, Popover, Radio, Row, Select, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import AddCardElement from "./common/AddCard";

const Checkout = () => {
  const [cardType, setCardType] = useState<any>("group");
  const [bundleOption, setBundleOption] = useState<any>("single");
  const [numCards, setNumCards] = useState<any>(5); // Default card bundle selection
  const [paywith, setPaywith] = useState<any>('STRIPE')
  const stripe = useStripe();
  const cardPrices: any = {
    5: { price: 22.45, perCard: 4.49, discount: "10%" },
    10: { price: 40.9, perCard: 4.09, discount: "18%" },
    20: { price: 73.8, perCard: 3.69, discount: "26%" },
  };
  const screens = Grid.useBreakpoint();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-5">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:flex">
        {/* Left Section */}
        <div className="flex-1">
          {/* Card Type Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Card Type</h2>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="cardType"
                  value="group"
                  checked={cardType === "group"}
                  onChange={() => setCardType("group")}
                  className="mr-2"
                />
                <span className="text-lg">Group Card</span>
                <span className="ml-auto text-gray-500">$4.99 USD</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="cardType"
                  value="individual"
                  checked={cardType === "individual"}
                  onChange={() => setCardType("individual")}
                  className="mr-2"
                />
                <span className="text-lg">Individual Card</span>
                <span className="ml-auto text-gray-500">$2.50 USD</span>
              </label>
            </div>
          </div>

          {/* Bundle Discount Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Bundle Discount</h2>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bundleOption"
                  value="single"
                  checked={bundleOption === "single"}
                  onChange={() => setBundleOption("single")}
                  className="mr-2"
                />
                <span className="text-lg">Single Card</span>
                <span className="ml-auto text-gray-500">$4.99 USD</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bundleOption"
                  value="bundle"
                  checked={bundleOption === "bundle"}
                  onChange={() => setBundleOption("bundle")}
                  className="mr-2"
                />
                <span className="text-lg">Card Bundle</span>
                <span className="ml-auto text-green-500">From $22.45 USD</span>
              </label>
            </div>

            {/* Show this section when the Card Bundle is selected */}
            {bundleOption === "bundle" && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md border">
                <ul className="text-green-600 mb-4 space-y-1">
                  <li>💰 Save up to 40% by buying a bundle</li>
                  <li>🤝 Share bundle with colleagues</li>
                  <li>🕑 No Expiry. No Subscription.</li>
                  <li>🧾 File a single expense claim</li>
                </ul>

                <div className="flex flex-col space-y-2">
                  <label className="font-bold text-gray-700">
                    Select number of cards:
                  </label>
                  <select
                    value={numCards}
                    onChange={(e) => setNumCards(Number(e.target.value))}
                    className="border border-gray-300 p-2 rounded-lg w-full"
                  >
                    {Object.keys(cardPrices).map((count: any) => (
                      <option key={count} value={count}>
                        {count} Cards — $
                        {cardPrices[
                          count as keyof typeof cardPrices
                        ].price.toFixed(2)}{" "}
                        USD ($
                        {cardPrices[
                          count as keyof typeof cardPrices
                        ].perCard.toFixed(2)}{" "}
                        USD/card) -{" "}
                        {cardPrices[count as keyof typeof cardPrices].discount}{" "}
                        off
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-600 text-sm mt-2">
                    After buying this bundle and card, you will have{" "}
                    {numCards - 1} cards left to use any time.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <a href="/card/checkout/1">

            <button className="w-full bg-blue-500 text-black py-2   border-2 border-blue-700 rounded-md hover:bg-blue-600 transition">
              Pay with Debit/Credit Card
            </button>
            </a>
            {/* <CardElement />
            <GooglePay
              totalPrice={"1.00"}
              currencyCode="AUD"
              countryCode="AU"
              // handleSocialBuy={props.handleSocialBuy}
            /> */}
          </div>
        </div>

        {/* Right Section (Summary) */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Your Card</h2>
            <div className="flex justify-between items-center mb-4">
              <span>Group Card for TRYRT</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Voucher Code"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <button className="ml-2 bg-blue-500 text-black  border-2 border-blue-700 py-2 px-4 rounded-md hover:bg-blue-600 transition">
                Apply
              </button>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between">
                <span>Card Price</span>
                <span className="font-bold">
                  {bundleOption === "bundle"
                    ? `$${cardPrices[numCards].price.toFixed(2)} USD`
                    : "$4.99 USD"}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Total</span>
                <span className="font-bold text-xl">
                  {bundleOption === "bundle"
                    ? `$${cardPrices[numCards].price.toFixed(2)} USD`
                    : "$4.99 USD"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Checkout;
