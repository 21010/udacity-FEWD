const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = {
    api: require('./routes/api'),
    travels: require('./routes/travels'),
}

const Travels = require('./data/travels')
const travelsDB = new Travels()

const port = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

// routes
app.get('/', (req, res) => {
    res.send('dist/index.html')
})

app.use('/api/travels', routes.travels(travelsDB))
app.use('/api', routes.api)

app.listen(port, () => console.log(`app is listening on http://localhost:${port}`))