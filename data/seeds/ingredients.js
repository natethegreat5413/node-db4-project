
exports.seed = function(knex) {

      return knex('ingredients').insert([
        // cheese quesadilla
        {ingredient: 'tortilla'},
        {ingredient: 'cheese'},
        // pasta
        {ingredient: 'noodles'},
        {ingredient: 'pasta sauce'},
        {ingredient: 'cheese'},
        // stir fry
        {ingredient: 'rice'},
        {ingredient: 'chicken'},
        {ingredient: 'vegitables'},
        {ingredient: 'soy sauce'}
      ]);
};
