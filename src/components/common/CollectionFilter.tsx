"use client"
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CollectionFilter = () => {
    const router =useRouter()
    const searchParam = useParams();
    const urlValue=searchParam?.slug[0]
    console.log(urlValue,"searchParam");
    const { slug } = useParams();
    const [selectedOption, setSelectedOption] = useState<string>("");
    useEffect(() => {
        if (slug && slug[0]) {
          setSelectedOption(slug[0]);
        }
      }, [slug]);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value.toLowerCase();
        setSelectedOption(value);
        router.push(`/card/${urlValue}/${value}`);
      };
  return (
    <div className='text-end'>
         <div className="text-right">
            <select
              className="border border-gray-300 p-2 rounded bg-blueBg text-white"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="">Popularity</option>
              <option value="trending">Trending</option>
              <option value="latest">New</option>
            </select>
          </div>
    </div>
  )
}

export default CollectionFilter