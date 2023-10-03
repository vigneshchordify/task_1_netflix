
// 14. Write a program to add to two dimensional arrays
// Program should accept two 2D arrays and display its sum
// Eg: Output: Enter the size of arrays
// Input: 3
// Output: Enter the values of array 1
// Input:
// 123
// 456
// 789
// Output: Enter the values of array 2
// Input:
// 10 20 30
// 40 50 60
// 70 80 90
// Output: Sum of 2 arrays is:
// 11 22 33
// 44 55 66
// 77 88 99Code of the program & screenshot of the output.

sumoffArray=(array1,array2)=>{

    let rows=array1.length;

    let cols=array1[0].length;

     let total=[];

     

     for(i=0;i<rows;i++){

        let newArray=[]

        for(j=0;j<cols;j++){

            newArray.push(array1[i][j]+array2[i][j])

            

        }

        total.push(newArray)

     }

     return total

    



}



console.log(sumoffArray([[1,2,3],[4,5,6],[7,8,9]],[[10,20,30],[40,50,60],[70,80,90]]));