"use client"
import React from 'react'

const DemoCard = () => {
  return (
    <>
   <section className='bg-demo_banner text-center demo_section common_padding bg-cover bg-no-repeat'>
    <div className='container-fluid'>
<h1 className='text-md tracking-tight'>
This is our demo card
</h1>
<p className='mb-1.5 max-w-[60%] text-grey text-md mx-auto'>You can test it out by adding messages, images and GIFs to see how it works. When you create a real card you’ll see more options to manage and customise your card.</p> 
<p>
<b>Like what you see?</b> Create your own card to start collecting unlimited messages and pages all at a fixed cost.
</p>
<div className='demo_button_wrapper'>
    <button className=' btnPrimary'>Create a Card</button>
    <button className='btnSecondary ml-3'>View Demo Board</button>
</div>
    </div>
   </section>
   <section className='greeting_card_sign common_padding'>
    <div className="container-fluid">
        <div className='flex'>
<div className='w-1/2'>
<div className='flex space-x-2'>
    <button>Add Message</button>
    <button>Image</button>
</div>
  
</div>
<div className='bg-white shadow-lg rounded-lg p-10 w-full max-w-lg'>
    <div>
        <h3>Gift Card Collection Pot
        </h3>
        <button>User Image Popup</button>
        <img src="" alt="amazon image" />
        <p>£360</p>
        <button>Contribute to Hagrid's Gift Card</button>
    </div>
    <button>Share Card</button>
</div>
        </div>

    </div>
   </section>
   </>
  )
}

export default DemoCard
