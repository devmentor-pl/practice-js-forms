document.addEventListener('DOMContentLoaded', init);

function init() {
  const form = document.querySelector('form');
  const message = document.querySelector('.messages');
  const ulEl = document.createElement('ul');
  message.appendChild(ulEl);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    ulEl.innerHTML = '';
    const errors = [];

    const fields = [
      { name: 'firstName', label: 'Imię', required: true },
      { name: 'lastName', label: 'Nazwisko', required: true },
      { name: 'street', label: 'Ulica', required: true },
      {
        name: 'houseNumber',
        label: 'Numer budynku',
        type: 'number',
        required: true,
      },
      { name: 'flatNumber', label: 'Numer mieszkania', type: 'number' },
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
      const value = form.elements[field.name].value;

      if (field.required) {
        if (value.length === 0) {
          errors.push('Dane w polu ' + field.label + ' są wymagane.');
        }
      }

      if (field.type === 'number' && value.length > 0) {
        if (Number.isNaN(Number(value))) {
          errors.push(`Dane w polu ${field.label} muszą być liczbą`);
        }
      }

      if (field.pattern && value.length > 0) {
        const reg = new RegExp(field.pattern);
        if (!reg.test(value)) {
          errors.push(
            `Dane w polu ${field.label} zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.`
          );
        }
      }
    });

    if (errors.length === 0) {
      alert('Dane zostały wypełnione prawidłowo!');

      // czyszczę pola po prawidłowym wypełnieniu formularza
      fields.forEach(function (el) {
        form[el.name].value = '';
      });
    } else {
      errors.forEach(function (text) {
        const liEl = document.createElement('li');
        liEl.innerText = text;
        ulEl.appendChild(liEl);
      });
    }
  });
}
