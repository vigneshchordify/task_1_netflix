
import { useRef } from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';





function App() {

  const nameRef = useRef();

    const ageRef = useRef();

 

    const [counter, setCounter] = useState(0);

 

 

  useEffect(() => {
    
 if(nameRef || ageRef){
  ageRef.current.focus()


 }
 

        setInterval(() => {

            setCounter((prevCounter) => {

                return prevCounter + 1;

            });

        }, 1000);

        

    }, [nameRef,ageRef]);

 
useEffect(() => {

        console.log(" ***  counter ", counter);

    }, [counter]);

 

    let [name, setName] = useState("");

    let [age, setAge] = useState("");

    let [gender, setGender] = useState("");

    const submit = (data) => {

        e.preventDefault();

        console.log("  name ", name);

        console.log("  age ", age);

        console.log("  gender ", gender);

    }

 

    const changeName = (e) => {

        let value = e.target.value;

        setName(value);

    }

 

    const changeAge = (e) => {

        let value = e.target.value;

        setAge(value);

    }

 

    const changeGender = (e) => {

        let value = e.target.value;

        setGender(value);

    }
  return (
    <div className="App">


<form onSubmit={submit}>

            <input ref={nameRef} name="name" onChange={changeName} type="text" />

            <input ref={ageRef} name="age" onChange={changeAge} type="text" />

            <input name="gender" onChange={changeGender} type="text" />

            <input name="state" onChange={changeGender} type="text" />

            <input name="city" onChange={changeGender} type="text" />

            <button type="submit">Submit</button>

        </form>
      


      
    </div>
  );
}

export default App;
