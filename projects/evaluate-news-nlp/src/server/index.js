const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { generateError, generateResponse, matchURL } = require('./utils/helpers')
const textApi = require('./utils/alyien.api')

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

app.get('/', (req, res) => {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.use('/api', (req, res, next) => {
    let error = null

    if (!req.query.url) {
        error = generateError('url was not provided')
    } else if (!matchURL(req.query.url)) {
        error = generateError('url is incorrect')
    }

    error ? res.status(400).json(error) : next() 
})

app.get('/api/:type', (req, res) => {
    const { url } = req.query
    const { type } = req.params
    
    if (typeof textApi[type] !== 'function') {
        return res.status(400).json(generateError('endpoint does not exist')) 
    }

    textApi[type](url)
        .then(result => res.json(generateResponse(result)))
        .catch(error => res.json(generateError(error)))
})

// designates what port the app will listen to for incoming requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))