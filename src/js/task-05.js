const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', event => {
  nameOutputEl.textContent = event.currentTarget.value;
  console.log(event.currentTarget.value);
  if (inputEl.value === '') {
    nameOutputEl.textContent = 'Anonymous';
  }
});
