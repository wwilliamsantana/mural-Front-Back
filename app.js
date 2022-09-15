const express = require('express')
const app = express()

app.use(express.json())

let list = []

app.get('/all', (request, response) => {
  response.json(list)
})

app.listen(3333, () => {
  console.log('Server is running!')
})
