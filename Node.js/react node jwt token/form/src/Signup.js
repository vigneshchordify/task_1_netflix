import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import instance from './Base_url';
import { Link } from 'react-router-dom';




function Signup() {
 





  //implementing yup schema
  const schema = yup.object().shape({

    password: yup.string().required(),

    role: yup.string().required(),
    email: yup.string().email().required()


  })



  //validation
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const temp = watch("state")



  //stored state
  const [userdata, setUserdata] = useState()



  return (
    <div>
      <form className='registerfrm' onSubmit={handleSubmit(async (data) => {
        setUserdata(data)
        const body = {
          email: data.email,
          password: data.password,
          role: data.role
        }
        try{
          const dummy = await instance.post("/registerapi", body)
          alert(dummy.data.message)

         
        }
        catch(err){

          console.log(err);
        }
      
        
        
        
        
        reset()




      })} >


        <h1>Register Form</h1>
        <div className='subdiv'>
          <div>
            <label>mail</label><br />
            <input {...register("email")} id='mail' type="text" ></input>
            <p className='errmsg'>{errors.email?.message}</p>
          </div>
          <div>
            <label>Password</label><br />
            <input {...register("password")} id='lname' type="text" ></input><br />
            <p className='errmsg'>{errors.password?.message}</p>
          </div>
        </div>


        <div className='subdiv'>
          <div>
            <label>Role</label><br />
            <input {...register("role")} id='age' type="text" ></input>
            <p className='errmsg'>{errors.role?.message}</p>
          </div>

        </div>






        <button type='submit'>Submit</button>
      </form>

      <p>Already Registered</p>
     <Link to={"login"}> <a >Login</a></Link>






    </div>
  )
}

export default Signup