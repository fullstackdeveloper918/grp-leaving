"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/utils/api'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'
const CreateGroup = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-8">Create a Group Gift Collection</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-6">
          <span className="text-gray-700 text-sm">What is the collection for?</span>
          <input
            type="text"
            value={collectionTitle}
            onChange={handleCollectionTitleChange}
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
          <button
            type="button"
            className="flex items-center justify-center border border-dashed border-blue-500 bg-blue-50 rounded-md p-4 text-blue-600 font-medium transition duration-300 hover:bg-blue-100"
            onClick={() => setFormData({ ...formData, selectedGift: 'gift card' })} // Update the selected gift here
          >
            <span className="text-2xl mr-2">+</span>Select gift card
          </button>
        </div>
        {/* <Link href={`/share/1`}> */}
          <button
        //   disabled={setLoading}
            type="submit"
            className="w-full bg-blue-600 text-black border-2 border-blue-700 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
           
              Continue
            
          </button>
        {/* </Link> */}
      </form>
    </div>
  </div>
  )
}

export default CreateGroup