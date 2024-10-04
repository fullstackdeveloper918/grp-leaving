"use client";
import validation from "@/utils/validation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [cardType, setCardType] = useState<any>("later");
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNext = () => {
    if (!recipientName) {
      setError('Recipient name is required.');
      return; // Stop submission if validation fails
  }
    if (!recipientEmail) {
      setEmailError('Recipient Email is required.');
      return; // Stop submission if validation fails
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(recipientEmail)) {
    setEmailError('Recipient Email is required.');
    return; // Stop submission if validation fails
  }

  // Clear the email error if validation passes
  setEmailError('');
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedOption(value);
      // You can also update the address state if needed
      // setAddress(value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(recipientName,"recipientName");
    // Handle final submission logic here
    if (!recipientName) {
      setError('Recipient name is required.');
      return; // Stop submission if validation fails
  }
  setError('')
  setRecipientName('');
    router.push(`/card/pay/1`);
    console.log("Final submission", { recipientName, recipientEmail });
  };
  return (
    <>
      <div className="flex space-x-8 mb-8">
        <div
          className={`flex items-center space-x-2 ${
            step >= 1 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              step >= 1 ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
          <p>Pick a Design</p>
        </div>
        <div
          className={`flex items-center space-x-2 ${
            step >= 2 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              step >= 2 ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
          <p>Enter Details</p>
        </div>
        <div
          className={`flex items-center space-x-2 ${
            step >= 3 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              step >= 3 ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
          <p>Pay and Share</p>
        </div>
        <div
          className={`flex items-center space-x-2 ${
            step >= 4 ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              step >= 4 ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
          <p>Submit</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">
          {step === 1
            ? "Who is the card for?"
            : step === 2
            ? "When should we email the card to the recipient?"
            : step === 3
            ? "Want to collect funds for a gift card?"
            : "Who is the card from?"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              {/* Recipient Name Input */}
              <div>
                <label
                  htmlFor="recipientName"
                  className="block text-sm font-medium text-gray-700"
                >
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
                   {!recipientName &&error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>

              {/* Recipient Email Input */}
              <div>
                <label
                  htmlFor="recipientEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Recipient Email
                </label>
                <input
                  id="recipientEmail"
                  type="email"
                  required
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                 {!recipientEmail ?<p className="text-red-500 text-sm mt-2">{emailError}</p>:""}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-600 text-black py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cardType"
                    value="date"
                    checked={cardType === "date"}
                    onChange={() => setCardType("date")}
                    className="mr-2"
                  />
                  <span className="text-lg">Set delivery date</span>
                  <span className="ml-auto text-gray-500">
                    {/* ${individualCardprice} USD */}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="cardType"
                    value="later"
                    checked={cardType === "later"}
                    onChange={() => setCardType("later")}
                    className="mr-2"
                  />
                  <span className="text-lg">Do this later</span>
                  <span className="ml-auto text-gray-500">
                    {/* ${individualCardprice} USD */}
                  </span>
                </label>
                {cardType === "date" && (
                  <>
                    <p className="mt-3">
                      This is based on the timezone your computer is set to.
                    </p>
                    <div className="gap-3">
                      <input
                        type="date"
                        className="ml-auto text-gray-500"
                        placeholder="Date"
                        name="cardType"
                      />
                      <input
                        type="time"
                        className="ml-auto text-gray-500"
                        placeholder="Time"
                        name="cardType"
                      />
                    </div>
                  </>
                )}
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
                className="w-full bg-blue-600 text-black py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
              >
                Next
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <div>
              <label htmlFor="selectOption" className="block text-sm font-medium text-gray-700 mt-4">
                Select an option <span className="text-red-500">*</span>
            </label>
            <select
                id="selectOption"
                value={selectedOption} 
                onChange={handleSelectChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
                <option value="">Disable Collection</option>
                <option value="gbp">GBP</option>
                <option value="usd">USD</option>
                <option value="aud">AUD</option>
                <option value="eur">EUR</option>
            </select>
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
                className="w-full bg-blue-600 text-black py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
              >
                Next
              </button>
            </>
          )}
          {step === 4 && (
            <>
               <div>
                {/* <label
                  htmlFor="recipientName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Recipient Name <span className="text-red-500">*</span>
                </label> */}
                <input
                  id="recipientName"
                  type="text"
                  value={recipientName}
                  placeholder="Sender Name"
                  onChange={(e) => setRecipientName(e.target.value)}
                  required
                  className="mt-1 block w-full px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {/* <p className="">e.g. Your Name or Team Name

We’ll use your name if you leave this blank</p> */}
              </div>
              {/* <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="cardType"
                    value="later"
                    // checked={cardType === "later"}
                    // onChange={() => setCardType("later")}
                    className="mr-2"
                  />
                  <span className="text-lg">Add confetti to this card</span>
                  <span className="ml-auto text-gray-500">
                  </span>
                </label> */}
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Add confetti to this card</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
  Allow private/hidden message</label>
</div>
              <button
                type="button"
                onClick={handlePrevious}
                className="w-full bg-gray-300 text-black py-2 px-4 rounded-md shadow-sm hover:bg-gray-400"
              >
                Back
              </button>
              {/* <Link href={`card/pay/1`}> */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-black py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
              >
                Submit
              </button>
              {/* </Link> */}
            </>
          )}
        </form>
        {/* Pagination Dots */}
        <div className="flex space-x-2 mt-6 items-center justify-center">
          <div
            className={`w-3 h-3 ${
              step >= 1 ? "bg-blue-600" : "bg-gray-300"
            } rounded-full`}
          ></div>
          <div
            className={`w-3 h-3 ${
              step >= 2 ? "bg-blue-600" : "bg-gray-300"
            } rounded-full`}
          ></div>
          <div
            className={`w-3 h-3 ${
              step >= 3 ? "bg-blue-600" : "bg-gray-300"
            } rounded-full`}
          ></div>
          <div
            className={`w-3 h-3 ${
              step >= 4 ? "bg-blue-600" : "bg-gray-300"
            } rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
