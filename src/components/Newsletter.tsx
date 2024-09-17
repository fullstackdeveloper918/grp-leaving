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
    <div className="flex justify-center items-center min-h-screen bg-orange-100">
      <div className="bg-orange-300 p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-center text-white text-xl font-semibold mb-4">Subscribe to our newsletter</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-2">
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
          </div>
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
            className="w-full bg-white text-orange-500 px-4 py-2 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
