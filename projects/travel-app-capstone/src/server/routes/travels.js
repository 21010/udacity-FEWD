const express = require('express')
const router = express.Router()
const { createBundle } = require('../utils/bundler')

module.exports = (travels) => {

    router.get('/get', (req, res) => {
        res.json(travels.getAll())
    })

    router.get('/get/:id', (req, res) => {
        const { id } = req.params
        res.json(travels.get(id))
    })

    router.post('/add', (req, res) => {
        const { location, date } = req.body
        createBundle(location, date)
            .then(bundle => {
                res.json(travels.add(bundle))
            })
            .catch(error => console.warn(error))
    })

    router.post('/remove/:id', (req, res) => {
        const { id } = req.params
        res.json(travels.remove(id))
    })

    return router
}