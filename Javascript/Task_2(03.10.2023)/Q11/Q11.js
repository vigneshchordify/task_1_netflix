// 11. Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that
// array
// Eg: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 11, 20, 34, 50, 33
// Output: Number of even numbers in the given array is 3
// Code of the program & screenshot of the output.

array1=[]
length=parseInt(prompt("enter length of array"))



function add(length){
    for(i=1;i<=length;i++){
    
        value=parseInt(prompt("enter number"))
        array1.push(Number(value))
       
    
    }
    evenfind(array1)
    function evenfind(array1){
        sum=0
        for(i of array1){
            
           
            if(i%2==0){
                sum++
            }
        }
        alert(sum);
    }

}

add(length)



