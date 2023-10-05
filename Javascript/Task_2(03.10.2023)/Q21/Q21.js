// 21. Write a program to multiply the adjacent values of an array and store it in an another
// array
// Program should accept an array
// Multiply the adjacent values
// Store the result into another array
// Eg:
// Enter the array limit
// 5
// Enter the values of array
// 1
// 2
// 3
// 4
// 5
// Output
// 2
// 6
// 12
// 20
// Code of the program & screenshot of the output





a=[]
length=prompt("enter length of array to get sum of adjacent value")
for(i=1;i<=length;i++){
    value=prompt("enter number")
    a.push(Number(value))
   

}
console.log(a);
alert("your given array"+a)

 
 
b=[]

for (let i = 0; i < a.length -1; i++) {
    const sum = a[i] * a[i + 1];
    b.push(sum)
    
}
console.log(b);
alert("the sum of array "+b)
