const fields = [
    { name: 'firstName', label: 'Imię', isRequired: true, pattern: '^[A-Za-z]{3,}$' },
    { name: 'lastName', label: 'Nazwisko', isRequired: true, pattern: '^[A-Za-z]{3,}$' },
    { name: 'street', label: 'Ulica', isRequired: true, pattern: '^[A-Za-z]{3,}$' },
    { name: 'houseNumber', label: 'Numer budynku', type: 'number', isRequired: true, pattern: '^[1-9]{1,3}' },
    { name: 'flatNumber', label: 'Numer mieszkania', type: 'number', pattern: '^[1-9]{1,3}' },
    { name: 'zip', label: 'Kod pocztowy', type: 'number', isRequired: true, pattern: '^[0-9]{2}-[0-9]{3}$' },
    { name: 'city', label: 'Miejscowość', isRequired: true },
    { name: 'voivodeship', label: 'Województwo', isRequired: true }
  ];
  
  const form = document.querySelector('form');
  
  document.addEventListener('DOMContentLoaded', init);
  
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