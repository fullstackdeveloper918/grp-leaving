import React from 'react'

const PartnerCompanies = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 bg-white">
    <p className="text-lg md:text-4xl font-medium text-gray-700 text-center">
      Join over <span className="font-bold">5,000,000</span> other people using our group greeting cards
    </p>
    <div className="flex items-center justify-between space-x-8 mt-6">
      {/* Logos */}
      <img
        src="https://groupleavingcards.com/_next/image?url=/images/brands/govuk.png&w=384&q=70"
        alt="Airbnb Logo"
        style={{width:"15"}}
        className="h-15"
      />
      <img
       src="https://groupleavingcards.com/_next/image?url=/images/brands/amazon.png&w=384&q=70"
        alt="Harris Logo"
        className="h-15 w-auto"
      />
      <img
       src="https://groupleavingcards.com/_next/image?url=/images/brands/meta.png&w=384&q=70"
        alt="Scotiabank Logo"
        className="h-15 w-auto"
      />
      <img
     src="https://groupleavingcards.com/_next/image?url=/images/brands/meta.png&w=384&q=70"
        alt="Toronto Pearson Logo"
        className="h-15 w-auto"
      />
      <img
       src="https://groupleavingcards.com/_next/image?url=/images/brands/un.png&w=384&q=70"
        alt="Accenture Logo"
        className="h-15 w-auto"
      />
    </div>
  </section>
  )
}

export default PartnerCompanies