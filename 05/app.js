const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
formEl.noValidate = true;
formEl.addEventListener('submit', checkData)

function checkData(e) {
    e.preventDefault();

    const errors = [];

    const fields = [
        { 
            name: 'firstName',
            label: 'Imię',
            required: true,
            pattern:'^[a-zA-Z --]+$',
        },
        {
            name: 'street', 
            label: 'Ulica',
            required: true,
        },
        {
            name: 'houseNumber',
            label: 'Numer budynku',
            type: 'number',
            required: true,
        },
        { 
            name: 'flatNumber', 
            label: 'Numer mieszkania', 
            type: 'number' 
        },
        {
            name: 'zip',
            label: 'Kod pocztowy',
            pattern: '^[0-9]{2}-[0-9]{3}$',
            required: true,
        },
        {
            name: 'city',
            label: 'Miasto',
            required: true,
            pattern: '^[a-zA-Z --]+$',
        },
        {
            name: 'voivodeship', 
            label: 'Województwo', 
            required: true 
        },
    ];

    fields.forEach(function(field) {
        const value = formEl.elements[field.name]. value;
        if(field.required) {
            if(value.length === 0) {
                errors.push('Data in ' + field.label + ' are required.'); 
            }
        }

        if (field.type === 'number') {
            if (Number.isNaN(Number(value))) {
                errors.push(
                    'Data in ' + field.label + ' must be a number.'
                );
            }
        }

        if(field.pattern) {
            const reg = new RegExp(field.pattern);
            if (!reg.test(value)) {
                errors.push(
                    'Data in ' + field.label + ' is not allowed.'
                );
            }
        }
    });

    ulEl.innerHTML = '';
    if(errors.length === 0) {
        alert('Your form is completed correctly :) ');
        fields.forEach(function(el) {
            formEl[el.name].value = '';
        });
    } else {
        errors.forEach(function(txt) {
            const liEl = document.createElement('li');
            liEl.innerText = text;
            ulEl.appendChild(liEl);
        });
    }

    // const firstName = e.target.elements.firstName.value;
    // if(firstName.value.length < 2) {
    //     errors.push('enter correct first name');
    // }

    // const lastName = e.target.elements.lastName.value;
    // if(lastName.value.length < 2) {
    //     errors.push('enter correct last name');
    // }

    // const street = e.target.elements.street.value;
    // if(street.value.length === 0) {
    //     errors.push('enter correct street name');
    // }

    // const houseNumber = e.target.elements.houseNumber.value;
    // if(houseNumber === 0 || Number(houseNumber) <= 0) {
    //     errors.push('enter correct house number');
    // }

    // const flatNumber = e.target.elements.flatNumber.value;
    // if(flatNumber === 0 || Number(flatNumber) <= 0) {
    //     errors.push('enter correct flat number');
    // }

    // const zip = e.target.elements.zip.value;
    // if (!(zip.match('^[0-9]{2}-[0-9]{3}$'))) {
    //     errors.push('enter correct zip code');
    // }

    // const city = e.target.elements.city.value;
    // if(city.value.length === 0) {
    //     errors.push('enter correct city name' )
    // }

    // const voivodeship = e.target.elements.voivodeship.value;
    // if(voivodeship.value.length < 1) {
    //     errors.push('choose correct voivodeship name');
    // }

    // // check if the form is completed correctly

    // if(errors.length > 0) {
    //     e.preventDefault();
    //     ulEl.innerText = '';
    //     errors.forEach(function(err) {
    //         const newLiEl = document.createElement('li');
    //         newLiEl.innerText = err.message;
    //         ulEl.appendChild(newLiEl);
    //         newLiEl.style.color = 'red';
    //     })
    // } else if (errors.length === 0)
    //     ulEl.innerHTML = '';
    //     alert('Your form is completed correctly :) ');

    //     Array.from(formEl.elements).forEach(function(el) {
    //         el.value = '';
    //     })
}

