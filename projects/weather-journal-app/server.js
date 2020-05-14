// Setup empty JS object to act as endpoint for all routes
const projectData = {
    // some demo data
    '9zmhf4mtgml': { id: '9zmhf4mtgml', date: '5/14/2020', temp: 284.17, content: 'the weather is not the ideal, I feel sleepy and need a lot of coffee' },
    'rvgybvs31y8': { id: 'rvgybvs31y8', date: '5/14/2020', temp: 284.17, content: "it's sunny today and I feel like a super hero!" },
    'wqp10jh8yd': { id: 'wqp10jh8yd', date: '5/14/2020', temp: 284.17, content: "ah... it's raining again :( I need to have a big pizza to feel better" },
}

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

/* Dependencies */
const bodyParser = require('body-parser')
const cors = require('cors')
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'))

// Spin up the server
// Callback to debug
const port = 3000
app.listen(port, console.log(`listening on http://localhost:${port}`))

// Initialize all route with a callback function
app.get('/api/all', (req, res) => {
    const entries = Object.values(projectData)
        .sort((a, b) => b.time - a.time)
        .map(entry => ({ 
            id: entry.id,
            temp: entry.temp,
            content: entry.content, 
            date: date(entry.time)
        }))
        .slice(0, 10)
    res.send(entries)
})

// Post Route
app.post('/api/add', (req, res) => {
    const { time, temp, content } = req.body
    const id = Math.random().toString(36).substring(2, 15)
    projectData[id] = { id, time, temp, content }
    console.log({ id, date: date(time), temp, content })
    res.send({ id, date: date(time), temp, content })
})

const date = (time) => {
    let date = new Date(time)
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
}