const formEl = document.querySelector('form');
const errorsBox = formEl.querySelector('.messages');
formEl.noValidate = true;
formEl && formEl.addEventListener('submit', validateData);

function validateData(e) {
  e.preventDefault();
  const errors = [];
  errors.length = 0;
  errorsBox.innerHTML = '';
  const inputsList = [...formEl.elements];

  inputsList.forEach((input) => {
    if (input.value === '') {
      if (input.tagName !== 'SELECT' && input.type !== 'submit') {
        errors.push(`${input.parentElement.innerText} jest puste`);
      } else if (input.tagName === 'SELECT') {
        errors.push(`${input.parentElement.firstChild.nodeValue} jest puste`);
      }
    }
    if (input.value !== '' && input.type.number === isNaN) {
      errors.push(`${input.parentElement.innerText} is not a number`);
    }
  });

  if (errors.length > 0) {
    errors.forEach((error) => {
      const errorInfo = document.createElement('li');
      errorInfo.innerText = error;
      errorInfo.style.color = 'red';
      errorsBox.appendChild(errorInfo);
    });

    console.log(inputsList);
    console.log(errors);
  } else {
    alert('Formularz został wysłany!');
    inputsList.forEach((input) => {
      if (input.type !== 'submit') {
        input.value = '';
      }
    });
  }
}
