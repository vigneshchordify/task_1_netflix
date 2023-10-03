// 5. Write a program to show the grade obtained by a student after he/she enters their total
// mark percentage.
// Program should accept an input from the user and display their grade as followsMark
// Grade
// > 90
// A
// 80-89
// B
// 70-79
// C
// 60-69
// D
// 50-59
// E
// < 50
// Failed


const prompt = require("prompt-sync")()
s1=prompt("enter mark:")

function markgrade(mark){
    if(mark<50){
        console.log("fail");
    }
    else if(mark<60){
        console.log("E Grade");
    }
    else if(mark<70){
        console.log("D Grade");
    }
    else if(mark<80){
        console.log("C Grade");
    }
    else if(mark<90){
        console.log("B Grade");
    }
    else if(mark<=100){
        console.log("A Grade");
    }
    else{
        console.log("invalid Mark");
    }
    
}

markgrade(s1)