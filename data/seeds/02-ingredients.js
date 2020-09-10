
exports.seed = function(knex) {
  
      return knex('ingredients').insert([
        {ingredient_name: 'chocolate frosting'},
        {ingredient_name: 'flower'},
        {ingredient_name: 'eggs'},
        {ingredient_name: 'tortilla chips'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'chicken'},
      ]);
};
