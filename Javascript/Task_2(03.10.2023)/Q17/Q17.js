// 17. Write a menu driven program to do the basic mathematical operations such as
// addition, subtraction, multiplication and division (hint: use if else ladder or switch)
// Program should have 4 functions named addition(), subtraction(), multiplication() and
// division()
// Should create a class object and call the appropriate function as user prefers in the main
// function
// Code of the program & screenshot of the output.




s1=parseInt(prompt("Enter number 1:"))
s2=parseInt(prompt("Enter number 1:"))
s3=(prompt("condition: should be +,-,* or /"))


class mathoperations{

    

 

    addition(number1,number2){

 

        return number1+number2

 

    }

    subtraction(number1,number2){

        return number1-number2

    }

    multiplication(number1,number2){

        return number1*number2

    }

    division(number1,number2){

        return number1/number2

    }

 

}

const operations= new mathoperations()

 

maths=(num1,num2,condition)=>{

 if(condition==="+"){
    console.log('The added result is '+operations.addition(num1,num2));

 }
 else if(condition==="-"){
    console.log ('The Subtracted result is '+operations.subtraction(num1,num2));

 }
 else if(condition==="*"){
    console.log ('The Multiplied result is '+operations.multiplication(num1,num2));

 }
 else if(condition==="/"){
    console.log ('The Multiplied result is '+operations.division(num1,num2));

 }
 else{
    console.log("invalid");
 }
}
  

 

maths(s1,s2,s3)