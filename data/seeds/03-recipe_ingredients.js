
exports.seed = function(knex) {
  
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: '1/2 cup'},
        {recipe_id: 1, ingredient_id: 2, quantity: '1 cup'},
        {recipe_id: 1, ingredient_id: 3, quantity: '2 eggs'},
        {recipe_id: 2, ingredient_id: 4, quantity: '1 bag'},
        {recipe_id: 2, ingredient_id: 5, quantity: '2 cups'},
        {recipe_id: 2, ingredient_id: 6, quantity: '1 shredded chicken breast'},
        
      ]);
};
