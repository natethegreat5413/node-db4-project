
exports.seed = function(knex) {

      return knex('instructions_ingredients').insert([
        // cheese quesadilla
        {measurement: '2 tortillas', ingredients_id: '1', recipes_id: '1'},
        {measurement: '1 handful', ingredients_id: '2', recipes_id: '1'},
        // pasta
        {measurement: '1 cup', ingredients_id: '4', recipes_id: '2'},
        {measurement: '16 oz', ingredients_id: '5', recipes_id: '2'},
        {measurement: 'a pinch', ingredients_id: '6', recipes_id: '2'},

        {measurement: '1 cup', ingredients_id: '7', recipes_id: '3'},
        {measurement: '1 lb', ingredients_id: '8', recipes_id: '3'},
        {measurement: '1/2 cup', ingredients_id: '9', recipes_id: '3'},
        {measurement: '3 oz', ingredients_id: '10', recipes_id: '3'},
        
      ]);
};
