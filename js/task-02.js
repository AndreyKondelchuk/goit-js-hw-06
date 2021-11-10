const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients') 


const items = ingredients.map(ingredient => {
  const createdEl = document.createElement('li');
  createdEl.textContent = ingredient;
  createdEl.classList.add('item')
  return createdEl
})

ingredientsList.append(...items)
console.log(ingredientsList)