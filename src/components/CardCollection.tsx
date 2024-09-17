"use client"
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Sidebar from './common/Sidebar';
import BirthdayCard from './common/AllCards';
import Card from './common/Card';
const cardData = [
    { title: 'Happy Birthday from the Team', imageSrc: '/cards/happy-birthday-team.png', isNew: true },
    { title: 'Clink Clink', imageSrc: '/cards/clink-clink.png', isNew: true },
    { title: 'Upload Your Own', imageSrc: '/cards/upload-your-own.png' },
    { title: 'Happy Birthday Mugs', imageSrc: '/cards/happy-birthday-mugs.png' },
    { title: 'Happy Birthday Cake', imageSrc: '/cards/happy-birthday-cake.png' },
    { title: 'Happy Birthday Cupcakes', imageSrc: '/cards/happy-birthday-cupcakes.png' },
    { title: 'Personalised Card', imageSrc: '/cards/personalised.png', personalized: true },
  ];
const CardCollection = (data:any) => {
    console.log(data?.data,"props");
    
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
    <div className="min-h-screen bg-light-gray">
    <div className="flex">
      <Sidebar urlValue={urlValue}/>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold justify-center items-center">Pick a birthday card design</h1>
          <div className="text-right">
            <select
              className="border border-gray-300 p-2 rounded"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="">Popularity</option>
              <option value="trending">Trending</option>
              <option value="latest">New</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {urlValue}
          {cardData.map((card, index) => (
            <Card item={card} index={index} />
          ))}
        </div>
      </main>
    </div>
  </div>
  )
}

export default CardCollection