const validationInputEl = document.querySelector('#validation-input');
validationInputEl.addEventListener('blur', event => {
  if (validationInputEl.value.length < event.currentTarget.attributes[2].value) {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  } else {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
  }
  console.log(event);
});
