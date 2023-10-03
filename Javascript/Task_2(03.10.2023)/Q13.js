// 13. Write a program to identify whether a string is a palindrome or not
// A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
// Program should accept a string and display whether the string is a palindrome or not
// Eg: Output: Enter a string
// Input: MALAYALAM
// Output: Entered string is a palindrome
// Eg 2: Output: Enter a string
// Input: HELLO
// Output: Entered string is not a palindrome
// Code of the program & screenshot of the output.

const prompt = require("prompt-sync")()
n=prompt("enter string")

function palindrome(string) {
    length = string.length


    for (i = 1; i <= length / 2; i++) {

        if (string[i] !== string[length - i-1]) {
           return console.log("not palindrome");
        }

    }
   return console.log("palindrome");
}

palindrome(n);