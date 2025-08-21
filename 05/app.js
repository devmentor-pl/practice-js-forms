// Tym razem Twoim zadaniem jest obsługa formularza, w którym użytkownik wprowadza dane adresowe.

// Na podstawie kodu HTML oceń, jaka walidacja powinna zostać wykonana na poziomie JS (pamiętaj o tagu `novalidate`).

// W przypadku błędów dodaj stosowane komunikaty do elementu `.messages`.

// Gdy formularz zostanie wypełniony poprawnie, poinformuj użytkownika, że dane zostały wysłane prawidłowo.

const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');

formEl.addEventListener('submit', validateForm)

function validateForm(e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;

    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    const errors = [];

    if (firstName.length === 0) {
        errors.push('Dane w polu Imię są niepoprawne!')
        // alert('Your First Name cannot be left blank')
        // firstName.focus()
    }
    if (lastName.length === 0) {
        errors.push('Dane w polu Nazwisko są niepoprawne!')
    }
    if (street.length === 0) {
        errors.push('Dane w polu Ulica są niepoprawne!')
    }
    if (houseNumber.length === 0 || Number.isNaN(houseNumber)) {
        errors.push('Dane w polu Numer budynku są niepoprawne!')
    }
    if (flatNumber.length === 0 || Number.isNaN(flatNumber)) {
        errors.push('Dane w polu Numer mieszkania pocztowy są niepoprawne!')
    }
    if (zip.length === 0 || !/^[0-9]{2}-[0-9]{3}$/.test(zip)) {
        errors.push('Dane w polu Kod pocztowy są niepoprawne!')

    }
    if (city.length === 0) {
        errors.push('Dane w polu Miasto są niepoprawne!')
    }
    if (voivodeship.length === 0) {
        errors.push('Dane w polu Województwo są niepoprawne!')

    }
    if (errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        errors.forEach(function (err) {
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulEl.appendChild(newLi);
        });
        console.log(errors)
    } else {
        const newLi = document.createElement('li');
        newLi.innerText = 'Dane zostały wysłane prawidłowo!';
        ulEl.appendChild(newLi);
    }
}