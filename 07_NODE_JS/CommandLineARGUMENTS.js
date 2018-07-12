// GIT Bash Command: node CommandLineARGUMENTS.js 4 5
var num1=(process.argv[2]);
var num2=(process.argv[3]);

if (num1 === num2) {
    console.log('Numbers Equal');
} else {
    console.log('Numbers Not Equal')
}

var outputNum1 = parseFloat(num1) % 7;
var outputNum2 = parseFloat(num2) % 7;
//console.log("outputNum1:" + outputNum1 + " outputNum2: " +outputNum2);

if ((outputNum1 === 0) && (outputNum1 === 0)) {
    console.log(' Multiple of 7 True')
} else {
    console.log(' Multiple of 7 False')
}

// Alternate console.log(process.argv[2] === process.argv[3]);