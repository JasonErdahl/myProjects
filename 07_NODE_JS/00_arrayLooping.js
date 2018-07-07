var myObj = {
 a: 1,
 b: 2,
 c: 3
}
var keys = Object.keys(myObj);
// ['a', 'b', 'c']

for (var i = 0; i < keys.length; i++) {
 console.log('key is: ' + keys[i] + ' value is: '+ myObj[keys[i]]);
}

// What will be printed here?

// key is: a value is:  1
// key is: b value is:  2
// key is: c value is:  3