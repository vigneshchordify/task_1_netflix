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



        setFname(document.getElementById('fname').value)
        setLname(document.getElementById('lname').value)
        setAge(document.getElementById('age').value)
        setDob(document.getElementById('dob').value)
        setMail(document.getElementById('mail').value)
        setNum(document.getElementById('number').value)

        document.getElementById('result').innerHTML="Form submitted Please Check console"


    }

    return (



        <div>

            <form onSubmit={handleSubmit}>
            <div className='subdiv'>
                   <div>
                        <label>First Name</label><br/>
                        <input id='fname' type="text" required></input>
                   </div>
                   <div>
                        <label>Last Name</label><br/>
                        <input id='lname' type="text" required></input><br />
                   </div>
            </div>
           <div className='subdiv'>
                  <div>
                        <label>Age</label><br/>
                        <input id='age' type="Number" required></input>
                  </div>
                   <div>
                        <label>DOB</label><br/>
                        <input id='dob' type="date" required></input><br />
                   </div>
           </div>
              <div className='subdiv'>
                  <div>
                        <label>mail</label><br/>
                        <input id='mail' type="email" required></input>
                  </div>
                 <div>
                        <label>Number</label><br/>
                        <input id='number' type="Number" required></input><br />
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