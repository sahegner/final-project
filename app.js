
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('INCOMIIIINNNNNNNNG!!!')
})

app.get('/test', (request, response) => {
    response.send('THIS IS TEST ROUTE. Hi there! ')
})

app.listen(port, () => console.log(`http://localhost:${port}/`))
