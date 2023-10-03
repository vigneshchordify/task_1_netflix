
// 4. Write a program to check whether a student has passed or failed in a subject after he
// or she enters their mark (pass mark for a subject is 50 out of 100).
// Program should accept an input from the user and output a message as “Passed” or “Failed”



const prompt = require("prompt-sync")()
s1=prompt("enter mark:")
function passorfail(Mark){
    if(Mark<50){
        console.log("Fail");
    }
    else{
        console.log("pass");
    }
}

passorfail(s1)