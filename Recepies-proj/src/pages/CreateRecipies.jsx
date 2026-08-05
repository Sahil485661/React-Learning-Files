import React, { useContext } from 'react'

import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'
import {recipecontext} from '../context/RecipeContext'

const CreateRecipies = () => {
    const {data, setData} = useContext(recipecontext);
    const { reset, register, handleSubmit, formState: { errors } } = useForm();
    const SubmitHandler =(recipe)=>{
        recipe.id = nanoid()
        const updatedData = [...data, recipe]
        setData(updatedData)
        localStorage.setItem("recipe", JSON.stringify(updatedData))
        reset();
    }

    //Jab bhi state ek Array ([]) ho aur usme naya item add karna ho setdata([...data, newItem])Direct setdata(newItem) tabhi likhte hain jab state khud ek Single Object/Value ho, array na ho.
  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className=" max-w-lg flex flex-col p-3">
        <input type="url" placeholder='Please paste url of the image' className='h-10 border-b outline-none font-light py-1 px-2' {...register("file")}/>
       {errors.file && <small className='font-light text-rose-400'>{errors.file.message}
        </small>}
        
        <input type="text" placeholder='Recipe Title' className='border-b outline-0 font-light p-2 block py-1 px-2' {...register("title", {required : "Title are required"})} />
         {errors.title && <small className='font-light text-rose-400 py-1 px-2'>{errors.title.message}
        </small>}
        <input type='text' className='font-thin border-b px-2 py-1 block outline-none' {...register("chef", {required: "Chef name is required"})} placeholder='Enter Chef name'></input>
        {errors.chef && <small className='font-light text-rose-400 py-1 px-2'>{errors.chef.message}
        </small>}
        <select {...register("category")} className='text-gray-300 bg-gray-700 my-4 font-thin outline-none '>
            <option value="not selected">Choose option</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
        </select>
        
        <textarea placeholder='Here Describe ingradients' className='text-gray-50 outline-none border-b font-light px-2 py-1' {...register('ingredients', { required: "Ingredients are required" })}></textarea>
        {errors.ingredients && <small className='font-light text-rose-400'>{errors.ingredients.message}
        </small>}
        
    
        <textarea placeholder='Here Describe making instructions' className='text-gray-50 outline-none border-b font-light py-1 px-2' {...register("instructions", {required: "Instructions are required"})}></textarea>
         {errors.instructions && <small className='font-light text-rose-400'>{errors.instructions.message}
        </small>}
        <button type='submit' className='bg-zinc-900 font-thin rounded-2xl my-3 py-2 transition-all hover:-translate-y-1 ease-in-out duration-300 active:scale-100 cursor-pointer active:bg-green-600'>Save Racipe</button>

    </form>
  ) 
}

export default CreateRecipies