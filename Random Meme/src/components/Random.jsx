import React, { useEffect, useState } from 'react'
import "../components/Random.css"
const random = () => {
  const [data, setData] = useState({title :'', url:''})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

    const key = import.meta.env.VITE_API_KEY
    
    const api = `https://api.giphy.com/v1/gifs/random?api_key=${key}&limit=1`;
      async function Memes(){
    try{
      setLoading(true)
      
      setError("")
      const meme = await fetch(api)
      if(!meme.ok){
        throw new Error(`Something went wrong : ${meme.status}`)
      }
      const {data} = await meme.json()
      const title = data.title;
      const url = data.images.downsized.url;
      setData({title, url})
      console.log(data)
      console.log(title)
      console.log(url)
    }
    catch(error){
      console.log(error)
      setError(error)
    }
   finally{
    setLoading(false)
   }

  }
  
  return (
    <div className='flex-col gap-2 flex items-center justify-center h-screen'>
      
    <div className='w-92 border border-2xl text-3xl rounded-2xl hover:bg-green-400 '>
        <h2>Random Meme Generator</h2>
    </div>
    <div className='flex flex-col h-100 w-90 border border-2xl text-3xl rounded-2xl ' >
        {loading ? <span className="loader"></span>:<><h3 className='w-90 h-20'>{data.title}</h3>
        
           {data.url?<img src={data.url} alt="" className='object-cover shrink-0 overflow-hidden w-65 h-65 mx-auto outline-none'/>: ""}</>
   
  }
    {error&& <small className='text-rose-700 '>{error}</small>}
        
    </div>
      
      <button onClick={()=> Memes() } disabled={loading} className='w-92 rounded-2xl border border-red-500 bg-red-500 text-2xl text-white active:bg-green-600 cursor-pointer transition-all hover:-translate-y-1 ease-in-out duration-300 pb-1'>{loading ? "Loading...":"Click for meme"}</button>
    </div>
  )
}

export default random
// Simple Formula: Array (Plural).map((Single Item (Singular))
// recipes.map((recipe) => ...)
// users.map((user) => ...)
// data.map((item) => ...)
//shrink-0 it is use in tailwind for fit the image in the div