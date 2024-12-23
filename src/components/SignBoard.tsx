"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Modal from "react-modal";
const SignBoard = () => {
    const router = useRouter();
    const [message, setMessage] = useState<any>("");
    const [name, setName] = useState<any>("");
    const [gifUrl, setGifUrl] = useState<any>(null);
    console.log(gifUrl, "gifUrl");
  
    const handleAddGif = (gifUrl: any) => {
      // Replace with a real GIF URL or integrate a GIF picker (like Giphy API)
      setGifUrl(gifUrl);
    };
  
    const handleRemoveGif = () => {
      setGifUrl(null);
    };
  
    const [isOpen, setIsOpen] = useState(false);
    const [gifs, setGifs] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    console.log(gifs, "fgdhjkl");
    console.log(searchTerm, "searchTerm");
    const defaultTerm = "wave";
    const fetchGifs = async (term: string) => {
      console.log(term, "term");
  
      try {
        const searchTerm = term || defaultTerm;
        const response = await axios.get(
          "https://tenor.googleapis.com/v2/search",
          {
            params: {
              q: searchTerm,
              key: "AIzaSyBphMbpVXm8Rc9CnWX7W3LuePqIHgSWoDo",
              client_key: "my_test_app",
              limit: 100,
              locale: "en_US",
            },
          }
        );
        console.log(response.data.results, "jgjgj");
  
        setGifs(
          response.data.results.map((result: any) => result.media_formats.gif.url)
        );
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    };
  
    const openModal = () => {
      setIsOpen(true);
      fetchGifs("trending"); // Fetch trending GIFs initially
    };
  
    const closeModal = () => setIsOpen(false);
  
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchTerm) fetchGifs(searchTerm);
    };
  
    const back = () => {
      router.replace(`/demo/0cVkV16gHzX`);
    };
  return (
    <>
         <div className="flex h-screen">
           {/* Left Section - Preview */}
           <div className="w-1/2 bg-blue-100 flex flex-col justify-center items-center p-8">
             {/* {gifUrl && (
               <div className="mb-4">
                 <img
                   src={`https://media.tenor.com/g8LwF4tAoAYAAAAi/tenor.gif`}
                   alt="Selected GIF"
                   className="w-full h-auto rounded-md"
                 />
               </div>
             )} */}
   
             <div className="bg-white border rounded-lg p-6 shadow-md w-3/4 max-w-md">
               {gifUrl && (
                 <div className="mb-4">
                   <img
                     src={gifUrl}
                     alt="Selected GIF"
                     style={{ width: "100%", height: "50%" }}
                     className="w-full h-auto rounded-md"
                   />
                 </div>
               )}
               <div className="text-gray-800  h-64">
                 {message ? (
                   <p className="demo-board-msg">{message}</p>
                 ) : (
                   <p className="text-gray-400">
                     Your message will appear here...
                   </p>
                 )}
               </div>
               {name && (
                 <p className="mt-4 text-right text-gray-600 ">From {name}</p>
               )}
             </div>
             {gifUrl && (
               <button
                 onClick={handleRemoveGif}
                 className="mt-4 px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition"
               >
                 Remove gif
               </button>
             )}
             <button
               onClick={back}
               className="mt-6 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
             >
               Cancel and Return to Board
             </button>
           </div>
   
           {/* Right Section - Form */}
           <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
             <h1 className="text-3xl font-bold mb-6">Sign Board</h1>
             <div className="flex flex-wrap gap-4 mb-6">
               <button
                 onClick={openModal}
                 className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
               >
                 Add Gif
               </button>
               <button
                 onClick={openModal}
                 className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
               >
                 Add Sticker
               </button>
               <button className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
                 Add Image
               </button>
               <button className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
                 Add Handwriting
               </button>
             </div>
   
             <form
               className="w-full max-w-md space-y-4"
               onSubmit={(e) => e.preventDefault()}
             >
               <div>
                 <label
                   htmlFor="message"
                   className="block text-sm font-medium mb-2"
                 >
                   Message
                 </label>
                 <textarea
                   id="message"
                   className="w-full h-44 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Message"
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
                 ></textarea>
               </div>
               <div>
                 <label htmlFor="name" className="block text-sm font-medium mb-2">
                   Name
                 </label>
                 <input
                   id="name"
                   type="text"
                   className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Your Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                 />
               </div>
               <button
                 type="submit"
                 className="w-full btnPrimary py-2 bg-blue-600 text-white border rounded-md hover:bg-blue-700 transition"
               >
                 Save Message
               </button>
             </form>
           </div>
         </div>
         <Modal
           isOpen={isOpen}
           onRequestClose={closeModal}
           className="p-4 bg-white rounded-lg shadow-lg max-w-xl mx-auto"
         >
           <h2 className="text-lg font-bold mb-4">Select a GIF</h2>
           <form onSubmit={handleSearch} className="mb-4 flex gap-2">
             <input
               type="text"
               placeholder="Search GIFs"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="flex-grow px-4 py-2 border rounded-md"
             />
             <button
               type="submit"
               className="px-4 py-2 bg-blue-600 text-black border rounded-md hover:bg-blue-700 transition"
             >
               Search
             </button>
           </form>
           <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-96">
             {gifs.map((gifUrl, index) => (
               <img
                 key={index}
                 src={gifUrl}
                 alt="GIF"
                 style={{ width: "80%", height: "80%" }}
                 className="rounded-lg cursor-pointer"
                 onClick={() => {
                   handleAddGif(gifUrl);
                   console.log("Selected GIF:", gifUrl); // Handle selected GIF URL
                   closeModal();
                 }}
               />
             ))}
           </div>
           <button
             onClick={closeModal}
             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
           >
             Close
           </button>
         </Modal>
       </>
  )
}

export default SignBoard