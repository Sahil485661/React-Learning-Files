import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import Paste from './Paste'
import ViewPaste from './ViewPaste'
import {useDispatch, useSelector} from 'react-redux'
import { addToPaste } from '../redux/pasteSlice'
import { updateToPaste } from '../redux/pasteSlice'
const Home = () => {
   const [title, setTitle] = useState('')
   const [value, setValue] =  useState('')
   const [searchParams, setSearchParams] = useSearchParams()
   const pasteId = searchParams.get("pasteId")
   const dispatch = useDispatch()
   const allPaste = useSelector((state)=> state.paste.paste)
   useEffect(()=>{
    if(pasteId){
      const paste = allPaste.find((p)=> p._id===pasteId)
      setTitle(paste.title);
      setValue(paste.content)
    }
   },[pasteId])
   function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(32),
      createdAt: new Date().toISOString()
    }
    if(pasteId){
      //update
      dispatch(updateToPaste(paste))
    }
    else{
      //create
      dispatch(addToPaste(paste))
    }
    //After creation and updation
    setTitle('')
    setValue('')
    setSearchParams({})   //that is paste ID
   }
  return (
    <div>

    <div className='flex justify-center align-middle gap-4 text-pink-500 border-solid-100 bg-zinc-800 shadow-md, border border-slate-700 p-6'>
      <input type="text" placeholder='Enter your Task' className='p-1 rounded-2xl border-2 border-b-blue shadow-xl/30 shadow-pink-500 ' onChange={(e)=> setTitle(e.target.value)} value={title}/>
      <br />
      <button className='p-1 rounded-2xl border-2 border-b-blue shadow-xl/30 shadow-pink-500' onClick={createPaste}>{ pasteId ? "Update Paste":"Create Paste " }</button>
      </div>
      <div className='bg-zinc-800 flex justify-center align-middle gap-4 pl-1 '>
        <textarea className='w-1/2 text-2xl text-white rounded-2xl border-2 border-blue m-3 shadow-2xl/30 shadow-blue-800 placeholder:text-shadow-blue-900 p-3 ' placeholder=' Enter your content' rows={17} value={value} onChange={(e)=> setValue(e.target.value) } ></textarea>
      
      
    </div>
    </div>
  )
}

export default Home