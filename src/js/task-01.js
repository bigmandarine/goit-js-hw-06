const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);
const itemCategories = document.querySelectorAll('.item');
const infoCateg = function () {
  itemCategories.forEach(value => {
    console.log(`Category: ${value.firstElementChild.textContent}`);
    console.log(`Elements: ${value.lastElementChild.children.length}`);
  });
};
infoCateg();
