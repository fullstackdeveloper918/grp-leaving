"use client"
import api from '@/utils/api';
import React, { useEffect, useState } from 'react'

const AccountProfile = () => {
    const [name, setName] = useState('Full Stack Developer');
  const [email, setEmail] = useState('fullstackdeveloper918@gmail.com');
  const [invoiceDetails, setInvoiceDetails] = useState('testing');

  const handleUpdate = () => {
    // Handle the update logic here
    console.log('Profile Updated');
  };

  const getData=async()=>{
    try {
      const res= await api.User.listing()
      console.log(res,"jkjkjk");
    } catch (error) {
      
    }
    }
    useEffect(()=>{
      getData()
    })
  return (
    <div>
          <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"    
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Additional invoice details</label>
              <textarea
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows={3}
                value={invoiceDetails}
                onChange={(e) => setInvoiceDetails(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-blue-600 text-black border border-gray-300 font-semibold px-4 py-2 rounded shadow-md hover:bg-blue-700"
            onClick={handleUpdate}
          >
            Update
          </button>
          <a href="#" className="text-blue-500 hover:underline">Reset Password</a>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Social Logins</h2>
          <button className="flex items-center bg-gray-100 border border-gray-300 rounded px-4 py-2 shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gray-700">Unlink Google</span>
          </button>
        </div>
    </div>
  )
}

export default AccountProfile