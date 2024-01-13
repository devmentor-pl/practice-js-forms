//zip czyli kod pocztowy mialem problem, nie dzialal wiec zmienilem type z number na text ^^
const fields = [
    { name: 'firstName', label: 'Imię', isRequired: true, pattern: '^[A-Za-z]{3,}$' },
    { name: 'lastName', label: 'Nazwisko', isRequired: true, pattern: '^[A-Za-z]{3,}$' },
    { name: 'street', label: 'Ulica', isRequired: true, pattern: '^[A-Za-z]{3,}$' },
    { name: 'houseNumber', label: 'Numer budynku', type: 'number', isRequired: true, pattern: '^[1-9]{1,3}' },
    { name: 'flatNumber', label: 'Numer mieszkania', type: 'number', pattern: '^[1-9]{1,3}' },
    { name: 'zip', label: 'Kod pocztowy', type: 'text', isRequired: true, pattern: '^[0-9]{2}-[0-9]{3}$' },
    { name: 'city', label: 'Miejscowość', isRequired: true },
    { name: 'voivodeship', label: 'Województwo', isRequired: true }
  ];
  
  const form = document.querySelector('form');
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    if (form) {
        form.addEventListener('submit', isValid);
    };
};

//ENG: after refactoring. DE: nach der Uberarbeitung

function isValid(e) {
    e.preventDefault();
    const ulErrorsList = document.querySelector('.messages');
    ulErrorsList.innerHTML = '';
    const errors = [];
  
    fields.forEach(({ name, label, type = 'text', isRequired, pattern }) => {
      const value = form.elements[name].value;
  
      if (isRequired && value === '') {
        errors.push(`${label} - This input can't be empty.`);
      }
  
      if (type === 'number' && isNaN(Number(value))) {
        errors.push(`${label} - This input has to be a number.`);
      }
  
      if (pattern && !new RegExp(pattern).test(value)) {
        errors.push(`${label} - This value must match the pattern or is not equal to the country where you are.`);
      }
    });
  
    console.log(errors);
  
    if (errors.length === 0) {
      alert('Form successfully submitted!');
      fields.forEach(({ name }) => {
        form.elements[name].value = '';
      });
    } else {
      errors.forEach((el) => {
        const liErrorValue = document.createElement('li');
        liErrorValue.style.color = 'red';
        liErrorValue.textContent = el;
        ulErrorsList.appendChild(liErrorValue);
      });
    }
  }
  

/*code for testing but - its working ;-)

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const messages = document.querySelector('.messages');

    form.setAttribute('novalidate', true);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        messages.innerHTML = ''; // Wyczyszczenie poprzednich komunikatów

        if (validateForm()) {
            messages.innerHTML = '<li style="color: green;">Dane zostały wysłane prawidłowo!</li>';
            
        }
    });

    function validateForm() {
        let isValid = true;

        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(function (input) {
            if (!input.checkValidity()) {
                isValid = false;
                const errorMessage = input.validationMessage || 'Pole wymagane';
                messages.innerHTML += `<li>${errorMessage}</li>`;
            }
        });

        return isValid;
    }
});

*/