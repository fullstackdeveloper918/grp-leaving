import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <h1 className="text-4xl font-bold mb-8">Create a Group Gift Collection</h1>
    <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <label className="block mb-6">
        <span className="text-gray-700 text-sm">What is the collection for?</span>
        <input
          type="text"
          placeholder="Collection Title *"
          className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select a gift</h2>
        <p className="text-gray-600 mb-4">
          Pick the gift that you want to collect cash for. Anyone will be able to contribute to it.
        </p>
        <button className="flex items-center justify-center border border-dashed border-blue-500 bg-blue-50 rounded-md p-4 text-blue-600 font-medium transition duration-300 hover:bg-blue-100">
          <span className="text-2xl mr-2">+</span>Select gift card
        </button>
      </div>
      <Link href={`/share/1`}>
      <button type="submit" className="w-full bg-blue-600 text-black  border-2 border-blue-700 py-3 rounded-md hover:bg-blue-700 transition duration-300">
        Continue
      </button>
      </Link>
    </form>
  </div>
  )
}

export default page