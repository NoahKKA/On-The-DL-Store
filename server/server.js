//Dependencies
const express =  require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path')
const cors = require('cors')

//Conifguration/ Middleware
require('dotenv').config()
app.use(cors())
app.use(express.json)
app.use(express.urlencoded({ extended:false }))
app.use(express.static(path.join(__dirname, '../build')))

app.listen(4005, () => {
  console.log("Server running on port 4005")
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})