import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
const Nav = () => {
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form action="" className='flex items-center bg-white px-3 gap-5 rounded-md shadow-md w-[70%] h-[60px]'>
          <IoMdSearch className='w-[30px] h-[30px] text-green-500 '/>
          <input type="text" className='w-[100%] outline-none text-[20px]' placeholder='Search Items...'/>
      </form>
     <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
      <span className='absolute text-green-500 top-0 right-2 text-lg font-semibold'>0</span>
        <RiShoppingBag4Fill className='w-[30px] h-[30px] text-green-500'/>
      </div>
    </div>
  )
}

export default Nav
