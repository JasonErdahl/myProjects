var mysql = require("mysql");
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "great_bayDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  promptUSer();

});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

  });
}

var promptUSer = function() {
  // if the length of the team array is 3 or higher, no more questions will be asked
    inquirer.prompt([ 
      { type: "list",
      message: "What do you want to do?",
      choices: ["POST AN ITEM", "BID ON AN ITEM"],
      name: "response"}]
    ).then(function(inquirerResponse) {
   
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    // POST
    if (inquirerResponse.response === "POST AN ITEM") {
        postFunction();
    } // BID
    else {
        bidFunction();
    }
  });
}

function postFunction() {
  //Inquorer get name, minimum bid, description
  console.log("Inserting a new product...\n");
  inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is item name?",
      name: "item"
    },{
      type: "input",
      message: "What is your minimum bid?",
      name: "bid"
    },{
      type: "input",
      message: "Item description?",
      name: "description"
    }]
  ).then (function() {
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_name: item,
        high_bid: bid,
        descript: description
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
    // logs the actual query being run
    console.log(query.sql);
    //add inquirer fields to db
  });
}

function bidFunction() {

  
}