import React, { useState } from 'react'
import "./Todo.css"
import { addTodo, deleteTodo, removeTodo } from '../actions'
import { useDispatch, useSelector } from 'react-redux'




const Todo = () => {

  const list = useSelector((state) => state.todoReducers.list)
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState('')
  
  return (
    <>   

      <div className='main-div mx-auto  mt-5'>

        <h2 className='text-center'>Add Todo here</h2>
        <input value={inputData} onChange={(event) => { setInputData(event.target.value) }} placeholder='Enter todos here ' className='form-control mt-5 ' ></input>
        <button className='form-control mt-3 ' onClick={() => dispatch(addTodo(inputData), setInputData(""))}>Submit</button>


      </div>

      {
        list.map((elem) => (
          <div className='list_div mx-auto listdiv d-flex mt-5 justify-content-between' key={elem.id}>
            <p className='ms-1'>{elem.data}</p>
            <button  className='form-control  ' onClick={() => dispatch(deleteTodo(elem.id), setInputData(""))}>Delete</button>


          </div>

        ))
      }

      <div className=' mx-auto remove d-flex justify-content-center mt-5'>
        <button className='btn  btn-warning mx-auto ' onClick={()=>dispatch(removeTodo())}>remove all</button>
      </div>


    </>
  )
}

export default Todo