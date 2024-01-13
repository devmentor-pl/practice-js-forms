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
