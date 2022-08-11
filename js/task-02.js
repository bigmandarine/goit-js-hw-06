const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredientsEl = document.querySelector('#ingredients');

const newLiOfingredients = [];
ingredients.map(value => {
  let liElement = '';
  liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = value;
  console.log(liElement);
  return newLiOfingredients.push(liElement);
});
listIngredientsEl.append(...newLiOfingredients);
