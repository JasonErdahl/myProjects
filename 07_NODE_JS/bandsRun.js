// GIT Bash Command: node bandsRun.js

var bandList = require("./bands.js");

for (var key in bandList.bands){
    console.log("A " + key + " band is " + bandList.bands[key] + "."); 
}