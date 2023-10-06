'use strict';
document.addEventListener('DOMContentLoaded', init);

function init() {
  const formEl = document.querySelector('form');
  const ulEl = document.querySelector('ul');

  if (formEl) {
    formEl.addEventListener('submit', handleSubmit);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const errors = [];

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

    fields.forEach(function (field) {
      const inputElement = formEl.elements[field.name];
      const value = formEl.elements[field.name].value;
      if (field.required) {
        if (value.length === 0) {
          errors.push('Dane w polu ' + field.label + ' są wymagane.');
          inputElement.style.border = '1px solid red';
        } else {
          inputElement.style.border = '1px solid green';
        }
      }
      if (field.type === 'number') {
        if (Number.isNaN(Number(value))) {
          errors.push('Dane w polu ' + field.label + ' muszą być liczbą.');
          inputElement.style.border = '1px solid red';
        } else {
          inputElement.style.border = '1px solid green';
        }
      }
      if (field.pattern) {
        const reg = new RegExp(field.pattern);
        if (!reg.test(value)) {
          errors.push(
            'Dane w polu ' +
              field.label +
              ' zawierają niedozwolone znaki, lub nie są zgodne z przyjętym w Polsce wzorem.'
          );
          inputElement.style.border = '1px solid red';
        } else {
          inputElement.style.border = '1px solid green';
        }
      }
    });
    ulEl.innerHTML = '';
    if (errors.length === 0) {
      alert('Dane zostały wypełnione prawidłowo!');
      fields.forEach(function (el) {
        formEl[el.name].value = '';
        formEl[el.name].style.border = '';
      });
    } else {
      errors.forEach(function (text) {
        const message = document.querySelector('.messages');
        const liEl = document.createElement('li');
        liEl.innerText = text;
        message.appendChild(liEl);
      });
    }
  }
}
