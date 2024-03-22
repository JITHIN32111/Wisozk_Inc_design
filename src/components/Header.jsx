import React from 'react'
import icon from '/icon.png'
function Header() {
  return (
    <div className='flex flex-row  justify-between items-center bg-blue-950'>
        <div className='flex flex-row gap-x-2 items-center m-4 ml-8 sm:ml-14'>
        <img src={icon} alt="" className='rounded-full sm:w-20 sm:h-20 w-16 h-16 p-2' />
        <span className='text-white font-medium text-2xl'>Wisozk Inc</span>
        </div>
      <button className='text-black bg-white rounded-xl text-center py-1 sm:py-2 px-6 text-lg mr-12 font-medium hover:bg-black hover:text-white'>contact</button>
    </div>
  )
}

export default Header
