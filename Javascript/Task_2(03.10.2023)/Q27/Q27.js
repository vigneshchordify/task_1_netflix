// 27. Given a variable named my_height, you must throw errors under the following
// conditions:
// notANumberError- When my_heightis NaN
// HugeHeightError – When my_heightis greater than 100
// TinyHeight Error - When my_heightis less than 1
// Eg:
// a) Sample Input 0
// seven
// Sample Output 0
// notANumberError
// b) Sample Input 1
// 77
// Sample Output 1
// hugeHeightError
// c) Sample Input 2
// 0
// Sample Output 2
// tinyHeightError
// d) Sample Input 3
// 8
// Sample Output 3
// 8



var my_height =parseInt( prompt("Enter your height:"))

try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    } else if (my_height > 100) {
        throw new Error("HugeHeightError");
    } else if (my_height < 1) {
        throw new Error("TinyHeightError");
    } else {
        alert(my_height);
    }
} catch (error) {
    alert(error.message);
}
