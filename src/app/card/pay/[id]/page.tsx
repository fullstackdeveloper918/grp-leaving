import Checkout from "@/components/Checkout";
import StripeElement from "@/components/common/StripeElement";
import React from "react";

const page = () => {
  return (
    <>
      <StripeElement>
        <Checkout />
      </StripeElement>
    </>
  );
};

export default page;
