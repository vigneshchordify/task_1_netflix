// 19. Income tax is calculated as per the following table
// Annual Income
// Tax percentage
// Up to 2.5 Lakhs
// No TaxAbove 2.5 Lakhs to 5 Lakhs
// 5%
// Above 5 Lakhs to 10 Lakhs
// 20%
// Above 10 Lakhs to 50 Lakhs
// 30%
// Write a program to find out the income tax amount of a person.
// Program should accept annual income of a person
// Output the amount of tax he has to pay
// Eg 1:
// Enter the annual income
// 495000
// Income tax amount = 24750.00
// Eg 2:
// Enter the annual income
// 500000
// Income tax amount = 25000.00

const prompt = require("prompt-sync")()

a=prompt("Enter Annual income")


function tax(income){


     if(income<100000){
        taxpay="no tax"
        
        return console.log(taxpay);
        
    }
    else if(income<500000){
        taxpay=income*.05
        return console.log(taxpay);
        
    }
    else if(income<1000000){
        taxpay=income*.2
        return console.log(taxpay);
        
    }
    


else if(income<5000000){
    taxpay=income*.3
    return console.log(taxpay);
}


}
tax (a)