const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(){
    return db('recipes')
        .select('recipes.recipe_name', 'I.measurement')
        .join('ingredients as I', 'recipes.ingredients_id', 'I.id')
        .where('recipes.id', '=', id)

}

function getInstructions(){
    return
}