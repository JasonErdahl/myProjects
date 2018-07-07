// GIT Bash Command: node paramater.js 4 5
var num1=(process.argv[2]);
var num2=(process.argv[3]);

if (num1 === num2) {
    console.log('match');
} else {
    console.log('not a match')
}

// Alternate console.log(process.argv[2] === process.argv[3]);