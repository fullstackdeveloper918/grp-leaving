
import React from 'react'
import Image from "next/image";
const Image_text_Card = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Image Grid Section */}
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full h-40 relative">
            <Image src="https://img.freepik.com/premium-psd/greeting-card-with-flowers-it-pink-background_74869-4261.jpg?w=826" alt="Coffee 1" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="w-full h-40 relative">
            <Image src="https://img.freepik.com/premium-vector/simple-floral-thank-you-card-with-watercolor-background_694794-178.jpg?w=1380" alt="Coffee 2" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="w-full h-40 relative">
            <Image src="https://img.freepik.com/premium-photo/wedding-invitation-with-flowers-flower-middle_1191871-49377.jpg?w=740" alt="Coffee 3" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="w-full h-40 relative col-span-2 flex items-center justify-center bg-gray-200 rounded-lg">
            <p className="text-lg font-semibold text-center">THE STOCKTON CAFE <br /> Enjoy the finest coffee blend.<br /> WE ARE OPEN DAILY!</p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">The #1 rated group greeting card</h1>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Unlimited messages on the card.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              100s of card covers to customize.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Add photos and GIFs to the card.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Download as a PDF to print.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Unlimited message length.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              Invite friends and send reminders.
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-3"></span>
              No apps or downloads.
            </li>
            <li className="flex items-center">
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