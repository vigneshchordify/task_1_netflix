// Write a program to check whether a given number is prime or not
// Program should accept an input from the user and display whether the number is prime or
// not
// Eg: Output: Enter a number
// Input: 7
// Output: Entered number is a Prime number
// Code of the program & screenshot of the output.

const prompt = require("prompt-sync")()

number=prompt("enter number")
function prime(number){


    for(i=2;i<number;i++){
        if(number%i==0){
           return console.log('number is not prime');

        }
      
    }
    if(number==i){
        return console.log("prime");
    }
}

prime(number)

