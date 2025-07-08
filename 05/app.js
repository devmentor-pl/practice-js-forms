const formEl = document.querySelector('form');
const ulEl = document.querySelector('.messages');
formEl.noValidate = true;

formEl.addEventListener('submit', checkData);

function checkData(e) {
  const fields = [
    { name: 'firstName', label: 'Imię:', required: true },
    { name: 'lastName', label: 'Nazwisko', required: true },
    { name: 'street', label: 'Ulica', required: true },
    { name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true },
    { name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: false },
    { name: 'zip', label: 'Kod pocztowy', pattern: /^[0-9]{2}-[0-9]{3}$/, required: true },
    { name: 'city', label: 'Miejscowość', required: true },
    { name: 'voivodeship', label: 'Województwo', required: true },
  ];
  const errors = [];

  fields.forEach((field) => {
    const value = formEl.elements[field.name].value;

    if (field.required) {
      if (value.length === 0) {
        errors.push(`${field.label} is required`);
      }
    }

    if (field.type === 'number') {
      if (Number.isNaN(Number(value))) {
        errors.push(`Value in ${field.label} must be number`);
      }
    }

    if (field.pattern) {
      const reg = new RegExp(field.pattern);
      if (!reg.test(value)) {
        errors.push(`Value in ${field.label} is incorrect`);
      }
    }
  });

  showMessages(e, errors);
}

function showMessages(e, errors) {
  if (errors.length > 0) {
    e.preventDefault();
    ulEl.innerHTML = '';
    errors.forEach((err) => {
      const newLi = document.createElement('li');
      newLi.innerText = err;
      ulEl.appendChild(newLi);
    });
  } else {
    e.preventDefault();
    ulEl.innerHTML = '';
    const newLi = document.createElement('li');
    ulEl.appendChild(newLi);
    newLi.innerText = 'Success!';
  }
}
