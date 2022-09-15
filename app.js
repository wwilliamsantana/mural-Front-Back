const express = require('express')
const app = express()
const path = require('path')
const { v4: uuidV4 } = require('uuid')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

let posts = []

app.get('/all', (request, response) => {
  response.json(posts)
})

app.post('/new', (request, response) => {
  const { title, description } = request.body

  posts.push({
    title,
    description,
    id: uuidV4(),
    date: new Date().toLocaleDateString()
  })

  response.sendStatus(201)
})

app.listen(3333, () => {
  console.log('Server is running!')
})
