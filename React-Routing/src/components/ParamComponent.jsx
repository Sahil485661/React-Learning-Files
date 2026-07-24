import React from 'react'
import { useParams } from 'react-router-dom'


function ParamComponent() {
    const {id} = useParams()
  return (
    <div>Parameter: {id}</div>
  )
}

export default ParamComponent