const formEl = document.querySelector('form');
const errorsBox = formEl.querySelector('.messages');
formEl.noValidate = true;

formEl && formEl.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const errors = [];
  errors.length = 0;
  errorsBox.innerHTML = '';

  const inputs = [
    {name: 'firstName', label: 'Imię', required: true},
    {
      name: 'lastName',
      label: 'Nazwisko',
      required: true,
    },
    {name: 'street', label: 'Ulica', required: true},
    {
      name: 'houseNumber',
      label: 'Numer budynku',
      type: 'number',
      required: true,
    },
    {name: 'flatNumber', label: 'Numer mieszkania', type: 'number'},
    {
      name: 'zip',
      label: 'Kod pocztowy',
      pattern: '^[0-9]{2}-[0-9]{3}$',
      required: true,
    },
    {
      name: 'city',
      label: 'Miasto',
      required: true,
    },
    {name: 'voivodeship', label: 'Województwo', required: true},
  ];
  validateForm(inputs, errors);

  if (errors.length > 0) {
    showErrors(errors);
  } else {
    alert('Formularz został przesłany');
    inputs.forEach((input) => {
      formEl.elements[input.name].value = '';
    });
  }
}

function validateForm(inputs, errors) {
  inputs.forEach((input) => {
    const {
      name,
      label,
      required = false,
      type = 'text',
      pattern = null,
    } = input;
    const value = formEl.elements[name].value;
    if (required) {
      if (value.length === 0) {
        errors.push(`Nie podano danych w polu ${label}`);
      }
    }

    if (type === 'number') {
      if (Number.isNaN(Number(value))) {
        errors.push(`Dane w polu ${label} muszą być liczbą`);
      }
    }
    if (pattern) {
      const regExp = new RegExp(pattern);
      if (!regExp.test(value)) {
        errors.push(`Dane w polu ${label} mają niepoprawny format`);
      }
    }
  });
}

function showErrors(errors) {
  errors.forEach((error) => {
    const errorInfo = document.createElement('li');
    errorInfo.innerText = error;
    errorInfo.style.color = 'red';
    errorsBox.appendChild(errorInfo);
  });
}
