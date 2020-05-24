const express = require('express')
const router = express.Router()

const pixabay = require('../utils/pixabay.api')
const unsplash = require('../utils/unsplash.api')
const restcountries = require('../utils/restcountries.api')


router.get('/pixabay/:keyword', (req, res) => {
    const { keyword } = req.params
    pixabay.getPhotos(keyword)
        .then(photos => res.json(photos))
})


router.get('/unsplash/:keyword', (req, res) => {
    const { keyword } = req.params
    res.json({
        small: unsplash.getPhoto(keyword, 'small'),
        medium: unsplash.getPhoto(keyword, 'medium'),
        large: unsplash.getPhoto(keyword, 'large')
    })
})

router.get('/unsplash/custom/:width/:height/:keyword', (req, res) => {
    const { width, height, keyword } = req.params
    res.json({
        custom: unsplash.getCustomPhoto(keyword, width, height)
    })
})


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

module.exports = router