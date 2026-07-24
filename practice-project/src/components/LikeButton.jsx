//Date 07/07/26
// This task given by Gemini for practice state 

import React, { useState } from 'react'

function Likebutton({topic}) {
  const [isLiked, state] = useState(false)

  function handleLike(){
    state(!isLiked);
  }
    return (
    <div>
        <button onClick={handleLike} style={{padding: '20px', margin:"20px", borderRadius:"20px", backgroundColor: "AccentColor"}}>
            {isLiked ? `💗 Liked ${topic}`: `🤍 Not Liked ${topic}`}
        </button>

    </div>
  )
}

export default Likebutton