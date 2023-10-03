//3. Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given
// inputs. Formula: SI=(P*R*n)/100)
// Variable
// Data Type
// Principal amount (P)
// Integer
// Interest rate (R)
// Float
// Number of years (n)
// Float
// Simple Interest (SI)
// Float

const prompt = require("prompt-sync")()
s1=prompt("enter num 1:")
s2=prompt("enter num 2:")
s3=prompt("enter num 3:")

function simpleinterest(P,R,N){
   
    console.log(((P*R*N)/100));
}


simpleinterest(s1,s2,s3)