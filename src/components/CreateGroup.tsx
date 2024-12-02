"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/utils/api";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
const CreateGroup = ({ data }: any) => {
  console.log(data.data, "datadata");

  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [uuid, setUuid] = useState<string | null>(null);
  console.log(uuid, "uuid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const userInfoCookie = cookies.find((cookie) =>
      cookie.startsWith("userInfo=")
    );

    if (userInfoCookie) {
      const cookieValue = userInfoCookie.split("=")[1];
      try {
        const parsedUserInfo = JSON.parse(decodeURIComponent(cookieValue));
        setUserInfo(parsedUserInfo);

        // Extracting the UUID from the parsed userInfo object
        if (parsedUserInfo && parsedUserInfo.uuid) {
          setUuid(parsedUserInfo.uuid);
          console.log("UUID:", parsedUserInfo.uuid);
        }
      } catch (error) {
        console.error("Error parsing userInfo cookie", error);
      }
    }
  }, []);
  const [collectionTitle, setCollectionTitle] = useState("");
  const [loading, setLoading] = useState<any>(false);

  // State to store other form data
  const [formData, setFormData] = useState({
    selectedGift: "",
  });

  // Handle collection title change
  const handleCollectionTitleChange = (e: any) => {
    setCollectionTitle(e.target.value);
  };

  // Handle other form data changes (e.g., selected gift)
  const handleFormDataChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (you can add your submission logic here)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const submissionData = {
    //   collectionTitle,
    //   ...formData
    // };
    let item = {
      user_uuid: uuid,
      collection_title: collectionTitle,
      file: "",
    };
    console.log(item, "item");

    try {
      setLoading(true);
      const response = await fetch(
        "https://magshopify.goaideme.com/razorpay/create-link",
        {
          // replace '/api/cart' with the correct endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json(); // Assuming the response returns JSON
      toast.success("Added Successfully");
      console.log(data, "sadfdgsfdg");
      router.replace(`/share/${data?.data?.uuid}`);
    } catch (error) {
      setLoading(false);
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
  // const check=data.data.brands.map((res:any)=>console.log(res.imageUrls.80w-326ppi,"iooo"))
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const handleImageClick = (imageData: any) => {
    setSelectedImage(imageData);
    setIsModalOpen(true); // Open modal when an image is clicked
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-8">
          Create a Group Gift Collection
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <label className="block mb-6">
            <span className="text-gray-700 text-sm">
              What is the collection for?
            </span>
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
              Pick the gift that you want to collect cash for. Anyone will be
              able to contribute to it.
            </p>
            <button
              type="button"
              className="flex items-center justify-center border border-dashed border-blue-500 bg-blue-50 rounded-md p-4 text-blue-600 font-medium transition duration-300 hover:bg-blue-100"
              // onClick={() => setFormData({ ...formData, selectedGift: 'gift card' })} // Update the selected gift here
              onClick={openModal}
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full relative">
            {/* Top-left Cancel Button */}
            <h2 className="text-lg font-semibold mb-4 text-center">
              Select a Gift Card
            </h2>

            <button
              className="absolute top-4 right-4 bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
              onClick={closeModal}
            >
              X
            </button>

            {/* How Collection Pots Work */}
            <div className="bg-blue-100 p-4 rounded-md mb-4">
              <h3 className="text-sm font-semibold">
                How do collection pots work?
              </h3>
              <ul className="text-sm text-gray-600 mt-2">
                <li>1. Add a gift card of choice to the card.</li>
                <li>2. Anyone can contribute towards the gift card value.</li>
                <li>
                  3. The recipient instantly claims it when viewing their card.
                </li>
              </ul>
            </div>

            {/* Gift Cards List */}
            <div className="relative">
              {/* <!-- Container for the images with a fixed height and scroll enabled --> */}
              <div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto">
                {data.data.brands.map((res: any, index: number) => {
                  // Get the image URL based on a specific size, for example, '80w-326ppi'
                  const imageUrl = res.imageUrls["80w-326ppi"]; // You can change this key to any other size if needed

                  return (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                      onClick={() => handleImageClick(res)}
                    >
                      <img
                        src={imageUrl}
                        alt={res.brandName} // Assuming there's a 'brandName' field in your data
                        className="w-full h-auto object-cover"
                      />
                      <p className="text-center p-2 font-medium">
                        {res.brandName}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* <!-- Optional modal button --> */}
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => {
                  // Trigger modal to show more content
                  // Implement modal logic here (e.g., use state to toggle visibility)
                }}
              >
                See All
              </button>
            </div>
         
            {/* Modal Footer */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              You’ll be taken to our payment provider Stripe to complete the
              payment.
            </p>
          </div>
       
        </div>
      )}
        
    </div>
  );
};

export default CreateGroup;
