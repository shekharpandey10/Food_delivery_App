import React from 'react'
import image1 from '../assets/image1.jpg'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from 'react-icons/gi'
function Card({ name, image, id, price, type }) {
  return (
    <div className='w-[300px] h-[400px] shadow-md rounded-lg shadow-lg bg-white shadow-sm flex flex-col gap-4 hover:transition-all '>
      <div className='w-[300px] h-[250px]  w-full overflow-hidden p-4'>
        <img src={image} alt='' className='w-full rounded-lg object-cover' />
      </div>
      <div className='text-2xl font-semibold px-3'>{name} </div>
      <div className='w-[100%] flex justify-between text-xl font-semibold px-4 text-green-500'>
        <div> Price: {price} </div>
        <div className=' flex gap-3 justify-center items-center'>
          {type?.trim().toLowerCase() === 'veg' ? (
            <LuLeafyGreen />
          ) : (
            <GiChickenOven className='text-red-400' />
          )}
          <span className='capitalize'>{type}</span>
        </div>
      </div>
      <button className='bg-green-300 text-gray-600 font-semibold transition-all duration-5000 p-2 m-3 rounded-lg hover:bg-green-400'>
        Add to Dish
      </button>
    </div>
  )
}

export default Card
