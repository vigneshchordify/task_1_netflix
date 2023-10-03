// 20. Write a program to print the following pattern using for loop

function pattern(){
    n=1
    for(i=0;i<=3;i++){
        sum=''
        
            for(j=0;j<=i;j++){
                sum+=n
                n++
                
            }
            console.log(sum);
        }

}

     pattern()