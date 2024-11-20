"use client";
import React, { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorPay = ({ amount }: any) => {
  console.log(amount, "amount");

  const AMOUNT = amount;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api1/create", { method: "POST" });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount,
        currency: "INR",
        name: "Wedding",
        description: "Test Transaction",
        // card_id:"2131332212",
        order_id: data.orderId,
        handler: function (response: any) {
          console.log("Payment successful", response);

          // Here you get the payment ID after successful payment
          const paymentId = response.razorpay_payment_id;
          // console.log("Payment ID:", paymentId);
          // console.log("Payment ID0:", paymentId?.razorpay_payment_id);
          // console.log("Payment ID1:",JSON.stringify({ paymentId }));
          const product_id= "sadasd_e21ZXC31332212_fdgh";
          // Optionally, send the payment ID to your server for verification or further processing
          // For example:
          fetch(
            `https://magshopify.goaideme.com/razorpay/save-payment?paymentid=${paymentId}`,
            {
              method: "POST",
              body: JSON.stringify({
                product_id: product_id, // Send product_id in the request body
                // paymentid: paymentId,   // Optionally, include the paymentid in the body as well
              }),
            }
          );

          // Handle success as per your application's need (e.g., updating UI, sending confirmation)
        },
        prefill: {
          namne: "Abhay Singh",
          email: "testing@gmail.com",
          contact: "9999999999",
        },
        notes: {
          card_id: "sadasd_e21ZXC31332212_fdgh", // Custom note that stores the card_id
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      console.log(rzp1.open(), "xcxc");
      console.log(rzp1, "rzp1");
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
        {isProcessing ? "Processign..." : `Pay Now :${amount} INR`}
      </button>
    </>
  );
};

export default RazorPay;
