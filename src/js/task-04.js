const buttonsEl = document.querySelectorAll('button');
let valueEl = document.querySelector('#value');
const decrementBtnEl = buttonsEl[0];
const incrementBtnEl = buttonsEl[1];

let counterValue = 0;
decrementBtnEl.addEventListener('click', () => {
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});
incrementBtnEl.addEventListener('click', () => {
  counterValue += 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});
