function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesEl = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');

createButton.addEventListener('click', () => {
  console.log(document.createElement('div'));
});
console.log(inputEl.value);
