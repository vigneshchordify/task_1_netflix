//2. Accept two inputs from the user and output their sum.

const prompt = require("prompt-sync")()
s1=prompt("enter num 1:")
s2=prompt("enter num 2:")


function sum(x,y){
    console.log(x+y);
}


sum(s1,s2)