
import { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {

  //cascading dropdown values

  const states = ['Tamil Nadu', 'karnataka', 'kerala', "Andra pradesh"]

  const district = {
    'Tamil Nadu': ['Coimbatore', 'salem', 'Erode', 'thirunalveli'],
    'karnataka': ['Bengaluru', 'Udupi', 'Vijayapura', 'Bidar'],
    'kerala': ['Idukki', 'Ernakulam', 'Palakad', 'trivandrum'],
    'Andra pradesh': ['Vishakapattanam', 'Guntur', 'Prakasam', 'Eluru'],
  }

  // const [selectstate, setSelectState] = useState('')
  // console.log(selectstate);


  //implementing yup schema
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.string().min(1).max(2).required(),
    DOB: yup.string().required(),
    Email: yup.string().email().required(),
    Number: yup.string().min(10).max(13).required(),
    state: yup.string().required(),
    district: yup.string().required()

  })



  //validation
  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const temp = watch("state")



  //stored state
  const [userdata, setUserdata] = useState()


  return (


    <div className="App">



      <form className='registerfrm' onSubmit={handleSubmit((data) => {
        setUserdata(data)
        reset()
        console.log(userdata);

      })} >


        <h1>Register Form</h1>
        <div className='subdiv'>
          <div>
            <label>First Name</label><br />
            <input {...register("firstname")} id='fname' name='firstname' type="text" ></input>
            <p className='errmsg'>{errors.firstname?.message}</p>
          </div>
          <div>
            <label>Last Name</label><br />
            <input {...register("lastname")} id='lname' type="text" ></input><br />
            <p className='errmsg'>{errors.lastname?.message}</p>
          </div>
        </div>


        <div className='subdiv'>
          <div>
            <label>Age</label><br />
            <input {...register("age")} id='age' type="text" ></input>
            <p className='errmsg'>{errors.age?.message}</p>
          </div>
          <div>
            <label>DOB</label><br />
            <input {...register("DOB")} id='dob' type="date" ></input><br />
            <p className='errmsg'>{errors.DOB?.message}</p>
          </div>
        </div>


        <div className='subdiv'>
          <div>
            <label>mail</label><br />
            <input {...register("Email")} id='mail' type="text" ></input>
            <p className='errmsg'>{errors.Email?.message}</p>
          </div>
          <div>
            <label>Number</label><br />
            <input {...register("Number")} id='number' type="Number" ></input><br />
            <p className='errmsg'>{errors.Number?.message}</p>
          </div>
        </div>
        <div>
          <label>Select State</label>
          <select {...register('state')}>
            <option value={''}>Select State</option>
            {
              states.map(state => {
                return <option>{state}</option>
              })
            }

          </select>
          <p className='errmsg'>{errors.state?.message}</p>

          <select {...register('district')}>

            {
              temp ? (
                district[temp].map(i => {
                  return <option>{i}</option>
                })
              ) : null
            }

          </select>
          <p className='errmsg'>{errors.district?.message}</p>

        </div>


        <button type='submit'>Submit</button>
      </form>

      {/* Details  */}
      {userdata ?
        <div className='details'>
          <h2>Name:{userdata.firstname} {userdata.lastname}</h2>
          <h2>Age: {userdata.age}</h2>
          <h2>Date of Birth: {userdata.DOB}</h2>
          <h2>Mail: {userdata.Email}</h2>
          <h2>Number: {userdata.Number}</h2>
          <h2>State: {userdata.state}</h2>
          <h2>District: {userdata.district}</h2>



        </div>
        : null
      }






    </div>
  );
}

export default App;
