



function pattern() {


    n = 10


    string = ''
    space = n
    for (i = 1; i <= n; i++) {

        for (k = space; k > 0; k--) {
            string += "&nbsp"

        }
        for (j = 1; j <= n; j++) {
            string += '*'
        }
        space--

        string += "<br>"
    }

    return string
}

pattern()
console.log(string);

document.write("<h1>Hi all this is just basics of javascript task 1 and the pattern is printed below</h1>")

//second day task
function task2function() {
    var input = document.getElementById("country").value;
    document.getElementById("countryoutput").innerHTML =  input;
  }

