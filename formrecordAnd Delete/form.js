function myFunction() {


    // Get the input elements by their IDs
    var nameInput = document.getElementById("nme").value;
    var phoneInput = document.getElementById("phn").value;
    var emailInput = document.getElementById("eml").value;

    if (nameInput == '' || phoneInput == '' || emailInput == '') {
        alert("all input required")


    }
    else {
        // Log the values to the console
        console.log("Name: " + nameInput);
        console.log("Phone Number: " + phoneInput);
        console.log("Email: " + emailInput);

        users = []
        users.push(user = {
            name: nameInput,
            phone: phoneInput,
            email: emailInput
        })

        numbers = users.length + 1



        localStorage.setItem(`users${numbers}`, JSON.stringify(users));

        load()
    }

    return false; // Prevent form submission and page refresh
}

window.onload = function load() {


    value = JSON.parse(localStorage.getItem("users"))
    console.log(value);




    document.getElementById("name1").innerHTML = value[0].name
    document.getElementById("phone1").innerHTML = value[0].phone
    document.getElementById("email1").innerHTML = value[0].email


} 
