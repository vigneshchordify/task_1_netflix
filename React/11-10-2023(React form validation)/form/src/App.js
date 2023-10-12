
import { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form"

function App() {


  //validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      age: '',
      DOB: '',
      Email: '',
      Number: ''
    }
  })

  //stored state
  const [userdata, setUserdata] = useState()


  return (


    <div className="App">

      <form className='registerfrm' onSubmit={handleSubmit((data) => {
        setUserdata(data)
        console.log(userdata);

      })} >


        <h1>Register Form</h1>
        <div className='subdiv'>
          <div>
            <label>First Name</label><br />
            <input {...register("firstname", { required: 'this is required' })} id='fname' name='firstname' type="text" ></input>
            <p className='errmsg'>{errors.firstname?.message}</p>
          </div>
          <div>
            <label>Last Name</label><br />
            <input {...register("lastname", { required: "This is Required", minLength: { value: 2, message: "minimum 2 values required" } })} id='lname' type="text" ></input><br />
            <p className='errmsg'>{errors.lastname?.message}</p>
          </div>
        </div>


        <div className='subdiv'>
          <div>
            <label>Age</label><br />
            <input {...register("age", {
              required: "Age required", maxLength: {
                value: 2,
                message: "invalid age"
              }
            })} id='age' type="text" ></input>
            <p className='errmsg'>{errors.age?.message}</p>
          </div>
          <div>
            <label>DOB</label><br />
            <input {...register("DOB", { required: "DOB required" })} id='dob' type="date" ></input><br />
            <p className='errmsg'>{errors.DOB?.message}</p>
          </div>
        </div>


        <div className='subdiv'>
          <div>
            <label>mail</label><br />
            <input {...register("Email", {
              required: "Email Required", pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })} id='mail' type="text" ></input>
            <p className='errmsg'>{errors.Email?.message}</p>
          </div>
          <div>
            <label>Number</label><br />
            <input {...register("Number", { required: "Number Required", minLength: { value: 10, message: 'Minimum 10 digits required' } })} id='number' type="Number" ></input><br />
            <p className='errmsg'>{errors.Number?.message}</p>
          </div>
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



        </div>
        : null
      }






    </div>
  );
}

export default App;
