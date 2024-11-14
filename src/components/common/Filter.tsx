import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const Filter = ({searchParams}:any) => {
    let array=["birthday", "farewell", "baby", "wedding", "get-well", "sympathy"]

  const type = searchParams?.category
  console.log(type, "Selected category");
  return (
    <div className="flex flex-col items-center p-8 bg-white margin100">
      <h2 className="text-center text-xl font-semibold text-gray-600">
        Get Started by Selecting a Card
      </h2>
      <h3 className="mt-2 text-4xl font-bold text-center text-gray-900">
        Design or Uploading Your Own!
      </h3>
      <div className="mt-4 flex space-x-8">
        {array.map((category) => (
            <>
            <Link href={`/?category=${category}`} className='no-underline' scroll={false}>
          <span
            key={category}
            className={type === category ? "text-blueText text-blue-600 font-semibold border-b-2 border-blue-600 cursor-pointer" : "text-black text-gray-500 hover:text-blue-500 cursor-pointer"}
            >
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </span>
          </Link>
              </>
        ))}
      </div>
    </div>
  );
};

export default Filter;
