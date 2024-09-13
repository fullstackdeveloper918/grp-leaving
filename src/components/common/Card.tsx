import React from "react";
import Image from "next/image";
import Images from "@/constants/images";
const Card = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
            className="rounded-t-lg"
            src={Images.Man}
            width={300}
            height={300}
            alt="card-img"
          />
        </a>
      </div>
    </>
  );
};

export default Card;
