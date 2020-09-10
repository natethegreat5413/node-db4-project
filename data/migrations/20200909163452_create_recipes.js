
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments('id')
      tbl.text('recipe_name', 255)
        .notNullable()
        .unique()
        .index()
  })
  .createTable('ingredients', tbl => {
      tbl.increments('id')
      tbl.text('ingredient_name', 280).notNullable()
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id')
      .notNullable()
      .references('recipes.id')
    tbl.integer('ingredient_id')
      .notNullable()
      .references('ingredients.id')
    tbl.float('quantity').notNullable()
})
.createTable('instructions', tbl => {
  tbl.increments('id')
  tbl.integer('step_number').notNullable()
  tbl.text('instructions').notNullable()
  // recipes foreign key
  tbl.integer('recipe_id')
    .notNullable()
    .unsigned()
    .references('recipes.id')
})
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
