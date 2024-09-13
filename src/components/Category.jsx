import React from "react";
import Image from "next/image";
import Images from "@/constants/images";

const Category = () => {
  return (
    <>
      <div class="flex flex-col items-center pb-10">
        <Image
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={Images.Category_img}
          width={50}
          height={50}
          alt="category-image"
        />
      </div>
    </>
  );
};

export default Category;
