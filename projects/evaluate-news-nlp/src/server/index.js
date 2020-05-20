const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const textApi = require('./utils/alyien.api')

const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', (req, res) => {
    res.send(mockAPIResponse)
})

app.get('/hashtags', (req, res) => {
    console.log(req)
    // const { url } = req.body
    // textApi.hashtags(url).then(result => res.send(result))
})

// aylienApi.summarize('https://en.wikipedia.org')
//     .then(result => console.log(result))
//     .catch(error => console.warn(error))

// designates what port the app will listen to for incoming requests
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
