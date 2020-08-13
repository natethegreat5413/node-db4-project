
exports.up = function(knex) {
  return (
      knex.schema.createTable('recipes', tbl => {
          tbl.increments()
          tbl.string('recipe_name', 255)
            .notNullable()
            .unique()
      })
      .createTable('instructions', tbl => {
          tbl.increments()
          tbl.string('step', 255)
            .notNullable()
          tbl.integer('minutes')
            .notNullable()
          tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
      })
      .createTable('ingredients', tbl => {
          tbl.increments()
          tbl.string('ingredients', 255)
            .unique()
            .notNullable()
      })
      .createTable('instructions_ingredients', tbl => {
          tbl.increments()
          tbl.string('measurement', 255)
            .notNullable()
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredient.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('recipe_id')
                .references('recipes.id')
                .unsigned()
                .notNullable()
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        
      })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
      .dropTableIfExists('instructions_ingredients')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('instructions')
      .dropTableIfExists('recipes')

  )
};
