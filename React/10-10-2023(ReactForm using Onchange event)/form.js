//main function
function Welcome() {


    //defining states

    let [fname, setFname] = React.useState('NA');
    let [lname, setLname] = React.useState('NA');
    let [age, setAge] = React.useState('NA');
    let [dob, setDob] = React.useState('NA');
    let [mail, setMail] = React.useState('NA');
    let [num, setNum] = React.useState('NA');

    console.log("FUllNAme: "+ fname+' '+lname);
    console.log('AGE: '+age);
    console.log("Date Of Birth: "+dob);
    console.log("Mail: "+mail);
    console.log("Phone Number: "+num);


   

    function handleSubmit(e) {
        e.preventDefault()



 

        document.getElementById('result').innerHTML="Form submitted Please Check console"


    }

    return (



        <div>

            <form onSubmit={handleSubmit}>
            <div className='subdiv'>
                   <div>
                        <label>First Name</label><br/>
                        <input id='fname' onChange={(e)=>{setFname(e.target.value)}}  name='fname'  type="text" required></input>
                   </div>
                   <div>
                        <label>Last Name</label><br/>
                        <input id='lname'onChange={(e)=>{setLname(e.target.value)}} type="text" required></input><br />
                   </div>
            </div>
           <div className='subdiv'>
                  <div>
                        <label>Age</label><br/>
                        <input id='age' onChange={(e)=>{setAge(e.target.value)}} type="Number" required></input>
                  </div>
                   <div>
                        <label>DOB</label><br/>
                        <input id='dob'onChange={(e)=>{setDob(e.target.value)}} type="date" required></input><br />
                   </div>
           </div>
              <div className='subdiv'>
                  <div>
                        <label>mail</label><br/>
                        <input id='mail' onChange={(e)=>{setMail(e.target.value)}} type="email" required></input>
                  </div>
                 <div>
                        <label>Number</label><br/>
                        <input id='number' onChange={(e)=>{setNum(e.target.value)}} type="Number" required></input><br />
                  </div>
                 </div>

                <button  type='submit'>Submit</button>
                <p id="result"></p>

            </form>


        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (<Welcome />)
root.render(element)