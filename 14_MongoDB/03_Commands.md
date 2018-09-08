db.places.update({"country": "Morocco"}, {$push: {"majorcities": "Agadir"}})
OUTPUT: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })


use students
db
db.students.find().pretty()
db.students.find({"Hobbies": {$in: ["Napping"]}}).pretty()
db.students.find({"Hobbies": {$in: ["Skydiving"]}}).pretty()
db.students.insert({"name":"David","OS":"Mac","Hobbies":["Soccer", "Watching Netflix","Playing Guitar"],"row":4})
db.students.update({name: "Jason"}, {$push: {"Hobbies":"Extreme Basketweaving"}})
db.students.update({name: "Elliot"}, {$set: {"OS":"Apple"}})
db.students.remove({name: "Jimbo"})
db.students.update({}, {$set: {gavecandy:false}}, {multi:true})
db.students.update({name:'Jason'}, {$set: {gavecandy:true}})
db.students.update({name:'Jason'}, {$unset: {"os":1}})
db.students.find({_id: ObjectId("5b9094c4a2a293e86271156c")})

Go back to your classroom database.

You’ve decided to take on a new hobby. Add Extreme Basket Weaving to your array of hobbies.

While practicing for your Extreme Basket Weaving Competition, you broke the computer of the person next to you. They’re using a new Operating System now. Change their os field.

Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

You are worried everyone else will leave and you’ll have to sit all alone. You decide to bribe everyone who didn’t leave with candy. Add a field of gavecandy with a value of false to everyone in the array so you can keep track.

All this work made you hungry, so you bought yourself some candy. Change the value of gavecandy to true in your entry.