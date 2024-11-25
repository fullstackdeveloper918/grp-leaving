"use client";
import Link from "next/link";
import React from "react";
import upload_img from "../assets/images/upload_img.png"
import upload_gif from "../assets/images/upload_gif.png"

const DemoCard = () => {
  return (
    <>
      <section className="bg-demo_banner text-center demo_section common_padding bg-cover bg-no-repeat">
        <div className="container-fluid">
          <h1 className="text-md tracking-tight">This is our demo card</h1>
          <p className="mb-1.5 max-w-[60%] text-grey text-md mx-auto">
            You can test it out by adding messages, images and GIFs to see how
            it works. When you create a real card you’ll see more options to
            manage and customise your card.
          </p>
          <p>
            <b>Like what you see?</b> Create your own card to start collecting
            unlimited messages and pages all at a fixed cost.
          </p>
          <div className="demo_button_wrapper">
            <Link href={`/create`}>
            <button className=" btnPrimary">Create a Card</button>
            </Link>
            <button className="btnSecondary ml-3">View Demo Board</button>
          </div>
        </div>
      </section>
      <section className="greeting_card_sign common_padding">
        <div className="container-fluid">
          <div className="flex">
            <div className="w-1/2">
              <div className="flex space-x-2">
                <button className="btnPrimary py-2 px-3">Add Message</button>
                <button className="bg-lightBg rounded-md p-2"><img src={upload_img.src} alt="upload img" className="upload_img" /></button>
                <button className="bg-lightBg rounded-md p-2"><img src={upload_gif.src} alt="upload img" className="upload_img" /></button>
              </div>
            </div>
            <div >
              <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg">
                <h3 className="text-center text-md font-normal">Gift Card Collection Pot</h3>
                <button>User Image Popup</button>
                <img src="https://gift.wegift.io/static/product_assets/AMZ-GB/AMZ-GB-card.png"   alt="Amazon" className="voucher_img mx-auto rounded" />
                <p className="font-bold text-center text-lg">£360</p>
                <button className="bg-greyBorder text-blackText rounded-lg  w-100 text-sm p-2.5">Contribute to Hagrid's Gift Card</button>
              </div>
              <button className=" btnPrimary text-center w-100 mt-3 rounded-md">Share Card</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoCard;
