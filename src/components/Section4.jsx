import React from 'react'
import img from '/section4.jpg'

function Section4() {
  return (
    <div className="relative">
    <img
      src={img}
      alt="Background Image"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute inset-14 flex flex-wrap text-center  mx-auto text-gray-800 ">
      <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 ">
        <span className='flex flex-col gap-y-8'>
        <h1 className='text-3xl sm:text-5xl font-bold '>Momentum</h1>
     <p class="line-clamp-6 sm:line-clamp-5 px-0 md:text-center text-start lg:px-[100px] xl:px-[240px] text-md sm:text-lg  md:text-xl text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>    
        </span>
        <span className='flex flex-col gap-y-8 md:mt-10 lg:mt-12 mt-7'>
        <h1 className='text-3xl sm:text-5xl  font-bold '>Recognitions</h1>
     <p class="line-clamp-6 sm:line-clamp-5 px-0 md:text-center text-start lg:px-[100px] xl:px-[240px] text-md sm:text-lg  md:text-xl text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>    
        </span>
      </div>
    </div>
  </div>
  )
}

export default Section4
