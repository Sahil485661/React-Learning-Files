import React, { useState } from 'react'
import "../components/Random.css"
const SearchMeme = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([{ id: "", title: '', url: '' }])
  const [error, setError] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  async function findMeme() {
    const api = import.meta.env.VITE_API_KEY
    setHasSearched(true)
    try {
      setLoading(true)
      setError("")
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${searchTerm}&limit=12`)
      if (!response.ok) {
        throw new Error("Data Not recieved")
      }
      const { data } = await response.json()
      const array = data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized.url
      }))
      setData(array)

      console.log(array)
    }
    catch (error) {
      console.log(error)
      setData([])
      setError("Server is not responding")
    }
    finally {
      setLoading(false)
    }
  }

  return (

    <div className='flex flex-col'>
      <div className='flex justify-center items-center' ><h2 className=' item-center text-2xl font-bold border border-white rounded-3xl p-2 px-3'>Search Any Memes Here </h2></div>
      <div className=' mb-5 justify-center items-center flex '>
        {/* Socho — onChange handler ko React khud automatically event object pass karta hai jab bhi wo trigger hota hai। Tumhe khud ek naya function likhna padega onChange mein jo ye event receive kare, phir uske andar setSearchTerm ko call karo event ki value nikal ke: */}
        <input required={true} className='p-3 px-5 mx-1 w-85 h-10 rounded-3xl border border-white' onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => {
          if (e.key == "Enter") {
            findMeme()
          }
        }} type="text" placeholder='Search Meme' />
        <button disabled={loading} onClick={() => findMeme()} className='text-4xl active:scale-90 text-emerald-600 cursor-pointer'>🔍</button>
      </div>
      {loading && <><span className='loader justify-center items-center'></span></>}
      {error? <small className='text-rose-700 '>{error}</small>: 
      <div className='mt-3 flex gap-4 flex-wrap'>

        {hasSearched && (data.length > 0 ? data.map((meme) =>

          <div className=' w-80 h-96 rounded-xl shadow-lg shadow-cyan-500 p-6' key={meme.id}>
            <h3 className='text-wrap text-sm mb-4 '>{meme.title || "This meme has not title"} </h3>
            <img className='shrink-0 overflow-hidden w-full h-48 object-cover outline-none ' src={meme.url || null} alt="Meme not available" />
          </div>

        ) :
          <div className='flex justify-center items-center w-screen'>
            {/* Text ko center karne ke liye justify-center → horizontally center karta hai.

              items-center → vertically center karta hai.
              Lekin vertical centering tabhi kaam karega jab parent container ki height defined ho. Agar parent div ki height auto hai (sirf content jitni), to vertical centering ka effect dikhेगा hi nahi. aisa hi width ke liye bhi same hota hai */}
            <small className='text-red-700'>Memes not found</small></div>)}
            

      </div>
}
    </div>
  )
}

export default SearchMeme
// Sahil, chalo ek‑ek Tailwind utility class ko samajhte hain jo tumne image ke liye likhi hai:

// ---

// ### 🔧 Classes ka breakdown
// - **`shrink-0`**
//   - Flexbox context me use hota hai.
//   - Matlab: “ye element shrink nahi hoga, apni width maintain karega.”
//   - Agar parent flex container hai aur space kam hai, to ye image apna size chhota nahi karega.

// - **`overflow-hidden`**
//   - Agar image box se bahar nikalti hai, to extra part cut ho jaata hai (scroll nahi hota).
//   - Useful jab tum fixed height/width card bana rahe ho aur image crop karna chahte ho.

// - **`w-full`**
//   - Image parent container ki full width occupy karegi.
//   - Matlab: jitna card ka width hai, utna hi image ka width ho jaayega.

// - **`h-48`**
//   - Fixed height set karta hai (≈ 12rem, 192px).
//   - Matlab: image box ki height fix ho jaayegi, chahe image ka aspect ratio alag ho.

// - **`object-cover`**
//   - Image ko box ke andar poora cover karne ke liye crop karta hai.
//   - Aspect ratio maintain hota hai, distortion nahi hoti, bas thoda crop ho sakta hai.

// - **`outline-none`**
//   - Focus hone par (jaise tab key se select karna) default browser outline remove kar deta hai.
//   - Mostly buttons/inputs ke liye use hota hai, image ke liye zaroori nahi hai.

// ---

// ### ⚡ Card me image ke liye kya zaroori hai
// - **Must have:**
//   - `w-full` → card ke width ke hisaab se image stretch ho.
//   - `h-48` → ek consistent height mile.
//   - `object-cover` → image neatly crop ho aur gallery look aaye.
//   - `overflow-hidden` → extra part cut ho jaaye, layout clean rahe.

// - **Optional:**
//   - `shrink-0` → sirf tab useful hai jab parent flexbox hai aur tum nahi chahte ki image shrink ho.
//   - `outline-none` → image ke liye unnecessary hai, inputs/buttons ke liye use hota hai.

// ---

// ### ✅ Recommended combo for card image
// ```html
// <img
//   src={meme.url}
//   alt={meme.title}
//   class="w-full h-48 object-cover overflow-hidden rounded-t-lg"
// />
// ```
// 👉 Ye combo ekdum neat card banata hai: fixed height, full width, crop properly, aur rounded top edges.

// ---

// ### ⚡ Analogy
// Socho card ek **photo frame** hai:
// - `w-full h-48` → frame ka size fix kar diya.
// - `object-cover` → photo ko frame ke andar fit karne ke liye thoda crop kar diya.
// - `overflow-hidden` → frame ke bahar nikla hua part cut kar diya.
// - `shrink-0` → frame ko chhota hone se roka.
// - `outline-none` → frame ke around default border hata diya (image ke liye zaroori nahi).

// ---

// 👉 Matlab: ek card ke image ke liye tumhe **w-full + h-48 + object-cover + overflow-hidden** kaafi hai. Baaki classes optional hain.  
