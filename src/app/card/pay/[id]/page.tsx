import Checkout from "@/components/Checkout";
import StripeElement from "@/components/common/StripeElement";
import React from "react";

const page = ({ searchParams,params }:any) => {
  console.log(params,"mnmnnm");
  
  return (
    <>
      <StripeElement>
        <Checkout />
      </StripeElement>
    </>
  );
};

export default page;
