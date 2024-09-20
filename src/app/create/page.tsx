
import OptionCard from '@/components/OptionCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
   
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Create</h1>
      <h2 className="text-xl mb-12">What would you like to create?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        <Link href="/card/new" className='no-underline'>
        <OptionCard
          title="Card"
          imageSrc="https://img.freepik.com/premium-psd/greeting-card-with-flowers-it-pink-background_74869-4261.jpg?w=826"
          description="Like a regular greeting card but with unlimited pages so everyone has space to make it extra special."
          buttonText="Create Card"
          />
          </Link>
        <OptionCard
          title="Board"
          imageSrc="https://img.freepik.com/premium-vector/simple-floral-thank-you-card-with-watercolor-background_694794-178.jpg?w=1380"
          description="Boards are like a digital pinboard letting you add unlimited messages and images on a scrollable page."
          buttonText="Create Board"
        />
        <OptionCard
          title="Money Pool"
          imageSrc="https://img.freepik.com/premium-photo/wedding-invitation-with-flowers-flower-middle_1191871-49377.jpg?w=740"
          description="Just looking to collect cash for a gift? This is the one for you."
          buttonText="Create Collection Pot"
          isFree={true}
        />
      </div>
    </div>
  )
}

export default page