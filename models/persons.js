const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
require('dotenv').config()

const url = process.env.MONGODB_URI

console.log('connecting to mongodb url')

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB')
      })
      .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
      })
      
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        required: true,
        unique: true
    },
    id: {
        type: Number
    },
    number: {
        type: String,
        minlength: 1,
        required: true
    }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Person', personSchema)