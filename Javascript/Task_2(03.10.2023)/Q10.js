// 10. Write a program to interchange the values of two arrays.
// Program should accept an array from the user, swap the values of two arrays and display it
// on the console
// Eg: Output: Enter the size of arrays
// Input: 5
// Output: Enter the values of Array 1
// Input: 10, 20, 30, 40, 50
// Output: Enter the values of Array 2
// Input: 15, 25, 35, 45, 55
// Output: Arrays after swapping:
// Array1: 15, 25, 35, 45, 55 Array2: 10, 20, 30, 40, 50


function arraySwap(array1,array2){
    array3=[]

    console.log(`Array1 ${array1}`);
    console.log(`Array2 ${array2}`);

    array3=array1
    array1=array2
    array2=array3
    console.log('After Swapping');
    
    console.log(`Array1 ${array1}`);
    console.log(`Array2 ${array2}`);
}

arraySwap([1,2,3,4,5,5],[8,7,6,5,4,3,5])

