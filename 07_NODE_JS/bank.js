/*
Instructions


Starting from scratch, build a Node application called bank.js which takes in user inputs via the command line to register bank transactions.

The transactions possible are:

total - this should tally up all of the money in the bank balance and display it for the user.

deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)

withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)

lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
*/

// fs is a core Node package for reading and writing files
var fs = require("fs");
var transaction = process.argv[2];
var transValue = process.argv[3];


fs.readFile("bank.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }


    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    var i = dataArr.length;
    var total = 0;
    var deposit = 0;
    
    //console.log(i);
    if (transaction == 'total') {
        for(j=0; j<i; j++) {
            total += parseFloat(dataArr[j]);
        }
        console.log(total);
    }
    else if (transaction == 'deposit') {

        fs.appendFile("bank.txt", ", "+transValue, function(err) {

            // If the code experiences any errors it will log the error to the console.
            if (err) {
                return console.log(err);
            }
            
            // Otherwise, it will print: "movies.txt was updated!"
            console.log("Deposit added");
        });

    } else if (transaction == 'withdraw') {

        fs.appendFile("bank.txt", ", -"+transValue, function(err) {

            // If the code experiences any errors it will log the error to the console.
            if (err) {
                return console.log(err);
            }
            
            // Otherwise, it will print: "movies.txt was updated!"
            console.log("Withdraw added");
        });

    } else if (transaction == 'lotto') {
        var random1 = Math.floor(Math.random() * 99) + 1;
        var random2 = Math.floor(Math.random() * 99) + 1;

        if (transValue == random1){

            fs.appendFile("bank.txt", ", "+random2, function(err) {

                // If the code experiences any errors it will log the error to the console.
                if (err) {
                    return console.log(err);
                }
                
                // Otherwise, it will print: "movies.txt was updated!"
                console.log("Lotto Winner");
            });
        } else {
                fs.appendFile("bank.txt", ", -"+random2, function(err) {

                // If the code experiences any errors it will log the error to the console.
                if (err) {
                    return console.log(err);
                }
                
                // Otherwise, it will print: "movies.txt was updated!"
                console.log("Lotto Loser");
            });

        }

    }

});