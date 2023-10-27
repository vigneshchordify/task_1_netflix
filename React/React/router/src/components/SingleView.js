import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context';


function SingleView() {

  const { movie } = useContext(AppContext)


  const {id}=useParams();
  const data=movie.filter(i=>i.imdbID==id?i:null
    

  )
  console.log(data);

  return (
    <div>
      <div class="card mb-3" style={{maxWidth:"1000px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={data[0].Poster}class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{data[0].Title}</h5>
        <p class="card-text">Year:{data[0].Year}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleView