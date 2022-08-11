const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены.');
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log(`name: ${name}, value: ${value}`);
      formEl.reset();
    });
  }
});
