// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called “Player” with the following properties and methods...

// name: Property which contains the player’s name
// position: Property which holds the player’s position
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
// defense: Property which is a value between 1 and 10 to show how good this player is on defense
// goodGame: Method which increases either the player’s offense or defense property based upon a coinflip.
// badGame: Method which decreases either the player’s offense or defense property based upon a coinflip.
// printStats: Method which prints all of the player’s properties to the screen
// Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

// Once all of the players have been created, print their stats.

// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// dependency for inquirer npm package
var inquirer = require("inquirer");
var starters = [];

// constructor function used to create programmer objects
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
}

// creates the printInfo method and applies it to all programmer objects
Player.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nOffense: " + this.offense + "\nDefense: " + this.defense);
  console.log("---------------");
};

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects

starters = [];
var subs = [];
var team = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (starters.length + subs.length < 5) {
    console.log("NEW PLAYER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position? (forward, back, striker, goalkeeper)",
        validate: function(value) {
          if (value.toLowerCase() === 'forward' || value.toLowerCase() === 'back' || value.toLowerCase() === 'striker'|| value.toLowerCase() === 'goalkeeper') {
            return true;
          }
          return false;
        }
      }, {
        name: "offense",
        message: "Offense Value (1-10)",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Defense Value (1-10)",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // initializes the variable newProgrammer to be a programmer object which will
      // take in all of the user's answers to the questions above
      var player = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);
      // pushes newProgrammer object into our array
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
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < starters.length; x++) {
      starters[x].printInfo();
    }

    playGame(0);
  }
};

/*
Once your code is functioning properly, move on to create a function called “playGame” which will be run after all of the players have been created and will do the following:

Run 5 times. Each time the function runs:
Two random numbers between 1 and 20 are rolled and compared against the starters’ offensive and defensive stats
If the first number is lower than the sum of the team’s offensive stat, add one point to the team’s score.
If the second number is higher than the sum of the team’s defensive stat, remove one point from the team’s score.
After the score has been changed, prompt the user to allow them to substitute a player from within the starters array with the player from within the subs array.
After the game has finished (been run 5 times):
If the score is positive, run goodGame for all of the players currently within the starters array.
If the score is negative, run badGame for all of the players currently within the starters array.
If the score is equal to zero, do nothing with the starters.
Give the user a message about if they won, and the status of their starters.
After printing the results, ask the user if they would like to play again.
Run playGame from the start once more if they do.
End the program if they don’t.
HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.
[ Player {
    name: 'j',
    position: 'forward',
    offense: '9',
    defense: '4',
    goodGame: [Function],
    badGame: [Function] },
  Player {
    name: 'b',
    position: 'back',
    offense: '6',
    defense: '8',
    goodGame: [Function],
    badGame: [Function] },
  Player {
    name: 'v',
    position: 'striker',
    offense: '4',
    defense: '5',
    goodGame: [Function],
    badGame: [Function] } ]
*/

function playGame(roundNumber) {
  console.log('playGame');
 
  if (roundNumber < 5){
    console.log("____________\nROUND " +roundNumber + "\n__________________");
    var random2 = Math.floor(Math.random()*21);
    var offenseVal=0;
    var defenseVal=0;
    var startersNum = starters.length;
    for (i=0; i<startersNum; i++){ 
        offenseVal += parseInt(starters[i].offense);
        defenseVal += parseInt(starters[i].defense);
    }
        console.log('offense ' +offenseVal);
        console.log('defense ' +defenseVal);
  } else {
    console.log('done');
  }
}

// call askQuestion to run our code
askQuestion();

 


