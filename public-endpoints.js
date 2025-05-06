const path = require('path')
const express = require('express')

const router = express.Router()

const root = path.join(__dirname, 'public')

router.get('/', (_, response) => {
    response.sendFile('index.html', { root })
})


router.get('/api/v1/menu', (_, response) => {
    response.sendFile('index.html', { root })
})

router.get('/api/v1/events', (_, response) => {
    response.sendFile('index.html', { root })
})

router.get('/api/v1/menu/:id', (_, response) => {
    response.sendFile('index.html', { root })
})

router.get('/api/v1/events/:id', (_, response) => {
    response.sendFile('index.html', { root })
})

router.post('api/v1/menu'), (request, response) => {
    return
}
router.post('api/v1/events'), (request, response) => {
    return
}



router.get('/types/:type', (_, response) => {
    response.sendFile('type.html', { root })
})

module.exports = router