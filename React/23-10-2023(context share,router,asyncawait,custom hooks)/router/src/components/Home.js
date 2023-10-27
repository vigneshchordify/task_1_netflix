import React, { useContext } from 'react'
import { AppContext, AppProvider } from '../context'
import Movies from './Movies'


function Home() {


  return (
    <div><Movies/>

     
    </div>
  )
}

export default Home