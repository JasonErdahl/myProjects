function noise() {
    console.log(this.animalNoise)
}
function showGlobalContext() {
    console.log(this)
}

var dog = {
    animalNoise: 'bark'
}

var cat = {
    animalNoise: 'meow'
}

dog.bark = noise
dog.bark()
// 1. this inside of method called on object refers to calling object

// showGlobalContext()

// 2. in global context, this refers to global environment
noise()

var catNoise = noise.bind(cat)
console.log(catNoise, ' is catNoise')
// 3.  when Function.prototype.bind is called, the
// context will permanently be the passed-in object
console.log(catNoise)
console.log(catNoise === noise)

// Function.prototype.bind() takes a object as argument
// the value of "this" in the argument will be
// permanently bound to that object

catNoise()
// will meow!

noise.call(dog)
// will bark!

// you can use Function.prototype.call to call a function once with a certain context
// noise is not permanently changed`

dog.catDogNoise = catNoise
dog.catDogNoise()