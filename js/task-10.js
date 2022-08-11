function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  boxesEl: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('input'),
  inputeNumber: document.querySelector('[type="number"]'),
};
refs.boxesEl.style.width = '30px';
refs.boxesEl.style.height = '30px';
let amount = 0;
const allBoxes = [];
refs.createButton.addEventListener('click', createBoxes);
function createBoxes() {
  for (let i = 0; i < refs.inputeNumber.value; i += 1) {
    const boxEL = document.createElement('div');
    boxEL.style.width = '30px';
    boxEL.style.height = '30px';
    boxEL.style.backgroundColor = getRandomHexColor();
    allBoxes.push(boxEL);
    console.log(boxEL);
  }
}
refs.boxesEl.append(...allBoxes);
