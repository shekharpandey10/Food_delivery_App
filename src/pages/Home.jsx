import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'

const Home = () => {
  let{filteredItems,setFilteredItems}=useContext(dataContext)

  function changeCategory(categoryName) {
    if (categoryName.toLowerCase() === 'all') {
      setFilteredItems(food_items)
    } else {
      const newCategory = food_items.filter(
        (item) => item.food_category.toLowerCase() === categoryName.toLowerCase()
      )
      setFilteredItems(newCategory)
    }
  }

  return (
    <div className='w-full min-h-screen bg-slate-200'>
      <Nav />
      <div className='flex flex-wrap p-6 justify-center gap-8'>
        {categories.map((category) => (
          <div
            key={category.id}  // unique key here
            className='bg-white p-8 rounded-md shadow-md flex-col-reverse items-center text-xl font-bold text-gray-500 flex text-center gap-4 w-[150px] hover:bg-green-200 cursor-pointer transition-all duration-300'
            onClick={() => changeCategory(category.name)}
          >
            {category.name}
            {category.image}
          </div>
        ))}
      </div>
      <div className='flex flex-wrap justify-center gap-6 items-center pb-8 mb-10'>
        {filteredItems.map((item) => (
          <Card
            key={item.id}  // unique key here
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  )
}

export default Home