import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext=createContext()
function UserContext({children}) {
    const [input,setInput]=useState("")
      const [filteredItems, setFilteredItems] = useState(food_items)
    let data={
        input,
        setInput,
        filteredItems,setFilteredItems
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
