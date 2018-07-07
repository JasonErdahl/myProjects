/*
Create a command-line node application that takes in parameters like this:

node calculator.js add 1 2 ... and outputs 3

node calculator.js subtract 5 2 ... and outputs 3

node calculator.js multiply 3 2 ... and outputs 6

node calculator.js divide 8 2 ... and outputs 4

node calculator.js remainder 7 2... and outputs 1

Bonuses
Enable your calculator application to also handle the below cases:
node calculator.js exp 7 2 ... and output 49 (7 squared)
node calculator.js algebra 4x+2=10... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)
*/


var operation=(process.argv[2]);
var num1=parseFloat((process.argv[3]));
var num2=parseFloat((process.argv[4]));

if (operation === "add") {
    console.log(num1 + num2);
} else if (operation === "subtract") {
    console.log(num1 - num2);
} else if (operation === "multiply") {
    console.log(num1 * num2);
} else if (operation === "divide") {
    console.log(num1 / num2);
} else if (operation === "remainder") {
    console.log(num1 % num2);
} else if (operation === "exp") {
    console.log(Math.pow(num1, num2));
} 


