

//main function



function Welcome() {


    //defining states

    let [fname, setFname] = React.useState('');
    let [lname, setLname] = React.useState('');
    let [age, setAge] = React.useState('');
    let [dob, setDob] = React.useState('');
    let [mail, setMail] = React.useState('');
    let [num, setNum] = React.useState('');

    console.log("FUllNAme: " + fname + ' ' + lname);
    console.log('AGE: ' + age);
    console.log("Date Of Birth: " + dob);
    console.log("Mail: " + mail);
    console.log("Phone Number: " + num);


    let [fnameerr, setFnameerr] = React.useState();
    let [lnameerr, setLnameerr] = React.useState();
    let [ageerr, setAgeerr] = React.useState();
    let [doberr, setDoberr] = React.useState();
    let [mailerr, setMailerr] = React.useState();
    let [numerr, setNumerr] = React.useState();


    let [submitsuccess,setSubmitsuccess] = React.useState(false)






    function handleSubmit(e) {
        e.preventDefault()


        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        //fname validation
        if (fname == '') {

            setFnameerr(true)
        
        }
        else{
            setFnameerr(false)
        }
        if (lname == '') {

            setLnameerr(true)
           

        }
        else{
            setLnameerr(false)
        }
        if (age == '') {

            setAgeerr(true)
           

        }
        else{

            setAgeerr(false)

        }

        if (dob == '') {

            setDoberr(true)
            
        }
        else{
            setDoberr(false)
        }
        if (!emailRegex.test(mail)) {


            setMailerr(true)
            

        }
        else{

            setMailerr(false)

        }
        if (num.length < 10 || num.length > 13 || num == '') {

            setNumerr(true)
            
        }
        else{
            setNumerr(false)
        }
        
       
    




    }

    return (



        <div>

            <form onSubmit={handleSubmit}>
                <div className='subdiv'>
                    <div>
                        <label>First Name</label><br />
                        <input id='fname' onChange={(e) => { setFname(e.target.value) }} name='fname' type="text" ></input>

                        {fnameerr ? (

                            <p style={{color:'red'}}>Fname error</p>

                        ) : null}




                    </div>
                    <div>
                        <label>Last Name</label><br />
                        <input id='lname' onChange={(e) => { setLname(e.target.value) }} type="text" ></input><br />

                        {lnameerr ? (

                            <p style={{color:'red'}}>Last Name not filled</p>

                        ) : null}
                    </div>
                </div>
                <div className='subdiv'>
                    <div>
                        <label>Age</label><br />
                        <input id='age' onChange={(e) => { setAge(e.target.value) }} type="number" ></input>

                        {ageerr ? (

                            <p style={{color:'red'}}>Age not valid</p>

                        ) : null}
                    </div>
                    <div>
                        <label>DOB</label><br />
                        <input id='dob' onChange={(e) => { setDob(e.target.value) }} type="date" ></input><br />

                        {doberr ? (

                            <p style={{color:'red'}}>DOB required</p>

                        ) : null}
                    </div>
                </div>
                <div className='subdiv'>
                    <div>
                        <label>mail</label><br />
                        <input id='mail' onChange={(e) => { setMail(e.target.value) }} type="text" ></input>

                        {mailerr ? (

                            <p style={{color:'red'}}>invalid Mail</p>

                        ) : null}
                    </div>
                    <div>
                        <label>Number</label><br />
                        <input id='number' onChange={(e) => { setNum(e.target.value) }} type="Number" ></input><br />

                        {numerr ? (

                            <p style={{color:'red'}}>Number invalid</p>

                        ) : null}
                    </div>
                </div>

                <button type='submit'>Submit</button>

                {submitsuccess ? (
                    <p style={{color:'green'}} >Form Succesfully Submitted</p>
                ):null}
               

            </form>


        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (<Welcome />)
root.render(element)