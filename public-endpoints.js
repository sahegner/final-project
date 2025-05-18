
const path = require('path')
const express = require('express')

const router = express.Router()

const root = path.join(__dirname, 'public')

router.get('/', (_, response) => {
    response.sendFile('index.html', { root })
})

router.get('/api/v1/menu', (_, response) => {
    response.sendFile('menu.html', { root })
})

router.get('/api/v1/events', (_, response) => {
    response.sendFile('events.html', { root })
})

module.exports = router