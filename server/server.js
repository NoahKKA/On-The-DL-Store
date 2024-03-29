//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const path = require('path')
const cors = require('cors')

//MIDDLEWARE
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, '../build')))

// LISTEN
app.listen(4005, () => {
    console.log("Server is running on port 4005")
})

// 404 Page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
