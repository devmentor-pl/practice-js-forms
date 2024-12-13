const form = document.querySelector('form');
const labelList = document.querySelectorAll('label');
if (form) {
  form.addEventListener('submit', handleSubmit);
}
function handleSubmit(e) {
  e.preventDefault();
  console.log('submit');
  const { login, pass1, pass2, accept } = form.elements;
  const errors = [];
  if (login.value.indexOf('@') === -1) {
    errors.push(login.previousElementSibling);
  }
  if (pass1.value !== pass2.value || pass1.value.length <= 6) {
    errors.push(pass1.previousElementSibling);
    errors.push(pass2.previousElementSibling);
  }
  if (!accept.checked) {
    errors.push(accept.previousElementSibling);
  }
  resetErrors();
  if (errors.length === 0) {
    console.log('done');
  } else {
    showErrors(errors);
  }
}
function resetErrors() {
  labelList.forEach((label) => {
    label.style.color = '';
  });
}
function showErrors(errors) {
  errors.forEach((label) => {
    label.style.color = 'red';
  });
}