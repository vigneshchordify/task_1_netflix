// 6. Using the ‘switch case’ write a program to accept an input number from the user and
// output the day as follows.
// Input
// Output
// 1
// Sunday
// 2
// Monday
// 3
// Tuesday
// 4
// Wednesday
// 5
// Thursday
// 6
// Friday
// 7
// Saturday
// Any other input
// Invalid Entry



const prompt = require("prompt-sync")()
s1= parseInt(prompt("enter number:"))
function day(num){

    let day;
switch (num) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break

   
}
console.log(day);
}

day(s1)