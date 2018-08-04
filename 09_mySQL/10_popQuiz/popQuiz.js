var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //afterConnection();
  start();
});

function afterConnection() {
  connection.query("SELECT * FROM top5000 WHERE artist = 'bing Crosby'", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "rawlist",
      message: "Would you like to [SEARCH] an artist, [multRecords] on list or [JOIN] artist to get songs",
      choices: ["SEARCH", "MULTRECORDS", "JOIN"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid.toUpperCase() === "SEARCH") {
            console.log('SEARCH');
            searchArtist();
      }
      else if (answer.postOrBid.toUpperCase() === "MULTRECORDS"){
            console.log('MULTRECORDS');
            multRecords();
      } else {
            console.log('JOIN');
            joinSongsArtists();
      }
    });
}

// function to handle posting new items up for auction
function searchArtist() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "artist",
        type: "input",
        message: "Which artist would you like to search"
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
        connection.query("SELECT * FROM top5000 WHERE artist = ?",[answer.artist], function(err, res) {
            if (err) throw err;
            console.log(res);
            start();
        });
    });
}

// function to handle posting new items up for auction
function multRecords() {
  // prompt for info about the item being put up for auction
  connection.query("SELECT * FROM top5000 GROUP BY artist HAVING count(*) > 1", function(err, res) {
    if (err) throw err;
    console.log(res);
    start();
  });
}

// function to handle posting new items up for auction
function joinSongsArtists() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "artist",
        type: "input",
        message: "Which artist would you like to JOIN"
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
        connection.query("SELECT top3000.artist, top3000.album, top3000.yearINT, top5000.artist, top5000.album, top5000.yearINT FROM top3000 INNER JOIN top5000 ON top3000.album=top5000.album WHERE ((top3000.artist)=?)",[answer.artist], function(err, res) {
            if (err) throw err;
            console.log(res);
            start();
        });
    });
}
