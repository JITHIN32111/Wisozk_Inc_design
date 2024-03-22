import React from "react";
import BackgroundImg from "/backGround.png";
import { FaCircleArrowDown } from "react-icons/fa6";
function Hero() {
  return (
    <div className="relative">
      <img
        src={BackgroundImg}
        alt="Background Image"
        className="w-full h-[450px] sm:h-[500px] md:h-[550px] object-cover"
      />
      <div className="absolute inset-0 flex flex-wrap justify-start items-center text-white ">
        <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 ml-12 md:ml-22 lg:ml-28 sm:ml-24">
          <span className="font-semibold text-[30px] leading-tight  md:text-[50px] lg:text-[60px]">
            We are trendy Service
            <br />
            Providers & Vendors
          </span>
          <span className="text-lg sm:text-2xl text-gray-300">
            Turn your work with lot more minimalist and <br />
            <p className="mt-0 sm:mt-2 block"> modern with ease and speed</p>
          </span>

          <button className="flex flex-row gap-x-3 font-medium text-xl mx-auto ml-0 border rounded-full  text-white px-6 py-1 sm:py-2  mt-1 sm:mt-3 bg-gray-500 bg-opacity-40 hover:bg-opacity-100">
            Explore more < FaCircleArrowDown className="bg-white ml-4 text-indigo-500 rounded-full text-2xl sm:text-3xl"/>
          </button>       </div>
      </div>
    </div>
  );
}

export default Hero;
