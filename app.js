const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/index.html');
})

app.get('/about', (req, res) => {
  res.sendFile( __dirname + '/about.html');
})

app.get('/portfolio', (req, res) => {
  res.sendFile( __dirname + '/portfolio.html');
})

app.get('/contact', (req, res) => {
  res.sendFile( __dirname + '/contact.html');
})

app.listen(port, () => {
  console.log(`網址: http://localhost:${port}`)
})
