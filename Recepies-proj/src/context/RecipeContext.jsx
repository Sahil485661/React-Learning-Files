import React, { createContext, useState } from 'react'
export const recipecontext = createContext()
const RecipeContext = (props) => {
    const [data, setData] = useState(()=> {return (JSON.parse(localStorage.getItem("recipe")) || [])}); //Lazy Initialization (function pattern in useState) use kiya hai
    console.log(data)
  return (
     <recipecontext.Provider value ={{data, setData}}>{props.children}</recipecontext.Provider>
  )
}

export default RecipeContext