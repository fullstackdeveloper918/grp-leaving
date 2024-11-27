
"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/utils/api'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
const CreateBoard = () => {
    const router=useRouter()
    const [userInfo, setUserInfo] = useState<any>(null);
  const [uuid, setUuid] = useState<string | null>(null);
console.log(uuid,"uuid")
  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const userInfoCookie = cookies.find(cookie => cookie.startsWith('userInfo='));

    if (userInfoCookie) {
      const cookieValue = userInfoCookie.split('=')[1];
      try {
        const parsedUserInfo = JSON.parse(decodeURIComponent(cookieValue));
        setUserInfo(parsedUserInfo);
        
        // Extracting the UUID from the parsed userInfo object
        if (parsedUserInfo && parsedUserInfo.uuid) {
          setUuid(parsedUserInfo.uuid);
          console.log('UUID:', parsedUserInfo.uuid);
        }
      } catch (error) {
        console.error('Error parsing userInfo cookie', error);
      }
    }
  }, []);
    const [collectionTitle, setCollectionTitle] = useState('');
    const [loading, setLoading] = useState<any>(false);

  // State to store other form data
  const [formData, setFormData] = useState({
    selectedGift: ''
  });

  // Handle collection title change
  const handleCollectionTitleChange = (e:any) => {
    setCollectionTitle(e.target.value);
  };

  // Handle other form data changes (e.g., selected gift)
  const handleFormDataChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission (you can add your submission logic here)
  const handleSubmit = async(e:any) => {
    e.preventDefault();
    // const submissionData = {
    //   collectionTitle,
    //   ...formData
    // };
    let item={
        user_uuid :uuid,
        collection_title :collectionTitle,
        file:""

    }
    console.log(item,"item");
    
    try {
        setLoading(true)
        const response = await fetch('https://magshopify.goaideme.com/razorpay/create-link', { // replace '/api/cart' with the correct endpoint
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
          });
      
          // Check if the request was successful
          if (!response.ok) {
            throw new Error('Failed to add item to cart');
          }
      
          const data = await response.json(); // Assuming the response returns JSON
          toast.success("Added Successfully");
          console.log(data,"sadfdgsfdg");
          router.replace(`/share/${data?.data?.uuid}`)
    } catch (error) {
        setLoading(false)
    }
  };
    // const submit=async(e:any)=>{
    //     let item={
    //         user_uuid :"",
    //         collection_title :"",

    //     }
    //     try {
            // const res= await api.Collection.create(item)
    //     } catch (error) {
            
    //     }
    // }
  return (
    <div>
        <ToastContainer/>
    <div className="flex flex-col items-center justify-center min-h-screen border border-[#e5e7eb bg-lightBg">
      <h1 className="text-4xl font-bold mb-8">Create a Group Board</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-6">
          <span className="text-gray-700 text-sm">Who is the board for?</span>
          <input
            type="text"
            value={collectionTitle}
            onChange={handleCollectionTitleChange}
            placeholder="Recipient Name*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700 text-sm">What is the title of your board?</span>
          <input
            type="text"
            value={collectionTitle}
            onChange={handleCollectionTitleChange}
            placeholder="Board Title *"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </label>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Collect cash for a gift card</h2>
          <p className="text-gray-600 mb-4">
          Make this card extra special. Start a gift card collection pot that anyone can contribute to.
          </p>
          <button
            type="button"
            className="flex items-center justify-center border border-dashed border-blue-500 bg-blue-50 rounded-md px-4 text-blue-600 font-medium transition duration-300 hover:bg-blue-100"
            onClick={() => setFormData({ ...formData, selectedGift: 'gift card' })} // Update the selected gift here
          >
            <span className="text-2xl mr-2">+</span>Select gift card
          </button>
        </div>
        {/* <Link href={`/share/1`}> */}
          <button
        //   disabled={setLoading}
            type="submit"
            className="w-full bg-blueBg text-white py-2 px-4  rounded-md hover:bg-blue-700 transition duration-300"
          >
           
              Continue
            
          </button>
        {/* </Link> */}
      </form>
    </div>
  </div>
  )
}

export default CreateBoard