import Images from "@/constants/images";
import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-black">
              Payments tool for software companies
            </h1>
            <p className="text-black max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className="text-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Start a group Card
            </a>
            <a
              href="#"
              className="text-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Try Our Demo Card
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={Images.Hero}
              width={400}
              height={400}
              alt="hero_image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
