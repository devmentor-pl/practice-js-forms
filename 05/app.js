const ulList = document.querySelector('.messages');
const form = document.querySelector('form');
const option = document.querySelectorAll('option');

form.addEventListener('submit', checkData);

function checkData(e) {
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


    // const fields = e.target.elements;
    // for(let i=0; i<fields.length; i++) {
    //     const f = fields[i];

    //     const label = f.previousElementSibling;
    //     if(label && label.tagName === 'LABEL') {
    //         label.style.color = '';
    //     }

    //     if(f.required && f.value === '') {
    //         label.style.color = 'red';
    //         errors.push('Pole '+ label.innerText+'musi być wypełnione!');
    //     }

    //     const num = Number(f.value);
    //     if(f.type === 'number' && (Number.isNaN( num ) || num <= 0)) {
    //         label.style.color = 'red';
    //         errors.push('Pole '+ label.innerText+ 'musi być liczbą!');
    //     }
    // }

    if (firstName.length === 0) {
        errors.push('Wpisz imię');
    }

    if (lastName === '') {
        errors.push('Wpisz nazwisko');
    }

    if (houseNumber === '') {
        errors.push('Wpisz numer');
        if (houseNumber !== Number) {
            errors.push('Pole musi być liczbą');
        }
    }

    if (flatNumber === '') {
        errors.push('Wpisz numer');
        if (flatNumber !== Number) {
            errors.push('Pole musi być liczbą');
        }
    }

    if (zip === '') {
        errors.push('Wpisz kod pocztowy');
        if (houseNumber !== Number) {
            errors.push('Kod musi być liczbą');
        }
    }

    if (city === '') {
        errors.push('Wpisz miasto');
    }

    // if (typeof option != 'string') {
    //     errors.push('Wybierz województwo');
    // }

    if (option.innerText === '') {
        errors.push('Wybierz województwo');
    }


    ulList.innerHTML = '';
    if (errors.length > 0) {
        errors.forEach(function (err) {
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulList.appendChild(newLi);
        });
    }

    if (errors.length > 0) {
        const input = document.getElementsByTagName('input');
        const label = input.previousElementSibling;
        label.style.color = 'red';
    }
}