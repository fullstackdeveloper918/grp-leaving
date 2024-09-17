import React from 'react'
import { Card, Row, Col, Rate, Typography } from 'antd';
const { Text, Title } = Typography;

const CustomerReview = (props:any) => {
  const reviews = [
    {
      name: 'Samantha Payne',
      handle: '@SamPayne90',
      date: '23 Nov 2023',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, purus at amet lectus venenatis, lectus magna fringilla.',
      image: '/profile1.jpg',
      rating: 5
    },
    {
      name: 'Samantha Payne',
      handle: '@SamPayne90',
      date: '23 Nov 2023',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, purus at amet lectus venenatis, lectus magna fringilla.',
      image: '/profile2.jpg',
      rating: 4
    },
    {
      name: 'Samantha Payne',
      handle: '@SamPayne90',
      date: '23 Nov 2023',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, purus at amet lectus venenatis, lectus magna fringilla.',
      image: '/profile3.jpg',
      rating: 5
    },
    {
      name: 'Samantha Payne',
      handle: '@SamPayne90',
      date: '23 Nov 2023',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, purus at amet lectus venenatis, lectus magna fringilla.',
      image: '/profile4.jpg',
      rating: 4
    },
  ];
  
  return (
    <>
  
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                {review.review} <span className="text-blue-500 cursor-pointer">Show more</span>
              </p>
              
              {/* User Info */}
              <div className="flex items-center">
                <img src={`https://img.freepik.com/premium-psd/greeting-card-with-flowers-it-pink-background_74869-4261.jpg?w=826`} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.handle}</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mt-4">
                {Array.from({ length: review.rating }, (_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400">
                    <path d="M12 .587l3.668 7.431L24 9.75l-6 5.848 1.416 8.266L12 18.75l-7.416 4.114L6 15.598 0 9.75l8.332-1.732z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots (Optional) */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
    </>
  )
}

export default CustomerReview