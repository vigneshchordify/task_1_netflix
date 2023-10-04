// 9. Write a program to print the following pattern (hint: use nested loop)
// 1
// 12
// 123
// 1234
// 12345

s1=parseInt(prompt("set limit for patern"))

for(i=0;i<=s1;i++){
sum=''
    for(j=0;j<=i;j++){
        sum+=j
        
    }
    console.log(sum);
}