const formEl = document.querySelector('form');
const errorsBox = formEl.querySelector('.messages');
formEl.noValidate = true;

formEl && formEl.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const errors = [];
  errors.length = 0;
  errorsBox.innerHTML = '';
  const inputsList = [...formEl.elements];

  inputsList.forEach((input) => {
    validateForm(input, errors);
  });

  if (errors.length > 0) {
    showErrors(errors);
  } else {
    alert('Formularz został wysłany!');
    inputsList.forEach((input) => {
      if (input.type !== 'submit') {
        input.value = '';
      }
    });
  }
}

function validateForm(input, errors) {
  if (input.value === '') {
    if (input.tagName !== 'SELECT' && input.type !== 'submit') {
      errors.push(`${input.parentElement.innerText} jest puste`);
    } else if (input.tagName === 'SELECT') {
      errors.push(
        `${input.parentElement.firstChild.nodeValue.trim()} jest puste`
      );
    }
  }
  if (input.value !== '' && input.type === 'number' && isNaN(input.value)) {
    errors.push(`${input.parentElement.innerText} is not a number`);
  }
  if (input.name === 'zip') {
    const zipCode = input.value;
    const patternRegExp = input.getAttribute('pattern');
    const regExp = new RegExp(patternRegExp);
    if (!regExp.test(zipCode)) {
      errors.push('Kod pocztowy jest błędny');
    }
  }
}

function showErrors(errors) {
  errors.forEach((error) => {
    const errorInfo = document.createElement('li');
    errorInfo.innerText = error;
    errorInfo.style.color = 'red';
    errorsBox.appendChild(errorInfo);
  });
}
