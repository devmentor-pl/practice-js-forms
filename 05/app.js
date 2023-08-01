document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('form');
    const ulMessages = document.querySelector('.messages');

    form.noValidate = true;

    const fields = [
    {
      name: 'firstName',
      label: 'Imię',
      required: true,
      pattern: '^[a-zA-Z –-]+$',
    },
    {
      name: 'lastName',
      label: 'Nazwisko',
      required: true,
      pattern: '^[a-zA-Z –-]+$',
    },
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
    {
      name: 'city',
      label: 'Miejscowość',
      required: true,
      pattern: '^[a-zA-Z –-]+$',
    },
    { name: 'voivodeship', label: 'Województwo', required: true },
  ];

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const errors = [];
    
    fields.forEach(function (field) {
        const value = form.elements[field.name].value;
        validate(field, value);
    })

    ulMessages.innerText = '';
    if(errors.length === 0) {
        ulMessages.innerText = 'Dane zostaly wypelnione prawidlowo';
        fields.forEach(function (field) {
        form.elements[field.name].value = '';
      });
    } else {
        errors.forEach(err => {
            const li = document.createElement('li');
            li.innerText = err;
            ulMessages.appendChild(li);
        })
    }


    function validate(field, value) {
      if (field.required) {
            if (value.length === 0) {
                errors.push('Dane w polu ' + field.label + ' są wymagane.');
            }
        }

        if (field.type === 'number') {
            if(typeof Number(value) !== 'number') {
                errors.push('Dane w polu ' + field.label + ' musza byc liczba.');
            }
        }

        if(field.pattern) {
            const regex = new RegExp(field.pattern);
            if(!regex.test(value)) {
                errors.push('Dane w polu ' + field.label + ' nie sa poprawne. Wpisz wg wzoru 00-000');
            }
        }
    }

  }
}