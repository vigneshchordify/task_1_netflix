import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate=useNavigate()

  const ordernavigate=()=>{
    navigate('order')
  }
  return (
    <div>
      <div>
        Home
      </div>

      <button onClick={ordernavigate} > Place Order</button>
    </div>
  )
}

export default Home