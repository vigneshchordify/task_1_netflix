import React, { useContext } from 'react'
import { AppContext, AppProvider } from '../context'
import Movies from './Movies'


function Home() {


  return (
    <div className='text-center'>

      <h1>Movie List</h1>
      <h3 className='mb-5'>Click to single view</h3>
      
      <Movies/>

     
    </div>
  )
}

export default Home