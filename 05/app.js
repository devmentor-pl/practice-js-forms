const ulEl = document.querySelector('ul');
const formAdress = document.querySelector('form');
const labelEl = document.querySelectorAll('label')

formAdress.addEventListener('submit', checkData);

function checkData(e) {
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    const errors = [];

    getData(firstName, errors, labelEl[0]);
    getData(lastName, errors, labelEl[1]);
    getData(street, errors, labelEl[2]);
    if(houseNumber.length === 0 && flatNumber.length === 0) {
        errors.push('Brak numeru budynku lub mieszkania!');
    }
    if(zip.length !== 6) {
        errors.push('Wprowadzono nieprawidłowe dane w polu KOD POCZTOWY');
    }
    getData(city, errors, labelEl[6]);
    getData(voivodeship, errors, labelEl[7]);
    
    
    // if(voivodeship.length === 0) {
    //     errors.push('Nie wybrano województwa!');
    // }

    if(errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';

        errors.forEach(function(element) {
            const newLi = document.createElement('li');
            newLi.innerText = element;
            newLi.style.color = 'red';
            ulEl.appendChild(newLi);
        })
    } else {
        alert('Dane zostały wysłane prawidłowo!');
    }
}

function getData(el, arr, label) {
    if(el.length === 0 && label !== labelEl[7]) {
        arr.push('Wprowadzono nieprawidłowe dane w polu ' + label.innerText.toUpperCase());
    }
    if(el.length === 0 && label === labelEl[7]) {
        arr.push('Wprowadzono nieprawidłowe dane w polu WOJEWÓDZTWO');
    }
}