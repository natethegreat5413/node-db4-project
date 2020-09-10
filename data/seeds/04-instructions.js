
exports.seed = function(knex) {
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, instructions: 'Mix flower and eggs together.'},
        {recipe_id: 1, step_number: 2, instructions: 'Bake in oven for 30 minutes at 425 degrees.'},
        {recipe_id: 1, step_number: 3, instructions: 'Let cake cool, then spread frosting on top.'},
        {recipe_id: 1, step_number: 4, instructions: 'Indulge yourself in unhealthy amounts of cake.'},
        {recipe_id: 2, step_number: 1, instructions: 'Pour chips on clean fine china plate.'},
        {recipe_id: 2, step_number: 2, instructions: 'Sprinkle cheese over chips, covering evenly.'},
        {recipe_id: 2, step_number: 3, instructions: 'Cook chicken to desired consistency, and add to plate of chips and cheese.'},
        {recipe_id: 2, step_number: 4, instructions: 'Sprinkle remaining cheese on top of chicken.'},
        {recipe_id: 2, step_number: 5, instructions: 'Eat to your hearts content...and then more.'},
        
      ]);
};
