document.addEventListener('DOMContentLoaded', init);
function init() {
    console.log('DOM')


    const formEl = document.querySelector('form');
    const ulElement = document.querySelector('ul');

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit);
    };


    function handleSubmit(e) {
        e.preventDefault();

        const fields = [
            { name: 'firstName', label: 'Imie', required: true },
            { name: 'lastName', label: 'Nazwisko', required: true },
            { name: 'street', label: 'Ulica', required: true },
            { name: 'houseNumber', label: 'Numer budynku', type: "number", required: true },
            { name: 'flatNumber', label: 'Numer mieszkania', type: "number", required: true },
            { name: 'zip', label: 'Kod pocztowy', pattern: "[0-9]{2}-[0-9]{3}", required: true },
            { name: 'city', label: 'Miasto', required: true },
            { name: 'voivodeship', label: 'Wojewodztwo', required: true },

        ];

        const firstNameEl = formEl.elements.firstName;
        const lastNameEl = formEl.elements.lastName;
        const streetEl = formEl.elements.street;
        const houseNumberEl = formEl.elements.houseNumber;
        const flatNumberEl = formEl.elements.flatNumber;
        const zipEl = formEl.elements.zip;
        const cityEl = formEl.elements.city;
        const voivodeshipEl = formEl.elements.voivodeship;

        const errors = [];


        fields.forEach(function (f) {
            const value = formEl.elements[f.name].value;

            if (f.required) {
                if (value.length === 0) {
                    errors.push('Error in' + ' ' + f.label + ' ' + 'field !')
                }
            }
            if (f.type === 'number') {
                if (Number.isNaN(Number(value))) {
                    errors.push('Error in' + ' ' + f.label + ' ' + 'field ! (Must be a number !');

                }
            }
            if (f.pattern) {
                const reg = new RegExp(f.pattern)
                if (!reg.test(value)) {
                    errors.push('Error in' + ' ' + f.label + ' ' + 'field ! (Must be a compatible with ' + ' ' + f.pattern + ' ' + 'pattern !');

                }
            }
        });



        //     if (firstNameEl.value.length === 0) {
        //         errors.push('Error in first name field !');
        //     }
        //     if (lastNameEl.value.length === 0) {
        //         errors.push('Error in last name field !');
        //     }
        //     if (streetEl.value.length === 0) {
        //         errors.push('Error in street name field !');
        //     }
        //     if (Number.isNaN(Number(houseNumberEl.value))) {
        //         errors.push('Error in house number field !');
        //     }
        //     if (Number.isNaN(Number(flatNumberEl.value))) {
        //         errors.push('Error in flat number field !');
        //     }
        //     if (!/[0-9]{2}-[0-9]{3}/.test(zipEl.value)) {
        //         errors.push('Error in zip number field !');
        //     }
        //     if (cityEl.value.length === 0) {
        //         errors.push('Error in city name field !');
        //     }
        //     if (voivodeshipEl.value.length === 0) {
        //         errors.push('Error in voivodeship name field !');
        //     }

        ulElement.innerHTML = '';
        if (errors.length === 0) {
            alert('All good, Thank you !');
        } else {
            errors.forEach(function (text) {
                const liElement = document.createElement('li');
                liElement.innerText = text;
                ulElement.appendChild(liElement);
                console.log(text)

            });
        }
        console.log(errors);


    }
}

