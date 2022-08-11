const validationInputEl = document.querySelector('#validation-input');
validationInputEl.addEventListener('blur', event => {
  if (validationInputEl.value.length === Number(event.currentTarget.dataset.length)) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
});
