"use client";
import React, { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const EscrowPayment = () => {
  const AMOUNT = 120; // Amount in INR
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Call the backend API to create the escrow order
      const response = await fetch("/api/create", { method: "POST" });
      const data = await response.json();

    //   if (data.error) {
    //     console.error("Error from backend:", data.error);
    //     return;
    //   }

      // Log the escrow hold amount and beneficiary account
      console.log("Escrow Hold Amount:", data.holdAmount); // Log hold amount
      console.log("Beneficiary Account:", data.beneficiaryAccount); // Log beneficiary account

      // Configure Razorpay Checkout options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100, // Razorpay requires the amount in paise
        currency: "INR",
        name: "Testing Solutions",
        description: "Test Transaction with Escrow",
        order_id: data.orderId, // Use the order ID from the backend response
        handler: function (response: any) {
          console.log("Payment successful", response);
        },
        prefill: {
          name: "Abhay Singh",
          email: "testing@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Initialize and open Razorpay Checkout
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
   <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full bg-blue-500 text-black py-2 border-2 border-blue-700 rounded-md hover:bg-blue-600 transition"
      >
        {isProcessing ? "Processing..." : `Escrow Pay Now: ${AMOUNT} INR`}
      </button> */}
       <div className="text-center mb-4 justify-center">
            <p className="text-2xl font-bold">£{AMOUNT}</p>
            <button  onClick={handlePayment}
        disabled={isProcessing}
         className="bg-blue-600 text-black  border-2 border-blue-700 px-4 py-2  rounded-md hover:bg-blue-700 transition">
              {isProcessing ? "Processing..." : `Contribute to Gift Card`}
            </button>
          </div>
     
    </>
  );
};

export default EscrowPayment;
