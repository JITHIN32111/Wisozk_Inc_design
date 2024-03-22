

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import icon from "/icon.png";
import img from "/footer.jpg";
function Footer() {
  return (
    <div className="relative">
      <img
        src={img}
        alt="Background Image"
        className="w-full h-[480px] md:h-[300px]  object-cover"
      />
      <div className="absolute inset-14 flex flex-wrap text-center text-gray-800 ">
        <div className=" h-full  grid grid-cols-2  md:grid-cols-4   items-center mx-auto gap-x-14 text-white">
          {/* social media */}
          <div className="flex flex-col mb-20 md:gap-y-2 gap-y-0">
            <span className="flex flex-row">
              <img src={icon} className="sm:w-20 sm:h-20 w-16 h-16 p-2" />
              <span className="text-white mt-6 font-medium text-sm sm:text-xl xl:text-2xl">
                Wisozk Inc
              </span>
            </span>
            <span className="flex flex-row ml-6 gap-x-4">
              <FaFacebook size={25} />
              <AiFillInstagram size={25} />
              <FaXTwitter size={25} />
              <RiLinkedinFill size={25} />
            </span>
          </div>
          {/* social media */}
          {/* Address */}
          <div className="flex flex-col mb-7  ml-2 items-start gap-y-1 md:gap-y-2">
            <span className="text-xl  sm:text-xl">Address</span>
            <p className="text-start text-sm lg:text-base">8779 Cruickshank Crescent</p>
            <p className="text-start text-sm lg:text-base">Abelardo Streets, New York </p>
            <p className="text-start text-sm lg:text-base">U.S. of America - 10001.</p>
          </div>
          {/* Address*/}
          {/* contact */}
          <div className="flex flex-col  items-start pb-20 gap-y-4">
            <span className="text-xl sm:text-2xl">Contact</span>
            <p>+1 2334458887</p>
          </div>

          {/* contact */}
          {/* message box */}
          <div className="flex flex-col justify-center items-start gap-y-4">
            <input
              placeholder="Your email address"
              type="text"
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:border-transparent px-4 py-2 w-28 h-10 xl:w-72 xl:h-10 md:w-32 md:h-10"
            />
            <input
              placeholder="Message"
              type="text"
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:border-transparent px-4 py-2 w-28 h-10  xl:w-72 xl:h-16 md:w-32 md:h-10 "
            />
            <button className="rounded-lg border-2 border-violet-700 text-white text-normal p-2 px-4 transition duration-300 ease-in-out hover:bg-violet-700 hover:border-violet-900">
              Send
            </button>
          </div>

          {/* message box */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
