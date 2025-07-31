
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.setAttribute('novalidate', true);

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const firstName = form.elements.firstName.value;
        const lastName = form.elements.lastName.value;
        const street = form.elements.street.value;
        const houseNumber = form.elements.houseNumber.value;
        const flatNumber = form.elements.flatNumber.value;
        const zip = form.elements.zip.value;
        const city = form.elements.city.value;
        const voivodeship = form.elements.voivodeship.value;

        const errors = [];
        const messagesContainer = document.querySelector('.messages');
        messagesContainer.innerHTML = ''; 

        if (firstName.length === 0) errors.push('Uzupełnij pole "Imię".');
        if (lastName.length === 0) errors.push('Uzupełnij pole "Nazwisko".');
        if (street.length === 0) errors.push('Uzupełnij pole "Ulica".');
        if (city.length === 0) errors.push('Uzupełnij pole "Miejscowość".');

        
        if (houseNumber.length === 0 || isNaN(houseNumber) || Number(houseNumber) <= 0) {
            errors.push('Podaj poprawny numer budynku.');
        }

        
        if (flatNumber.length > 0 && (isNaN(flatNumber) || Number(flatNumber) <= 0)) {
            errors.push('Podaj poprawny numer mieszkania.');
        }

        if (
            zip.length !== 6 || zip[2] !== '-' || isNaN(zip.slice(0, 2)) || isNaN(zip.slice(3))        
        ) {
            errors.push('Kod pocztowy musi być w innym formacie.');
        }
        
        
        if (voivodeship.length === 0) {
            errors.push('Wybierz województwo.');
        }

        if (errors.length > 0) {
            errors.forEach(function (error) {
                const newLi = document.createElement('li');
                newLi.innerText = error;
                messagesContainer.appendChild(newLi);
            });
        } else {
            messagesContainer.innerHTML = '<li>Formularz został wysłany poprawnie!</li>';
            form.reset();
        }
    });
});
