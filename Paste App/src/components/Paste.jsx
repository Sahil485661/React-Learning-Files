import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { Link, NavLink } from 'react-router-dom'

const Paste = () => {
  const pastes = useSelector((state) => state.paste.paste)
  console.log(pastes)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();
  const filterData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))
  function handleDelete(pasteId) {
    dispatch(removeToPaste(pasteId))
  }
  function handleCopy(content) {
    navigator.clipboard.writeText(content)
    toast.success("paste content copied")
  }
  function handleShare(paste) {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.content,
        url: window.location.href
      })
        .then(() => toast.success("Shared your paste"))
        .catch((error)=> console.log("Not success share",error)) 
    }
    else {
    //computer me support nahi hoga, toh yeh wala block chalega
    console.log("Web Share API is NOT supported on this browser/desktop.");
    toast.error("Share feature is not supported on this browser");
  }
  }
  const formatDate = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  
  // Apne hisab se format choose kar sakte ho:
  return date.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    time: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};
  return (
    <div className='flex flex-col bg-zinc-800 text-white'>
      <input className='text-gray-400 rounded-2xl p-2 min-w-[700px] m-2 border-3' placeholder='Search' type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className='flex flex-col bg-zinc-800'>
        {filterData.length > 0 && filterData.map((paste) => {
          return (
            <div className='border-1 flex flex-col bg-zinc-800 rounded-2xl p-2' key={paste._id}>
              <div >
                {paste.title}
              </div>
              <div>
                {paste.content}
              </div>
              <div>
                {formatDate(paste.createdAt)}
              </div>
              <div className='flex flex-row gap-4 place-content-evenly cursor-pointer '>
                <NavLink className='border-2 border-pink-500 m-2 p-2 rounded-2xl shadow-2xl shadow-pink-700' to={`/?pasteId=${paste?._id}`}
                >Edit</NavLink>
                <NavLink className='shadow-2xl shadow-pink-700 border-2 border-pink-500 rounded-2xl m-2 p-2' to={`/pastes/${paste?._id}`}
                >View</NavLink>
                <button className='shadow-2xl shadow-pink-700 border-2 border-pink-500 rounded-2xl m-2 p-2' onClick={() => handleDelete(paste._id)}>Delete</button>
                <button className='shadow-2xl shadow-pink-700 border-2 border-pink-500 m-2 p-2 rounded-2xl' onClick={() => handleCopy(paste?.content)}>Copy</button>
                <button className='shadow-2xl shadow-pink-700 border-2 border-pink-500 m-2 p-2 rounded-2xl' onClick={()=> handleShare(paste)}>Share</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Paste