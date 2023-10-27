import React, { useContext } from 'react'
import { AppContext } from '../context'
import { NavLink } from 'react-router-dom'


function Movies() {

  const {movie}=useContext(AppContext)
  return (
    <div className='d-flex ' >
      {movie.map((curMovie)=>{
        const {imdbID,Title,poster}=curMovie
        return <div className='w-25 d-flex bg-success'>
          <NavLink to={`movie/${imdbID}`}>
            <div>
              <image src={poster}></image>
              <h1>{Title}</h1>
            </div>
          </NavLink>
          
        </div>
})

      }
    </div>
  )
}

export default Movies