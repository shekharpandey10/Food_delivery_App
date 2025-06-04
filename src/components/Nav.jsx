import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
const Nav = () => {
  let {input,setInput,filteredItems,setFilteredItems,setShowCard}=useContext(dataContext)

  useEffect(()=>{
    let searchList= food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))
    setFilteredItems(searchList)
  },[input])
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-8 md:px-8 '>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl '>
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form action="" className='flex items-center bg-white px-3 gap-5 rounded-md shadow-md w-[55%] h-[60px] md:w-[70%] ' onSubmit={(e)=>e.preventDefault()}>
          <IoMdSearch className='w-[30px] h-[30px] text-green-500 '/>
          <input type="text" className='w-[100%] outline-none text-[20px] sm:w-[40%]' placeholder='Search Items...'onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
     <div className='w-[60px] h-[60px] bg-white flex justify-center cursor-pointer items-center rounded-md shadow-xl relative' onClick={()=>{
        setShowCard(true)
      }}>
      <span className='absolute text-green-500 top-0 right-2 text-lg font-semibold' >0</span>
        <RiShoppingBag4Fill className='w-[30px] h-[30px] text-green-500'/>
      </div>
    </div>
  )
}

export default Nav
