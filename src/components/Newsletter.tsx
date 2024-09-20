"use client"
import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data: ', formData);
  };

  return (
    <div className="container-fluid py-12">
      <div className="bg-newsletterbg p-5 bg-cover rounded-[20px]">
        <h2 className="xl:text-4xl md:text-xl sm:text-md font-semibold text-center text-white">Subscribe to our newsletter</h2>
        <form className="flex space-x-2 max-w-[90%] mx-auto newsForm mt-5" onSubmit={handleSubmit}>
          
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-white submitbtnPrimary text-blueText"
          >
            Subscribe Now
          </button>
        </form>
      </div>
      </div>
  );
};

export default NewsletterForm;
