document.addEventListener('DOMContentLoaded', init)



function init() {
    const messages = [];

    const form = document.forms[0];
    // addNovalidate();
    form.setAttribute('novalidate', '')
    form.addEventListener('submit', validate)


    // function addNovalidate() {
    //     const inputs = document.querySelectorAll('input');
    //     inputs.forEach(function (element) {
    //         element.setAttribute('novalidate', '')
    //     })
    
    //     const select = document.querySelector('select')
    //     select.setAttribute('novalidate', '');
    // }

    function validate(e) {
        messages.length = 0;
        console.log('Validating...');
        e.preventDefault();

        validateName(form[0].value.trim(), 'First name');
        validateName(form[1].value.trim(), 'Last name');
        validateStreet(form[2].value.trim());
        validateHouseOrFlatNumber(form[3].value.trim(), 'House number');
        validateHouseOrFlatNumber(form[4].value.trim(), 'Flat number');
        validatePostalCode(form[5].value.trim());
        validateCity(form[6].value.trim());
        validateVoivodeship(form[7].value);
    
        if (messages.length === 0) {
            window.confirm("Form filled properly")
        }

        console.log(messages)
        createErrorsList();
    }
    
    function validateName(name, nameType) {
        const regex = /^[A-Z][a-z]{2,}$/g;
        if (name.length === 0) {
            messages.push(nameType + ' not inputted');
        } else if (!regex.test(name)) {
            messages.push(nameType + ' invalid: ' + name);
        }
    }
    
    function validateStreet(streetName) {
        const regex = /\w+/g
        if (streetName.length === 0) {
            messages.push('Street name not inputted');
        } else if (!regex.test(streetName)) {
            messages.push('Street name invalid: ' + streetName);
        } else {
            console.log('Street name ok');
        }
    }
    
    function validateHouseOrFlatNumber(number, numberType) {
        const regex = /^\d{1,4}$/g
        if (number.length === 0) {
            messages.push(numberType + ' not inputted');
        } else if (!regex.test(number)) {
            messages.push(numberType + ' invalid');
        }
    }
    
    function validateCity(name) {
        const regex = /^([a-z]+[ ]?)+$/i
        if (name.length === 0) {
            messages.push('City name not inputted');
        } else if (!regex.test(name)) {
            messages.push('City name invalid: ' + name);
        }
    }
    
    function validatePostalCode(postalCode) {
        const regex = /[0-9]{2}-[0-9]{3}/
        if(postalCode.length === 0) {
            messages.push('Postal code not inputted');
        } else if(!regex.test(postalCode)) {
            messages.push('Postal code invalid: ' + postalCode);
        }
    }

    function validateVoivodeship(voivodeship) {
        if (voivodeship.length === 0) {
            messages.push('Voivodeship not chosen');
        }
    }

    function createErrorsList() {
        const list = document.querySelector('.messages')
        list.style.color = 'red';
        messages.forEach(function(message) {
            const item = document.createElement('li');
            list.appendChild(item);
            item.innerText = message;
        })
    }
}



