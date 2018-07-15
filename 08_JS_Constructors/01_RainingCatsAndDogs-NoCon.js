
// Make a dogs object with three keys...
var dog; 
dog =   {
            'raining': true,
            'noise': "Woof!",
            makeNoise: function(){
                if (this.raining === true){
                    console.log(this.noise)
                }
            },
        }


// First key called "raining" with a value of true
dog.makeNoise();

// Second key called "noise" with a value of "Woof!"
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// Make a cats object with three keys...
var cats; 
cats =   {
            'raining': false,
            'noise': "Meow!",
            makeNoise: function(){
                if (this.raining === true){
                    console.log(this.noise)
                }
            },
        }

// First key called "raining" with a value of false
// Second key called "noise" with a value of "Meow!"
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

cats.makeNoise();

// Make the dog bark
// Make the cat meow
// BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the raining keys are equal to true.
// BONUS: Look to see if you can find any means to simplify your code further and further
function massHystaria () {
    if (dogs.raining === true && cats.raining === true){
        console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
    }
}
massHystaria();