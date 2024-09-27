"use client";
import React, { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorPay = () => {
  const AMOUNT = 100;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api1/create", { method: "POST" });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "Testing Solutions",
        description: "Test Transaction",
        order_id: data.orderId,
        hnadler: function (response: any) {
          console.log("Payment successful", response);
        },
        prefill: {
          namne: "Abhay Singh",
          email: "testing@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      console.log(rzp1.open(),"xcxc");
      console.log(rzp1,"rzp1");
      
    } catch (error) {
      console.log(error, "Payment failed");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full bg-blue-500 text-black py-2   border-2 border-blue-700 rounded-md hover:bg-blue-600 transition"
      >
        {isProcessing ? "Processign..." : `Pay Now :${AMOUNT} INR`}
      </button>
    </>
  );
};

export default RazorPay;
