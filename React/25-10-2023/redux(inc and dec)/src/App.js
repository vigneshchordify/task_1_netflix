import React from 'react'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './actions'



const App = () => {

  const Mystate=useSelector((state)=>state.changeTheNumber)

  const dispatch=useDispatch()
  return (
    <>
<div className='w-25 mx-auto mt-5'>
      <h1 className='wel'>Welcome to redux</h1>
  
      <div className="btn-group mt-5 mx-auto w-100" role="group" aria-label="Basic example">
    <button onClick={()=>dispatch(decNumber())} title='Decrement' type="button" className="btn btn-secondary">-</button>
   <input className='incinp form-control w-25 text-center' value={Mystate} ></input>
    <button onClick={()=>dispatch(incNumber())} title='Increment' type="button" className="btn btn-secondary">+</button>
  </div>
</div>

    </>
  )
}

export default App