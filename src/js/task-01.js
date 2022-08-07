const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);
const itemCategories = document.querySelectorAll('.item');
const infoCateg = function () {
  for (const item of itemCategories) {
    const nameCategories = item.firstElementChild.textContent;
    console.log(`Category: ${nameCategories}`);
    const quantityCateg = item.lastElementChild.children.length;
    console.log(`Elements: ${quantityCateg}`);
  }
};
console.log(infoCateg());
