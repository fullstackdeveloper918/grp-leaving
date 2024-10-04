"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const AccountBunddles = () => {
    const router = useRouter();

    const handlePickBundle = () => {
      // Route to the bundle selection page
      router.push('/pricing');
    };
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-center mb-4">My Bundles</h1>

      {/* Message */}
      <p className="text-gray-500 text-center mb-6">
        Looks like you haven’t got any card bundles yet. Get started by selecting a bundle that works for you.
      </p>

      {/* Action Button */}
      <button
        onClick={handlePickBundle}
        className="bg-blue-600 text-black border-2 py-2 px-6 rounded-full hover:bg-blue-700"
      >
        Pick a Bundle
      </button>
    </div>
  )
}

export default AccountBunddles