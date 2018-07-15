// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Programmer(name, position, age, favLanguage) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.favLanguage = favLanguage;

}

programmer.prototype.printAll = function() {
    console.log("name: "+this.name);
    console.log("position: "+this.position);
    console.log("age: "+this.age);
    console.log("favLanguage: "+this.favLanguage);
};



// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var jason = new Programmer('Jason', 'Web Developer', 44, 'jQuery');

jason.printAll = function() {
    console.log("name: "+this.name);
    console.log("position: "+this.position);
    console.log("age: "+this.age);
    console.log("favLanguage: "+this.favLanguage);
};

// dogs.fetch = function(){
//   console.log("cuz I love you");
//   this.makeNoise();
// }
// calling dogs and cats makeNoise methods
jason.printAll();


// if we want, we can change an objects properties after they're created
// cats.raining = true;
// cats.makeNoise();

// var massHysteria = function(dogs, cats) {
//   if (dogs.raining === true && cats.raining === true) {
//     console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//   }
// };

// massHysteria(dogs, cats);
