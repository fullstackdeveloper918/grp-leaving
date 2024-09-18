"use client"
import React, { useState } from 'react'

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [recipientName, setRecipientName] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
  
    const handleNext = () => {
      setStep((prev) => prev + 1);
    };
  
    const handlePrevious = () => {
      setStep((prev) => prev - 1);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle final submission logic here
      console.log('Final submission', { recipientName, recipientEmail });
    };
  return (
    <>
          <div className="flex space-x-8 mb-8">
    <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
      <div className={`w-4 h-4 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      <p>Pick a Design</p>
    </div>
    <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
      <div className={`w-4 h-4 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      <p>Enter Details</p>
    </div>
    <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
      <div className={`w-4 h-4 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      <p>Pay and Share</p>
    </div>
    <div className={`flex items-center space-x-2 ${step >= 4 ? 'text-blue-600' : 'text-gray-500'}`}>
      <div className={`w-4 h-4 rounded-full ${step >= 4 ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      <p>Submit</p>
    </div>
  </div>
    <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
    <h2 className="text-2xl font-semibold mb-6">{step === 1 ? 'Step 1: Recipient Details' :step === 2? 'Step 2: Confirmation':step === 3?'Step 3: Details':'Step 4: Submit'}</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      {step === 1 && (
        <>
          {/* Recipient Name Input */}
          <div>
            <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
              Recipient Name <span className="text-red-500">*</span>
            </label>
            <input
              id="recipientName"
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Recipient Email Input */}
          <div>
            <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">
              Recipient Email
            </label>
            <input
              id="recipientEmail"
              type="email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
        <div>
            <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
              Recipient Number <span className="text-red-500">*</span>
            </label>
            <input
              id="recipientNumber"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={handlePrevious}
            className="w-full bg-gray-300 text-black py-2 px-4 rounded-md shadow-sm hover:bg-gray-400"
          >
            Back
          </button>
          
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
          >
            Next
          </button>
        </>
      )}
      {step === 3 && (
        <>
        <div>
            <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">
              address <span className="text-red-500">*</span>
            </label>
            <input
              id="recipientAddress"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={handlePrevious}
            className="w-full bg-gray-300 text-black py-2 px-4 rounded-md shadow-sm hover:bg-gray-400"
          >
            Back
          </button>
          
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
          >
            Next
          </button>
        </>
      )}
        {step === 4 && (
              <>
                <p className="text-gray-700">Recipient Name: {recipientName}</p>
                <p className="text-gray-700">Recipient Email: {recipientEmail}</p>
                <p className="text-gray-700">Recipient Address: {address}</p>
                
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="w-full bg-gray-300 text-black py-2 px-4 rounded-md shadow-sm hover:bg-gray-400"
                >
                  Back
                </button>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Submit
                </button>
              </>
            )}
    </form>
     {/* Pagination Dots */}
  <div className="flex space-x-2 mt-6 items-center justify-center">
    <div className={`w-3 h-3 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-300'} rounded-full`}></div>
    <div className={`w-3 h-3 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'} rounded-full`}></div>
    <div className={`w-3 h-3 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'} rounded-full`}></div>
    <div className={`w-3 h-3 ${step >= 4 ? 'bg-blue-600' : 'bg-gray-300'} rounded-full`}></div>
  </div>
  </div>
  </>
  )
}

export default MultiStepForm