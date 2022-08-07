const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredientsEl = document.querySelector('#ingredients');

// const listIngredients = function () {
//   for (const item of ingredients) {
//     let liElement = '';
//     liElement = document.createElement('li');
//     liElement.textContent = item;
//     liElement.classList.add('item');
//     console.log(liElement);
//     listIngredientsEl.append(liElement);
//   }
// };
// console.log(listIngredients());
const newLiOfingredients = [];
const makeListIngredients = () => {
  ingredients.forEach(value => {
    let liElement = '';
    liElement = document.createElement('li');
    liElement.textContent = value;
    liElement.classList.add('item');
    newLiOfingredients.push(liElement);
  });
};
makeListIngredients();
listIngredientsEl.append(...newLiOfingredients);
