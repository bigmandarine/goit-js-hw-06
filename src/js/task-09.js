function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const colorNameEl = document.querySelector('.color');
const changeColorButtonEl = document.querySelector('.change-color');
changeColorButtonEl.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
});
