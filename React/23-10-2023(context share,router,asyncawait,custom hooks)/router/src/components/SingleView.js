import React from 'react'
import { useParams } from 'react-router-dom'

function SingleView() {

  const {id}=useParams();
  return (
    <div>SingleView {id}</div>
  )
}

export default SingleView