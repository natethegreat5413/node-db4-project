
exports.seed = function(knex) {
  
      return knex('instructions').insert([
        
        {step: 'heat up the grill, put 2 tortillas on the grill to start cooking, once they are hot, add the cheese on one and put the other on top.  Eat when cheese is melted', minutes: '5', recipe_id: '1'},
        {step: 'pour 3 cups of water into a pot and let it boil.  Once its boiling add pasta and let it cook till its at a texture you like.  Add pasta sauce and cheese and enjoy', minutes: '20', recipe_id: '2'},
        {step: 'cook rice to desired texture and set aside.  Cut chicken into small peices and cook until well done. Cook vegitables until soft. Add chicken and vegitables to rice and pour soy sauce on top.', minutes: '25', recipe_id: '3'}
      ]);
};
