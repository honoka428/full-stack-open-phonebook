// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://fullstack:${password}@cluster0.rs6e4.mongodb.net/phonebook?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// const personSchema = new mongoose.Schema({
//     name: String,
//     number: String
// })

// const Person = mongoose.model('Person', personSchema)

// const person = new Person({
//   name: process.argv[3],
//   number: process.argv[4],
// })

// if (process.argv.length === 3) {
//   Person.find({}, (err, docs) => {
//     if (!err){
//       console.log('Phonebook:')
//       docs.forEach(person => console.log(`${person.name}: ${person.number}`))
//     }
//     else {
//       console.log(`Error: ${err}`)
//     }
//     mongoose.connection.close()
//     process.exit(1)
//   })
// }

// else {
//   console.log('inside 4+')

//   person.save().then(result => {
//     console.log('person saved!')
//     mongoose.connection.close()
//   })
// }

