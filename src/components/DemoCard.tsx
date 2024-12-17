"use client";
import Link from "next/link";
import React, { useState } from "react";
import upload_img from "../assets/images/upload_img.png";
import upload_gif from "../assets/images/upload_gif.png";
import EditorModal from "./common/EditorModal";
import EditorCrousal from "./common/EditorCrousal";
import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, Modal, QRCode, Space, Typography } from "antd";
import { toast, ToastContainer } from "react-toastify";
const { Paragraph, Text } = Typography;
const DemoCard = () => {
  const [show, setShow] = useState<any>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalClose = () => {
    setIsModalVisible(false); // Close the modal
  };
  console.log(show, "show");

  const handleShare = () => {
    setIsModalVisible(true);
  };
  const shareableLink = "https://group-leaving-1lpt.vercel.app/demo";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareableLink);
    toast.success("Copied to clipboard");
  };
  const addCard = () => {
    setShow(true);
  };

  const showCard = () => {
    setShow(false);
  };
  return (
    <>
      <section className="bg-demo_banner text-center demo_section common_padding bg-cover bg-no-repeat">
        {/* <ToastContainer/> */}
        <div className="container-fluid">
          <h1 className="text-md tracking-tight demo_heading">
            This is our demo card
          </h1>
          <p className="demo_paragraph text-grey ">
            You can test it out by adding messages, images and GIFs to see how
            it works. When you create a real card you will see more options to
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
          <div className=" md:flex block">
            <div className="md:w-1/2  w-full">
              <div
                className="flex space-x-2 mb-2 "
                style={{ paddingLeft: "110px" }}
              >
                {show ? (
                  <button className="btnPrimary py-2 px-3" onClick={showCard}>
                    Show Card
                  </button>
                ) : (
                  <button className="btnPrimary py-2 px-3" onClick={addCard}>
                    Add Card
                  </button>
                )}
                {/* <button className="bg-lightBg rounded-md p-2"><img src={upload_img.src} alt="upload img" className="upload_img" /></button>
                <button className="bg-lightBg rounded-md p-2"><img src={upload_gif.src} alt="upload img" className="upload_img" /></button> */}
              </div>

              {show ? <EditorModal /> : <EditorCrousal />}
              {/* <EditorCrousal /> */}
              {/* <EditorModal/> */}
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-5">
              <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg">
                <h3 className="text-center text-md font-normal">
                  Gift Card Collection Pot
                </h3>
                <button>User Image Popup</button>
                <img
                  src="https://gift.wegift.io/static/product_assets/AMZ-GB/AMZ-GB-card.png"
                  alt="Amazon"
                  className="voucher_img mx-auto rounded"
                />
                <p className="font-bold text-center text-lg">£360</p>
                <button className="bg-greyBorder text-blackText rounded-lg  w-100 text-sm p-2.5">
                  Contribute to Hagrid Gift Card
                </button>
              </div>
              <div className="w-full" style={{ width: "73%" }}>
                <button
                  className=" btnPrimary text-center w-100 mt-3 rounded-md"
                  onClick={handleShare}
                >
                  Share Card
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          width={600} // Adjust as needed
          centered
          bodyStyle={{ padding: "24px" }}
        >
          {/* Title */}
          <Typography.Title level={3}>Share Card</Typography.Title>

          {/* Instructions */}
          <Paragraph>
            Share this URL with everyone who you want to be able to add a
            message. They will be able to add a message to the card without
            having to sign up for an account. You can also share the QR code if
            that is easier.
          </Paragraph>

          {/* Shareable Link */}
          <Space
            direction="vertical"
            style={{ width: "100%", marginBottom: "16px" }}
          >
            <Text strong>Shareable link</Text>
            <Input
              value={shareableLink}
              readOnly
              addonAfter={
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  onClick={handleCopy}
                />
              }
            />
          </Space>

          {/* QR Code */}
          <Space style={{ display: "flex", justifyContent: "center" }}>
            <QRCode value={shareableLink} size={160} />
          </Space>
        </Modal>
      </section>
    </>
  );
};

export default DemoCard;
