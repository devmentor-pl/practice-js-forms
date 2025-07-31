const formEl = document.querySelector('form');
formEl.addEventListener('submit', validateForm);
formEl.noValidate = true;

const messagesList = document.querySelector('.messages');

function validateForm(e) {




    const errors = [];
    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;
    const street = e.target.elements.street;
    const houseNumber = e.target.elements.houseNumber;
    const flatNumber = e.target.elements.flatNumber;
    const zip = e.target.elements.zip;
    const city = e.target.elements.city;
    const voivodeship = e.target.elements.voivodeship;

    const namesPattern = /^[a-ząćęłńóśźż -]{2,20}$/i;
    const streetPattern = /^[a-ząćęłńóśźż0-9 ]{4,35}$/i;
    const houseNumberPattern = /^[0-9]{1,4}$/;
    const flatNumberPattern = /^[0-9]{0,4}$/;

    if (!firstName.value.match(namesPattern)) errors.push('Wypełnij prawidłowo pole [imie]');

    if (!lastName.value.match(namesPattern)) errors.push('Wypełnij prawidłowo pole [nazwisko]');

    if (!street.value.match(streetPattern)) errors.push('Wypełnij prawidłowo pole [ulica]');

    if (!houseNumber.value.match(houseNumberPattern)) errors.push('Wypełnij prawidłowo pole [numer budynku]');

    if (!flatNumber.value.match(flatNumberPattern)) errors.push('Wypełnij prawidłowo pole [numer mieszkania]');

    if (!zip.value.match(zip.pattern)) errors.push('Pole kod pocztowy jest niepoprawnie sformatowane!, użyj formatu xx-yyy');

    if (!city.value.match(namesPattern)) errors.push('Wypełnij prawidłowo pole [Miejscowość]');

    if (!voivodeship.value.match(namesPattern)) errors.push('Wybierz województwo z listy!');


    const listofItems = e.target.querySelectorAll('li');

    listofItems.forEach((item) => {
        messagesList.removeChild(item);
    });

    if (errors.length > 0) {
        e.preventDefault();
        errors.forEach((error) => {
            const listItem = document.createElement('li');
            listItem.innerText = error;
            messagesList.appendChild(listItem);
        });
    }
    else {
        alert('Dane zostały wprowadzone w poprawny sposób!, wysyłanie formularza');
        return true;
    }


}