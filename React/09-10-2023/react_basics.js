
//component for Email
function Email(props) {



    return props.mail

}

//Function for number
function number() {
    return 12301231
}

//class component

class Status extends React.Component {

    render() {
        return <p>my status is {this.props.Status}</p>
    }

}







//main function
function Welcome(props) {

    return (

        <div>
            <h2>My name is {props.name}  and  Phone:{number()} </h2>
            <h2>my email id is <Email mail="acb@abc.com"></Email>.</h2>
            <h2> <Status Status="busy"></Status></h2>
            <p><Date/></p>
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (<Welcome name="sara" />)
root.render(element)
