import React from 'react'
import img from '/section2.jpeg'

function Section2() {
  return (
    <div className="relative">
    <img
      src={img}
      alt="Background Image"
      className="w-full h-[300px] mb-9 object-cover"
    />
    <div className="absolute inset-14 flex flex-wrap text-center text-gray-800 "data-aos='fade-right' data-aos-delay='200'>
      <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 ">
     <h1 className='text-5xl font-bold '>Mission</h1>
     <p class="line-clamp-6 sm:line-clamp-5 px-0 md:text-center text-start lg:px-[100px] xl:px-[240px] text-md sm:text-lg  md:text-xl text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>    
      </div>
    </div>
  </div>
  )
}

export default Section2
