document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const messages = document.querySelector('.messages');
    

    form.setAttribute('novalidate', true);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        messages.innerHTML = '';


        const errors = [];


        const firstName = form.elements['firstName'];
        const lastName = form.elements['lastName'];
        const street = form.elements['street'];
        const houseNumber = form.elements['houseNumber'];
        const flatNumber = form.elements['flatNumber'];
        const zip = form.elements['zip'];
        const city = form.elements['city'];
        const voivodeship = form.elements['voivodeship'];

        // Sprawdzenie czy pole imię jest wypełnione i czy zawiera tylko litery
        if (firstName.value.trim() === '') {
            errors.push('Imię jest wymagane.');
        } else if (!namePattern.test(firstName.value())) {
            errors.push('Imię może zawierać tylko litery.');
        }

        // Sprawdzenie czy pole nazwisko jest wypełnione
        if (lastName.value.trim() === '') {
            errors.push('Nazwisko jest wymagane.');
        }

        // Sprawdzenie czy pole ulica jest wypełnione
        if (street.value.trim() === '') {
            errors.push('Ulica jest wymagana.');
        }

        // Sprawdzenie czy numer budynku jest wypełniony i jest liczbą
        if (houseNumber.value.trim() === '' || isNaN(houseNumber.value)) {
            errors.push('Numer budynku jest wymagany i musi być liczbą.');
        }

        // Sprawdzenie czy numer mieszkania (jeśli podany) jest liczbą
        if (flatNumber.value.trim() !== '' && isNaN(flatNumber.value)) {
            errors.push('Numer mieszkania musi być liczbą.');
        }

        // Sprawdzenie formatu kodu pocztowego
        const zipPattern = /^[0-9]{2}-[0-9]{3}$/;
        if (!zipPattern.test(zip.value)) {
            errors.push('Kod pocztowy musi mieć format XX-XXX.');
        }

        // Sprawdzenie czy pole miejscowość jest wypełnione
        if (city.value.trim() === '') {
            errors.push('Miejscowość jest wymagana.');
        }

        // Sprawdzenie czy wybrano województwo
        if (voivodeship.value === '') {
            errors.push('Województwo jest wymagane.');
        }

        // Jeśli są błędy, wyświetl je
        if (errors.length > 0) {
            errors.forEach(function(error) {
                const li = document.createElement('li');
                li.textContent = error;
                li.classList.add('error');
                messages.appendChild(li);
            });
        } else {

            const successMessage = document.createElement('li');
            successMessage.textContent = 'Dane zostały wysłane prawidłowo.';
            messages.appendChild(successMessage);
            form.reset();
        }
    });
});