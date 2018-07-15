// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  // flips a coin: if the the value is equal to 0 then this.offense goes up by one. if the value is equal to 1
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
  // if the length of the team array is 5 or higher, no more questions will be asked
  if (starters.length + subs.length < 5) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: ",
        validate: function(value) {
          if (value.toLowerCase() == ["forward"] || value.toLowerCase() == ["back"] || value.toLowerCase() == ["stiker"] || value.toLowerCase() == ["goal keeper"]) {
            return true;
          }
          return false;
        }
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 3) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }

    playGame(0);
  }
};

// calls the function createPlayer() to start the code
createPlayer();

var teamScore = 0;

function playGame (roundnumber){
  if (roundnumber < 5) {
    var offenseRandom = (Math.floor(Math.random() * 20) + 1);
    var defenseRandom = (Math.floor(Math.random() * 20) + 1);

    var teamOffense = 0;
    var teamDefense = 0;

    for (var i=0; i < starters.length; i++){
      teamOffense += starters[i].offense;
      teamDefense += starters[i].defense;
    }

    console.log("Team Offense: " + teamOffense);
    console.log("Team Defense: " + teamDefense);

    if (offenseRandom < teamOffense){
      teamScore++;
    } else if (defenseRandom > teamDefense){
      teamScore--;
    };
    console.log(teamScore)
    console.log("Would you like to sub out a player?")
    // inquirer.prompt([
    //   {

    //   }
    // ]);
    roundnumber++;
    playGame(roundnumber);
  } else {
    console.log ("Game Over!")
  }
}