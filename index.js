const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/persons')

const app = express()

// Custom request time and errorhandler middleware
var requestTime = function(req, res, next) {
    req.requestTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    next();
};

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }
  
// Custom token for morgan middleware
morgan.token('content', function getContent (req) {
    return JSON.stringify(req.body)
  })
  
// Call middlewares
app.use(requestTime);
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use(cors())
app.use(express.static('build'))
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (req, res) => {
    Person.find({}, (err, docs) => {res.json(docs)})
})

app.get('/info', (req, res) => {
    var personCount = 0;
    Person.find({}, (err, docs) => {
        personCount = docs.length

        res.send(`
            <p>Phonebook has info for ${personCount} people</p>
            <p>${req.requestTime}</p>
        `)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    const id = Number(req.params.id)
    Person
        .find({id: id})
        .then(docs => {
            if (docs) {
              res.json(docs)
            } else {
              res.status(404).end()
            }
        })
        .catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
    const id = Number(req.params.id)
    Person
        .findOneAndDelete({ id: id })
        .then( docs => {
            if (docs) {
                res.status(204).json(docs).end()
            }
        })
        .catch(err => next(err))
})

app.post('/api/persons', (req, res) => {
    body = req.body

    if (!body.name || !body.number) {
        console.log('in 1')
        return res.status(400).json({ 
            error: 'Name or number is missing' 
        })
    }

    const person = new Person({
        name: body.name,
        id: body.id,
        number: body.number        
    })
    
    person.save().then(result => {
        console.log('person saved!')
        res.json(Person)
    })
})

app.put('/api/persons/:id', (req, res, next) => {
    body = req.body
    Person
        .updateOne({ name: body.name }, { number: body.number})
        .then( docs => {
            if (docs) {
                res.json(Person)
            }
        })
        .catch(err => next(err))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
