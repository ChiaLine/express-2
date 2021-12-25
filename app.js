const express = require('express')
const app = express()
const port = 3000

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html');
})

app.get('/about', (req, res) => {
  res.sendFile( __dirname + '/index.html');
})

app.get('/portfolio', (req, res) => {
  res.sendFile( __dirname + '/index.html');
})

app.get('/contact', (req, res) => {
  res.sendFile( __dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`網址: http://localhost:${port}`)
})
