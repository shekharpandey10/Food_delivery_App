import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import image1 from '../assets/image1.jpg'
function Card2() {
  return (
   <div>
     <div className='w-full  h-[120px] p-2 shadow-lg bg-slate-100 flex justify-between'>
        <div className=' w-[50%] h-[100%] flex gap-5 '>
            <div className='h-full w-[60%] overflow-hidden rounded-lg'>
                <img src={image1} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='font-bold text-gray-500 text-lg'>chicken soup</div>
                <div className='w-100px] h-[40px] rounded-lg overflow-hidden shadow-xl flex justify-center items-center border border-green-400 text-green-600'>
                    <button className='w-[35px] h-full   hover:bg-slate-200 '>-</button>
                    <span className='  h-full w-[40px] bg-slate-300  flex justify-center items-center '>1</span>
                    <button className='  h-full w-[35px] hover:bg-slate-200'>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 relative'>
            <div className='font-bold text-xl text-green-400'>
                Rs 399/-
            </div>
            <RiDeleteBin6Fill className='text-red-500 cursor-pointer text-2xl absolute bottom-4 left-[50px]'/>
        </div>
    </div>
    <div className='mt-5 flex justify-center items-center flex-col gap-5'>
        <div className='w-[70%] bg-black h-[1px] '></div>
        <div className='flex w-[70%] justify-between items-center text-green-400'>
            <div>Subtoal</div>
            <div>Rs 399/-</div>
        </div>
        <div className='flex w-[70%] justify-between text-green-400'>
            <div>Delivery Fees</div>
            <div>Rs 20/-</div>
        </div>
        <div className='flex w-[70%] justify-between text-green-400'>
            <div>Taxes</div>
            <div>Rs 1995/-</div>
        </div>
        <div className='w-[70%] bg-black h-[1px] '></div>
        <div className='flex w-[70%] justify-between text-green-400 text-2xl font-bold text-gray-400'>
            <div>Total</div>
            <div>Rs 420/-</div>
        </div>
        <button className='bg-green-400 w-[70%] h-[40px] rounded-md font-semibold text-white'>Place Order</button>
    </div>
   </div>
  )
}

export default Card2
