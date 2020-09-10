const db = require('../db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(id){
    return db('recipe_ingredients as ri')
        .select('i.ingredient_name', 'ri.quantity')
        .join('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
        .where({ 'ri.recipe_id': id })
}

function getInstructions(id){
    return db('instructions as i')
        .select('i.step_number', 'i.instructions')
        .where({'recipe_id': id})
}