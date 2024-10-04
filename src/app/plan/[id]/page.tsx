import RazorPay from "@/components/RazorPay";
import React from "react";

const page = () => {
  const AmountCondition = 126;
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-4">5 Cards Bundle</h1>

        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Your Bundle</h2>

          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-pink-200 flex items-center justify-center rounded-full">
              {/* Use an image or icon here */}
              <img
                className="w-10 h-10"
                src="https://via.placeholder.com/40"
                alt="Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-base font-semibold">5 Cards Bundle</h3>
              <p className="text-sm text-gray-500">5 cards</p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Voucher Code"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <button className="ml-2 text-blue-600 font-semibold">Apply</button>
          </div>

          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Bundle Price</span>
              <span>1122.45 INR</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Tax</span>
              <span>0.00 INR</span>
            </div>
            <div className="flex justify-between text-base font-bold">
              <span>Total</span>
              <span>1122.45 INR</span>
            </div>
          </div>
        </div>
        <div className="p-2">
          <RazorPay amount={"1122.45"} />
        </div>
      </div>
    </div>
  );
};

export default page;
