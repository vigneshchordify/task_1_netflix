// Given a variable named my_string, try reversing the string using
// my_string.split().reverse().join() and then print the reversed string to the console. If the try
// clause has an error, print the error message to the console. Finally, print the typeof of the
// my_string variable to the console.


my_string=[1,2,3,4,5]

try{
    
    console.log(`reversing the text we get ${my_string.split("").reverse().join()}`);
}
catch(error){

console.log(`error is ${error}`);
}

console.log(`The string Type is ${typeof(my_string)}`);