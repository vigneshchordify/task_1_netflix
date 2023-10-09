// 12. Write a program to sort an array in descending order
// Program should accept and array, sort the array values in descending order and display it
// Eg: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 20, 10, 50, 30, 40
// Output: Sorted array:
// 50, 40, 30, 20, 10
// Code of the program & screenshot of the output.


n = prompt('array length')

function add(n) {
    b = []
    for (i = 0; i < n; i++) {
        c = parseInt(prompt("enter values of array"))

        b.push(c)

    }
    
arraysort(b)
}





function arraysort(input) {

    l = input.length

    for (i = 0; i < l; i++) {

        for (j = 0; j < l-1 ; j++) {
            if (input[j] < input[j + 1]) {



                [input[j],input[j+1]]=[input[j+1],input[j]]

                // let temp = input[j + 1]
                // input[j + 1] = input[j]
                // input[j] = temp
                
            }

        }
    }
    console.log(input);

}

add(n)


