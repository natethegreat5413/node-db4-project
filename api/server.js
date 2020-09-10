const express = require('express')
const helmet = require('helmet')
const db = require('../db-config')
const server = express()
const recipeRouter = require('../routers/recipe-router')

server.use(helmet())
server.use(express.json())
server.use('/api', recipeRouter)

server.get('/', (req, res) => {
    res.send({API: "UP"})
})

module.exports = server