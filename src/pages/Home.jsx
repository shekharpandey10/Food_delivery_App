import React from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'

const Home = () => {
  return (
    <div className='w-full min-h-screen  bg-slate-200'>
      <Nav/>
      <div className='flex  flex-wrap p-6 justify-center gap-8  '>
        {categories.map((item)=>{
        return  <div className='bg-white p-8 rounded-md shadow-md flex-col-reverse items-center text-xl font-bold text-gray-500 flex text-center gap-4 w-[150px] hover:bg-green-200 cursor-pointer transition-all duration-300'>
              {item.name}
              {item.image}
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
