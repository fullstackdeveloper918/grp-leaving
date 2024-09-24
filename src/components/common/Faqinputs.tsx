"use client"
import React, { useState } from 'react'

const Faqinputs = ({index,items}:any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div key={index} className="border-b border-gray-200 mb-4">
    <button
      onClick={() => toggleFAQ(index)}
      className="w-full flex justify-between items-center py-4 focus:outline-none"
    >
      <span className="text-lg font-medium text-gray-700">{items?.question}</span>
      <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        activeIndex === index ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      <div className="p-4 text-gray-600">
        <p>{items?.answer}</p>
      </div>
    </div>
  </div>
  )
}

export default Faqinputs