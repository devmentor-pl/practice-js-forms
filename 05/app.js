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
    

  const errors = validate(fields, form.elements);
  // teraz robisz z błędami co chcesz
  // w ten sposób możesz wykorzystać walidację w wielu miejscach 

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

  }
}

function validate(fields, data) {
      const errors = [];
      
      fields.forEach(function (field) {
              const value = data[field.name].value; // pobieram wartość dla konkretnego pola

              if (field.required) {
                  if (value.length === 0) {
                      errors.push('Dane w polu ' + field.label + ' są wymagane.');
                  }
              }

              if (field.type === 'number') {
                  if (Number.isNaN(Number(value))) {
                      errors.push(
                          'Dane w polu ' + field.label + ' muszą być liczbą.'
                      );
                  }
              }

              if (field.pattern) {
                  const reg = new RegExp(field.pattern);
                  if (!reg.test(value)) {
                      errors.push(
                          'Dane w polu ' +
                              field.label +
                              ' zawierają niedozwolone znaki lub nie są zgodne z przyjętym w Polsce wzorem.'
                      );
                  }
              }
      });
          
      return errors;
  }