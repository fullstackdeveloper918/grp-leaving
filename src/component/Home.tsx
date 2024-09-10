"use client"
import React, { useEffect, useState } from 'react'
import bannerImage from "../assesst/images/back_header.webp"
import Cards from './common/Card'
import CustomerReview from './common/CustomerReview'
import Image_text_Card from './common/Image_text_Card'
import Join_company from './common/Join_company'
import Cards_works from './common/Cards_works'
import { Rate } from 'antd'
const categoriesName = ['Farewell', 'Birthday', 'Baby', 'Wedding', 'Get Well', 'Sympathy', 'Thank you', 'Retirement', 'Congratulations', 'Anniversary', 'Welcome', 'New Home'];
const Home = (props:any) => {
console.log(props,"props");
const [displayedText, setDisplayedText] = useState('');
const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
const [isTyping, setIsTyping] = useState(true);
const [categoryName, setCategoryName] = useState(categoriesName[0]);

useEffect(() => {
  const typeWriter = (text: string, index: number) => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text[index]);
      setTimeout(() => typeWriter(text, index + 1), 100); 
    } else {
      setIsTyping(false);
      setTimeout(() => {
        setDisplayedText('');
        setIsTyping(true);
        setCurrentCategoryIndex((prev) => (prev + 1) % categoriesName.length);
      }, 1500); 
    }
  };

  if (isTyping) {
    setCategoryName(categoriesName[currentCategoryIndex]);
    typeWriter(categoriesName[currentCategoryIndex], 0);
  }
}, [currentCategoryIndex, isTyping]); 
const rating=4.5
  return (
    <div className="container mt-3">
        <div className="row">


            {/* section 1 */}
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px',
        backgroundColor: '#fef5f1'
      }}>
        {/* Text Section */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span>Read our <strong>1479</strong> reviews</span>
            <Rate allowHalf defaultValue={rating} disabled style={{color:'#07bc0c'}}/>
          </div>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>
            Send a Group 
          </h1>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>
          <span style={{ color: '#e60050' }}>{displayedText||"''"}</span>
          </h1>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>
          Card Online
          </h1>
            
          <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '20px' }}>
            The easiest way to pass a virtual greeting card around your office.
          </p>
          <div style={{ marginTop: '20px' }}>
            <button style={{
              backgroundColor: '#0033cc',  /* Dark Blue */
              color: '#fff',
              padding: '15px 25px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginRight: '20px'
            }}>
              Create a card
            </button>
            <a href="#" style={{
              color: '#0033cc',
              textDecoration: 'none',
              fontSize: '1.2rem'
            }}>
              Try Our Demo Card
            </a>
          </div>
        </div>
  
        {/* Image Section */}
        <div style={{ flex: 1 }}>
          <img 
            src={bannerImage.src}
            alt="Celebration" 
            style={{ 
              width: '100%', 
              maxWidth: '600px', 
              borderRadius: '10px' 
            }} 
          />
        </div>
      </div>

      {/* section 2 */}
      <Cards {...props}/>

      {/* section 3 */}
      <CustomerReview  {...props}/>

      {/* section 4 */}

      <Image_text_Card/>

      {/* section 5 */}
      <Join_company/>

      {/* section 6 */}
      <Image_text_Card/>

      {/* section 7 */}
      <Cards_works/>

      {/* section 8 */}
      <Image_text_Card/>

      {/* section 9 */}
      <Image_text_Card />

        </div>
    </div>
  )
}

export default Home