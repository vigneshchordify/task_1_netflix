//2. Accept two inputs from the user and output their sum.


s1=prompt("enter num 1:")
s2=prompt("enter num 2:")


function sum(){

    var s1= document.getElementById("inp1").value
    var s2= document.getElementById("inp2").value
    s=s1+s2
    document.getElementById("out").innerHTML="your sum is" + s
   
}


sum(s1,s2)


function task2function() {
    var input = document.getElementById("inp").value;
    document.getElementById("out").innerHTML = "you entered :"+ input;
  }
