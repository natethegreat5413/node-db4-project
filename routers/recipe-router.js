const express = require('express')
const router = express.Router()
const db = require('../db-config')
const recipes = require('./recipe-model')

router.get('/', (req, res) => {
    recipes.getRecipes()
        .then(rec => {
            res.status(200).json({rec})
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
})

router.get('/recipes/:id/shoppingList', (req, res) => {
    recipes.getShoppingList(req.params.id)
        .then(shop => {
            res.status(200).json({shop})
        })
        .catch(error => {
            res.status({error: error.message})
        })
})

router.get('/recipes/:id/instructions', (req, res) => {
    recipes.getInstructions(req.params.id)
        .then(rec => {
            res.status(200).json({rec})
        })
        .catch(error => {
            res.status(200).json({error: error.message})
        })
})



module.exports = router