import React from 'react'
type Card = {
    id: number;
    title: string;
    imageUrl: string;
    created: string;
    status: 'Active' | 'Unpaid';
    deliveryDate: string;
    signatures: number;
  };
  
  const cards: Card[] = [
    {
      id: 1,
      title: 'qwertyuio',
      imageUrl: 'https://groupleavingcards.com/images/gift/collection_pot.png', // Replace with actual image path
      created: '10/04/2024, 03:22 PM',
      status: 'Active',
      deliveryDate: 'Not Scheduled',
      signatures: 0,
    },
    {
      id: 2,
      title: 'Board for dfgh',
      imageUrl: 'https://groupleavingcards.com/images/gift/collection_pot.png', // Replace with actual image path
      created: '10/04/2024, 03:21 PM',
      status: 'Unpaid',
      deliveryDate: 'Not Scheduled',
      signatures: 0,
    },
  ];
const AccountCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
    <h1 className="text-2xl font-bold mb-6">My Cards</h1>

    <div className="w-full max-w-4xl">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by recipient name or email"
            className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:ring focus:ring-blue-200 w-full"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1112.32 6.906l4.386 4.387a1 1 0 01-1.415 1.414l-4.386-4.386A8 8 0 012 10z" />
          </svg>
        </div>
        <button className="bg-blue-500 text-black border border-gray-300 px-4 py-2 rounded-full ml-4 hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Cards List */}
      {cards.map((card) => (
        <div key={card.id} className="bg-white shadow rounded-lg p-6 mb-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Image */}
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-20 h-20 object-cover rounded-lg mr-4"
            />

            {/* Card Details */}
            <div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-500 text-sm">CREATED: {card.created}</p>
              <p className="text-gray-500 text-sm">STATUS: <span className={card.status === 'Active' ? 'text-green-500' : 'text-yellow-500'}>{card.status}</span></p>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-right">
            <p className="text-gray-500 text-sm">DELIVERY DATE: {card.deliveryDate}</p>
            <p className="text-gray-500 text-sm">SIGNATURES: {card.signatures} signatures</p>
            {/* Action Buttons */}
            {card.status === 'Active' ? (
              <button className="mt-2 bg-blue-500 text-black border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-600">
                View Gift
              </button>
            ) : (
              <button className="mt-2 bg-yellow-500 text-black border border-gray-300 px-4 py-2 rounded-full hover:bg-yellow-600">
                Pay now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AccountCards