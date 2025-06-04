import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext=createContext()
function UserContext({children}) {
    const [input,setInput]=useState("")
    const [showCard,setShowCard]=useState(false)
      const [filteredItems, setFilteredItems] = useState(food_items)
    let data={
        input,
        setInput,
        filteredItems,setFilteredItems,showCard,
        setShowCard
    }
  return (
    <div>
        <dataContext.Provider value={data}>
      {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext
