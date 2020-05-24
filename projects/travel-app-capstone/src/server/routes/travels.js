const express = require('express')
const router = express.Router()

module.exports = (travels) => {

    router.get('/get/:id', (req, res) => {
        const { id } = req.params
        res.json(travels.get(id))
    })

    router.get('/get', (req, res) => {
        res.json(travels.getAll())
    })

    router.post('/add', (req, res) => {
        const { data } = req.body
        if (data) res.json(travels.add(data))
    })

    router.post('/remove/:id', (req, res) => {
        const { id } = req.params
        res.json(travels.remove(id))
    })

    return router
}