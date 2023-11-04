
const express = require('express')

const APP_PORT = 8000

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Express!</h1>')
})

app.listen(APP_PORT, () => {
  console.log(`App is running at port ${APP_PORT}`)
})