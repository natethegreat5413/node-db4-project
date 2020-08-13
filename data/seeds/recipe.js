
exports.seed = function(knex) {
  
      return knex('recipes').insert([
        {recipe_name: 'cheese quesadilla'},
        {recipe_name: 'pasta'},
        {recipe_name: 'stir fry'}
      ]);
};
