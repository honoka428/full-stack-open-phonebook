const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/persons')

const app = express()

// let persons = [
//     {
//       id: 1,
//       name: "Arto Hellas",
//       number: "223-233-232"
//     },
//     {
//         id: 2,
//         name: "Samuel Johnson",
//         number: "124-2451-3543"
//     },
//     {
//         id: 3,
//         name: "Michelle Long",
//         number: "120-41-2332"
//     },      
//     {
//         id: 4,
//         name: "Mary Smith",
//         number: "110-242-00-1"
//     }
// ]

// Custom request time middleware
var requestTime = function(req, res, next) {
    req.requestTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    next();
};

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

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (req, res) => {
    Person.find({}, (err, docs) => {res.json(docs)})
    // res.json(persons)
})

app.get('/info', (req, res) => {
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${req.requestTime}</p>
    `)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
    } else {
        // Set res status as missing and respond to request without data
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()
})


app.post('/api/persons', (req, res) => {
    body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ 
            error: 'Name or number is missing' 
          })
    }

    else if (persons.find(p => p.name == body.name)) {
        return res.status(400).json({ 
            error: 'Name already exists' 
        })
    }

    person = {
        id: Math.random(),
        content: body.content,
        number: body.number
    }

    persons = persons.concat(person)

    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
