"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const Page = () => {
  const bundlesRef = useRef<any>(null);
  const router = useRouter();
  const scrollToBundles = () => {
    if (bundlesRef.current) {
      bundlesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlePush = () => {
    router.push(`/plan/1`);
  };
  return (
    <>
      <div className="flex flex-col items-center py-12 bg-gray-50 bg-lightBg ">
        <div className="container">
          <span className="block text-blueBg text-md font-medium text-center">
            Pricing
          </span>
          <h1 className="2xl:text-4xl text-center lg:text-2xl text-xl font-semibold mb-6 text-gray-800">
            Pricing that grows with you
          </h1>
          <p className="text-center text-[#4b5563] mb-10 md:text-xl  text-lg 2xl:max-w-[60%] mx-auto font-medium ">
            Create cards one at a time to send to a friend or colleague or
            purchase a card bundle if you plan to send 5 or more cards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Single Card Section */}
            <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb] flex flex-col justify-between h-full">
              <div>
                <h2 className="md:text-2xl text-xl font-medium mb-2  text-[#111827]">
                  Single Card
                </h2>
                {/* <div className="flex gap-2 mb-4">
                <button className="px-3 py-1 rounded-md border-2 bg-blue-100 text-blue-600">
                  Group
                </button>
                <button className="px-3 py-1 rounded-md border-2 bg-gray-100 text-gray-600">
                  Individual
                </button>
              </div> */}
                <p className=" text-md text-gray-800 mb-4">
                  The essentials to provide your best work for clients.
                </p>
                <p className="text-2xl font-700 text-gray-800 mb-4">
                  $4.99 <span className="text-sm">/ month</span>
                </p>
                <ul className="space-y-2 text-gray-600 p-0">
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Unlimited Pages & Signatures</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Images, GIFs, and Stickers</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md">Upload your own covers</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md">Several fonts, colors, sizes</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> PDF Download</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Schedule Delivery or Send Manually</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Group Gift Cards Collection Pots</span>
                  </li>
                </ul>
              </div>
              <Link href={`/create`}>
                <button className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700">
                  Create a card for $4.99
                </button>
              </Link>
            </div>

            {/* Card group Section */}
            {/* <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                  Card Bundle
                </h2>
                <p className="text-center text-2xl font-bold text-gray-800 mb-4">
                  From $22.45 USD
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Everything in the single card features</li>
                  <li>✅ No Expiry</li>
                  <li>✅ Share bundle with others</li>
                  <li>✅ Use with all card categories</li>
                  <li>✅ Use with any of our websites</li>
                  <li>✅ Purchase more whenever you run out</li>
                  <li>✅ Send cards in bulk using our batch tool</li>
                  <li>✅ Single Payment (no auto-renewal)</li>
                </ul>
              </div>
              <button
                onClick={scrollToBundles}
                className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
              >
                View Bundles
              </button>
            </div> */}
              <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-blueText  flex flex-col justify-between h-full">
              <div>
                <h2 className="md:text-2xl text-xl font-medium mb-2  text-[#111827]">
                 Group Card
                </h2>
                
                <p className=" text-md text-gray-800 mb-4">
                  The essentials to provide your best work for clients.
                </p>
                <p className="text-2xl font-700 text-gray-800 mb-4">
                  $6.98 <span className="text-sm">/ month</span>
                </p>
                <ul className="space-y-2 text-gray-600 p-0">
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Unlimited Pages & Signatures</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Images, GIFs, and Stickers</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md">Upload your own covers</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md">Several fonts, colors, sizes</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> PDF Download</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Schedule Delivery or Send Manually</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Group Gift Cards Collection Pots</span>
                  </li>
                </ul>
              </div>
              <Link href={`/create`}>
                <button className="mt-6 bg-blue-600 bg-blueText text-bgWhite w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700">
                  Create a card for $6.98
                </button>
              </Link>
            </div>

{/* buldle cards */}

            <div className="bg-white p-6 rounded-[20px] hover:shadow-lg transition-all  border border-[#e5e7eb] flex flex-col justify-between h-full">
              <div>
              <h2 className="md:text-2xl text-xl font-medium mb-2  text-[#111827]">
                  Card Bundle
                </h2>
                
                {/* <div className="flex gap-2 mb-4">
                <button className="px-3 py-1 rounded-md border-2 bg-blue-100 text-blue-600">
                  Group
                </button>
                <button className="px-3 py-1 rounded-md border-2 bg-gray-100 text-gray-600">
                  Individual
                </button>
              </div> */}
                <p className=" text-md text-gray-800 mb-4">
                  The essentials to provide your best work for clients.
                </p>
                <p className="text-2xl font-700 text-gray-800 mb-4">
                  $10 <span className="text-sm">/ month</span>
                </p>
                <ul className="space-y-2 text-gray-600 p-0">
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Unlimited Pages & Signatures</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Images, GIFs, and Stickers</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md">Upload your own covers</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md">Several fonts, colors, sizes</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> PDF Download</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Schedule Delivery or Send Manually</span>
                  </li>
                  <li className="flex ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.97106 15.5216L1.54353 11.8832C1.31297 11.5377 0.844321 11.4474 0.501906 11.6826C0.209867 11.8832 0.0995066 12.2618 0.237975 12.5879L4.49756 22.6204C5.23778 24.0732 6.48563 24.1757 7.45962 23.9349C8.05092 23.7888 8.53178 23.3842 8.94453 22.9362L29.249 0.901655C29.4239 0.711824 29.4029 0.413887 29.2031 0.25047C29.0281 0.10735 28.7739 0.116838 28.61 0.272608L11.6667 16.3805C9.39075 18.5443 5.71398 18.1339 3.97106 15.5216Z"
                        fill="#3B989C"
                      />
                    </svg>
                    <span className="ml-2 text-md"> Group Gift Cards Collection Pots</span>
                  </li>
                </ul>
              </div>
              <Link href={`/create`}>
                <button className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700">
                  Create a card for $10
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Card Bundles Section */}
      <div
        ref={bundlesRef}
        className="container py-20 "
      >
        <h1 className="2xl:text-4xl text-center lg:text-2xl text-xl font-semibold mb-6 text-gray-800">
          Pricing and Card Bundles
        </h1>
        <p className="text-center text-[#4b5563] mb-10 md:text-xl  text-lg 2xl:max-w-[60%] mx-auto font-medium ">
          Create cards one at a time to send to a friend or colleague or
          purchase a card bundle if you plan to send 5 or more cards.
        </p>

        {/* Card Bundles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Bundle Option 1 */}
          <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                5 cards
              </h2>
              <p className="text-center text-2xl font-bold text-gray-800 mb-2">
                <span className="line-through text-gray-400">$24.95</span>{" "}
                $22.45
              </p>
              <p className="text-center text-green-600">Save 10%</p>
              <p className="text-center text-gray-600 mt-2">$4.49 per card</p>
            </div>
            <button
              onClick={handlePush}
              className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
            >
              Select this plan
            </button>
          </div>

          {/* Bundle Option 2 */}
          <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                10 cards
              </h2>
              <p className="text-center text-2xl font-bold text-gray-800 mb-2">
                <span className="line-through text-gray-400">$49.90</span>{" "}
                $42.00
              </p>
              <p className="text-center text-green-600">Save 15%</p>
              <p className="text-center text-gray-600 mt-2">$4.20 per card</p>
            </div>
            <button
              onClick={handlePush}
              className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
            >
              Select this plan
            </button>
          </div>

          {/* Bundle Option 3 */}
          <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                25 cards
              </h2>
              <div className="flex justify-center mb-2">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  POPULAR
                </span>
              </div>
              <p className="text-center text-2xl font-bold text-gray-800 mb-2">
                <span className="line-through text-gray-400">$124.75</span>{" "}
                $93.50
              </p>
              <p className="text-center text-green-600">Save 25%</p>
              <p className="text-center text-gray-600 mt-2">$3.74 per card</p>
            </div>
            <button
              onClick={handlePush}
              className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
            >
              Select this plan
            </button>
          </div>

          {/* Bundle Option 4 */}
          <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                50 cards
              </h2>
              <p className="text-center text-2xl font-bold text-gray-800 mb-2">
                <span className="line-through text-gray-400">$249.50</span>{" "}
                $174.00
              </p>
              <p className="text-center text-green-600">Save 30%</p>
              <p className="text-center text-gray-600 mt-2">$3.48 per card</p>
            </div>
            <button
              onClick={handlePush}
              className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
            >
              Select this plan
            </button>
          </div>

          {/* Bundle Option 5 */}
          <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                100 cards
              </h2>
              <p className="text-center text-2xl font-bold text-gray-800 mb-2">
                <span className="line-through text-gray-400">$499.00</span>{" "}
                $299.00
              </p>
              <p className="text-center text-green-600">Save 40%</p>
              <p className="text-center text-gray-600 mt-2">$2.99 per card</p>
            </div>
            <button
              onClick={handlePush}
              className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
            >
              Select this plan
            </button>
          </div>

          {/* Custom Option */}
          <div className="bg-white p-6 rounded-lg hover:shadow-lg border flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
                Custom
              </h2>
              <p className="text-center text-gray-600 mb-4">
                Looking for more cards or corporate plans? Contact us to get a
                custom plan.
              </p>
            </div>
            <button
              onClick={handlePush}
              className="mt-6 bg-blue-600 text-blueText w-full py-2 rounded-xl border-2 border-[blueText] hover:bg-blue-700"
            >
              Select this plan
            </button>
          </div>
        </div>

        {/* Card Bundle Disclaimer */}
        <p className="text-center text-gray-500 mt-6 text-md font-semibold max-w-[60%]:">
          Card bundles are a one-time payment and do not automatically renew.
          You can use them on all designs and categories and they do not expire.
        </p>

        <h4 className="2xl:text-4xl text-center lg:text-2xl text-xl font-semibold mb-6 text-gray-800 mt-5">Gift Card Pricing</h4>

        <p className="mt-3 text-center text-gray-500">
          Gift cards are included with all greeting cards at no additional cost.
          We do however charge a small fee on each contribution to cover the
          cost of managing the service, payment costs and fraud prevention. The
          fee depends on the currency, but is around 5%. We show this fee to all
          contributors so it is always clear how much they are contributing to
          the card and what the fee is. We dont charge any other fees when
          redeeming the gift card so the recipient will get the full value of
          the card. Gift cards are included with all greeting cards at no
          additional cost. We have also We dont charge any additional fees when
          redeeming the gift card so the recipient will get the full value of
          the card.
        </p>
      </div>
    </>
  );
};

export default Page;
