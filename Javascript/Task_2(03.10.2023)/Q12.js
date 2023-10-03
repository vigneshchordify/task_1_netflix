// 12. Write a program to sort an array in descending order
// Program should accept and array, sort the array values in descending order and display it
// Eg: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 20, 10, 50, 30, 40
// Output: Sorted array:
// 50, 40, 30, 20, 10
// Code of the program & screenshot of the output.

function arraysort(input){
    console.log(input.sort((n1,n2)=>n1<n2));
}


arraysort([1,4,2,3])