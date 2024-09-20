
import React from 'react'
import Images from "@/constants/images";
import Image from "next/image";
const Image_text_Card = () => {
  return (
    <div className=" bg-gray-100 container-fluid py-12">
      <div className="bg-white shadow-md rounded-lg  gap-4 grid grid-cols-2">
        {/* Left Image Grid Section */}
        <div className="">
          <div className="w-full  relative ">
            <Image src={Images.greeting_card} alt='card'  className='object-cover rounded-[30px]' style={{ width: '100%', maxHeight:'600px'}}  />
             </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center ">
          <h1 className="text-3xl font-bold mb-4">The #1 rated group greeting card</h1>
          <ul className="space-y-3 text-gray-700 p-0">
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Unlimited messages on the card.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              100s of card covers to customize.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Add photos and GIFs to the card.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Download as a PDF to print.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Unlimited message length.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Invite friends and send reminders.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              No apps or downloads.
            </li>
            <li className=" relative beforeListIcon">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Can be signed by anyone worldwide.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Image_text_Card