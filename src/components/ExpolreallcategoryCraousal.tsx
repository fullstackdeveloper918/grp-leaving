import React from 'react';
import { Carousel } from 'antd'; // Assuming you are using Ant Design Carousel
import cardData from "../constants/CardJson/card.json";
import Category from './Category';
import { capFirst } from '@/utils/validation';

const chunkArray = (arr: any, size: any) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const categoriesChunks = chunkArray(cardData.data, 5);

const ExpolreallcategoryCraousal = () => {
  return (
    <div className="container-fluid text-center py-12">
      <h3 className="xl:text-4xl md:text-xl sm:text-md font-semibold">
        Explore All Categories
      </h3>
      <div style={{ padding: "20px" }}>
        <Carousel 
          autoplay={true}  
          arrows={true} 
          dots={false} // Disable dots if you want a cleaner look
          infinite={true} // Enable infinite scrolling
        >
          {categoriesChunks.map((chunk, index) => (
            <div key={index}>
              <div className="flex justify-center items-center gap-5 mt-5">
                {chunk.map((category: any, i: number) => (
                  <div key={i}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100px",
                      }}
                    >
                      <Category item={category} index={i} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      {capFirst(category.type)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ExpolreallcategoryCraousal;
