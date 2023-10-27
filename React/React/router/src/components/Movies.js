import React, { useContext } from 'react'
import { AppContext } from '../context'
import { NavLink } from 'react-router-dom'


function Movies() {

  const { movie } = useContext(AppContext)
  return (
    <div className='d-flex  ' style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}} >
      {movie.map((curMovie) => {
        const { imdbID, Title, Poster } = curMovie
        return <div className='w-25 d-flex'>
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div class="card" style={{width:"16rem"}}>
              <img src={Poster} class="card-img-top " alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{Title}</h5>
                 
                </div>
            </div>

          </NavLink>

        </div>
      })

      }
    </div>
  )
}

export default Movies