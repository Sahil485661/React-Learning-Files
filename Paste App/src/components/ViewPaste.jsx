import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'
import Paste from './Paste'
import { useDispatch, useSelector } from 'react-redux'
import { addToPaste } from '../redux/pasteSlice'
import { updateToPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'


const ViewPaste = () => {
  const { id } = useParams()
  console.log("final", id)
  const allPaste = useSelector((state) => state.paste.paste)
  const paste = allPaste.filter((p) => p._id === id)[0]
  function handleCopy(content){
    navigator.clipboard.writeText(content);
    toast.success("Copy to clipboard successfull")
  }
  return (
    <div>

      <div className='flex justify-center align-middle gap-4 text-pink-500 border-solid-100 bg-zinc-800 shadow-md, border border-slate-700 p-6 '>
        <input type="text" placeholder='Enter your Task' className='p-1 rounded-2xl border-2 border-b-blue shadow-xl/30 shadow-pink-500' disabled value={paste.title} />
        <br />
      </div>
      <div className='bg-zinc-800 flex justify-center align-middle gap-4 pl-1 '>
        
        <textarea className='w-1/2 text-2xl text-white rounded-2xl border-2 border-blue mt-3 shadow-2xl/30 shadow-blue-800 placeholder:text-shadow-blue-900 p-3' rows={17} value={paste.content}  ></textarea>
        <button className='rounded-2xl border-2 border-blue m-3 shadow-2xl/30 shadow-blue-800 w-20 h-10 text-white cursor-pointer static' onClick={()=>handleCopy(paste.content)}>Copy</button>


      </div>
    </div>
  )
}

export default ViewPaste