// 29. Write a myFilter function that takes 2 parameters: myArray and callback. Here,
// myArray is an array of numbers and callback is a function that takes the elements ofmyArray as its parameter and returns a boolean true if the sum of the number is even or
// false if the sum of the number is odd.
// The myFilter function should return the sum of the array.
// Sample Input
// 12345
// Sample Output
// 15
// Code of the program & screenshot of the output.


function total(arra){
    s=0
   s=arra.reduce((n1,n2)=>n1+n2)
   if(s%2===0){
    return true
   }
   else{
    return false
   }
  
}


function myFilter(a){

    console.log(total(a));

}

myFilter([1,2,3,5])