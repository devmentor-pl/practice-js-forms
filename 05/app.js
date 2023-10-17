'use strict';

document.addEventListener('DOMContentLoaded', init);
const formEl = document.querySelector('form');

function init() {
  const ulEl = document.querySelector('ul');
  if (formEl) {
    formEl.addEventListener('submit', handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fields = [
      { name: 'firstName', label: 'Imię', required: true },
      { name: 'lastName', label: 'Nazwisko', required: true },
      { name: 'street', label: 'Ulica', required: true },
      { name: 'houseNumber', label: 'Numer budynku', required: true },
      { name: 'flatNumber', label: 'Numer mieszkania' },
      {
        name: 'zip',
        label: 'Kod pocztowy',
        pattern: '^[0-9]{2}-[0-9]{3}$',
        required: true,
      },
      { name: 'city', label: 'Miejscowość', required: true },
      { name: 'voivodeship', label: 'Województwo', required: true },
    ];

    const errors = validate(fields);

    ulEl.innerHTML = '';
    if (errors.length === 0) {
      alert('Dane zostały wypełnione prawidłowo!');
      resetForm(fields);
    } else {
      showErrors(errors);
    }
  }

  function validate(fields) {
    const errors = [];

    fields.forEach(function (field) {
      const inputElement = formEl.elements[field.name];
      const value = formEl.elements[field.name].value;
      if (field.required) {
        if (value.length === 0) {
          errors.push(`Dane w polu ${field.label} są wymagane`);
          inputElement.style.border = '1px solid red';
        } else {
          inputElement.style.border = '1px solid green';
        }
      }
      if (field.pattern) {
        const reg = new RegExp(field.pattern);
        if (!reg.test(value)) {
          errors.push(
            `Dane w polu ${field.label} zawierają niedozwolone znaki, lub nie są zgodne z przyjętym w Polsce wzorem.`
          );
          inputElement.style.border = '1px solid red';
        } else {
          inputElement.style.border = '1px solid green';
        }
      }
    });
    return errors;
  }
}

// Functions section
function showErrors(errors) {
  errors.forEach(function (text) {
    const message = document.querySelector('.messages');
    const liEl = document.createElement('li');
    liEl.innerText = text;
    message.appendChild(liEl);
  });
}

function resetForm(fields) {
  fields.forEach(function (el) {
    const inputElement = formEl.elements[el.name];
    inputElement.value = '';
    inputElement.style.border = '';
  });
}
