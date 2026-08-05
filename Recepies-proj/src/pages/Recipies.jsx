import React from 'react'
import {recipecontext} from '../context/RecipeContext'
import { useContext } from 'react'

const Recipies = () => {
  const {data, setData} = useContext(recipecontext)
  console.log(data)
  console.log(data.id)
  const handleDelete = (id) =>{
    const updatedData = data.filter((recipe)=> recipe.id!== id)
    setData(updatedData)
    localStorage.setItem("recipe", JSON.stringify(updatedData))
  }

  const renderRecipies = data && data.length > 0 ? ( data.map((recipe)=>(
    <div key={recipe.id} className='my-10 px-2 flex'>
      <div className='mx-4 shrink-0 rounded-3xl w-40 h-40 overflow-hidden'>
        <img src={recipe.file} alt={recipe.title || "recipe"} className='rounded-3xl w-full h-full transition-transform duration-300  hover:scale-90 object-cover' />
      </div>
      <div className='mx-4 text-nowrap'><h1>{recipe.title}</h1></div>
      <div className='px-1 font-thin flex flex-col text-nowrap'><small className=' '>Chef Name: {recipe.chef}</small>
      <small>Category: {recipe.category || "indian"}</small></div>
      <div className='px-1 text-wrap'><p>Ingredient: {recipe.ingredients}</p>
      <p>Instructions:{recipe.instructions}</p></div>
      <div className='rounded-2xl mx-20 shrink-0 bg-red-400 h-10 active:bg-red-400 text-nowrap border hover:scale-90 '><button onClick={()=> handleDelete(recipe.id)} className=' cursor-pointer px-4 py-1.5 w-full rounded hover:scale-90 transition-all ease-in-out duration-300 active:text-fuchsia-900'>Delete recipe</button></div>
      
    </div>
  ))): (<div className='flex justify-center align-middle font-thin text-shadow-blue-700'><h1>Not any recipe found</h1>
 </div>)


  return (
    <div>{renderRecipies}</div>
  )
}

export default Recipies


// Simple Formula: Array (Plural).map((Single Item (Singular))
// recipes.map((recipe) => ...)
// users.map((user) => ...)
// data.map((item) => ...)
//shrink-0 it is use in tailwind for fit the image in the div