const express = require('express')
const router = express.Router()

const pixabay = require('../utils/pixabay.api')
const unsplash = require('../utils/unsplash.api')
const restcountries = require('../utils/restcountries.api')
const weatherbit = require('../utils/weatherbit.api')
const geonames = require('../utils/geonames.api')

// Pixabay API endpoint
router.get('/pixabay/:keyword', (req, res) => {
    const { keyword } = req.params
    pixabay.getPhotos(keyword)
        .then(photos => res.json(photos))
})

// Unsplash API endpoint
router.get('/unsplash/:keyword', (req, res) => {
    const { keyword } = req.params
    res.json({
        small: unsplash.getPhoto(keyword, 'small'),
        medium: unsplash.getPhoto(keyword, 'medium'),
        large: unsplash.getPhoto(keyword, 'large')
    })
})

router.get('/unsplash/custom/:keyword', (req, res) => {
    const { keyword } = req.params
    const { width, height } = req.query
    res.json({
        custom: unsplash.getCustomPhoto(keyword, width, height)
    })
})

// RESTcountries API endpoint
router.get('/country/name/:name', (req, res) => {
    const { name } = req.params
    restcountries.getCountryByName(name)
        .then(country => res.json({ ...country }))
})

router.get('/country/code/:code', (req, res) => {
    const { code } = req.params
    restcountries.getCountryByCode(code)
        .then(country => res.json({ ...country }))
})

// Wheatherbit API endpoint
router.get('/weather/:cityName', (req, res) => {
    const { cityName } = req.params
    weatherbit.getCurrentWeatherByCityName(cityName)
        .then(data => res.json(data))
})

router.get('/weather', (req, res) => {
    const { lat, lng } = req.query
    weatherbit.getCurrentWeatherByLatLon(lat, lng)
        .then(data => res.json(data))
})

router.get('/forecast/:cityName', (req, res) => {
    const { cityName } = req.params
    weatherbit.getWeatherByCityName(cityName)
        .then(data => res.json(data))
})

router.get('/forecast', (req, res) => {
    const { lat, lng } = req.query
    weatherbit.getWeatherByLatLon(lat, lng)
        .then(data => res.json(data))
})

// Geonames API endpoint
router.get('/geonames/:cityName', (req, res) => {
    const { cityName } = req.params
    geonames.get(cityName)
        .then(data => res.json(data))
})

module.exports = router