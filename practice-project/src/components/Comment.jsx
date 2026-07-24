//This was also a project which are inspired from LikeButton project
// Date: 07/07/26

import React, { useState } from 'react'

function Comment({topic}) {
    const [isComment, setStateComment] = useState(false)
    function handleComment(){
        setStateComment(!isComment)
    }
  return (
    <div>

        {isComment ? (<div>
            <textarea name="" id="" placeholder='Kuch toh do feedback'></textarea>
            <p>Write first comment</p>
        </div>
        
            ): (<p>you are commented upon "{topic}" post</p>) }
        <button onClick={handleComment} style={{margin: "20px", padding: "20px", background: 'blue', color: "red", borderRadius:  "20px"}}>Comment</button>
        
    </div>
  )

}
export default Comment