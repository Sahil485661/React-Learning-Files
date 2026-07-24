import { useEffect, useState } from "react"
import React from 'react'

function DataFetcher() {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response=>response.json())
      .then(data=>setData(data));
      setLoad(false)
      
    }, [])
    
  return (
    <div>
        {load ?
            <h1>Loading....</h1>:(
                <ul>
                    {data.map(post =>{ return(
                        <li key = {post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                        )
                    })}
                </ul>
            )
        }
    </div>
  )
}

export default DataFetcher