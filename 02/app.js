'use strict';
const formEl = document.querySelector('form');
formEl.noValidate = true;
formEl.addEventListener('submit', checkFormIsCorrect);

function checkFormIsCorrect(e) {
  e.preventDefault();
  const emailEl = document.querySelector('input[type="email"]');
  const passwordEle1 = document.querySelector('input[name="pass1"]');
  const passwordEle2 = document.querySelector('input[name="pass2"]');
  const checkbox = document.querySelector('input[type="checkbox"]');
  const email = emailEl.value;
  const errors = [];
  if (!email.includes('@')) {
    errors.push(emailEl);
  }
  if (
    passwordEle1.value !== passwordEle2.value ||
    passwordEle1.value.length <= 6 ||
    passwordEle2.value.length <= 6
  ) {
    errors.push(passwordEle1, passwordEle2);
  }
  if (!checkbox.checked) {
    errors.push(checkbox);
  }
  const inputs = [...formEl.elements];
  inputs.forEach(function (input) {
    const labelError = input.previousElementSibling;
    if (labelError && errors.includes(input)) {
      labelError.style.color = 'red';
    } else if (labelError) {
      labelError.style.color = 'green';
    }
  });
  if (errors.length > 0) {
    e.preventDefault();
  } else {
    console.log('DONE');
    inputs.forEach(function (input) {
      const labelError = input.previousElementSibling;
      if (labelError) {
        labelError.style.color = 'black';
        input.value = '';
        checkbox.checked = false;
      }
    });
  }
}
