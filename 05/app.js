document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('ul');

    if(formEl) {
        formEl.addEventListener('submit', handleSubmit);
    }


    function handleSubmit(e) {
        e.preventDefault();

        const fields = [
            {name: 'firstName', label: 'Imię', required: true},
            {name: 'lastName', label: 'Nazwisko', required: true},
            {name: 'street', label: 'ulica', required: true},
            {name: 'houseNumber', label: 'Number budynku', type: 'number', required: true},
            {name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: true},
            {name: 'zip', label: 'Kod pocztowy', pattern: "[0-9]{2}-[0-9]{3}", required: true}, 
            // lepiej -> pattern: "^[0-9]{2}-[0-9]{3}$" - aby tylko występowały zdefiniowane elementy,
            {name: 'city', label: 'Miasto', required: true},
            {name: 'voivodeship', label: 'Województwo', required: true},
        ]

        const errors = [];

        fields.forEach(function(f) {
            const value = formEl.elements[f.name].value;

            if(f.required) {
                if(value.length === 0) {
                    errors.push('Dane w polu '+ f.label +' są niepoprawne!');
                }
            }

            if(f.type === 'number') {
                if(Number.isNaN(Number(value))) {
                    errors.push('Dane w polu '+ f.label +' muszą być liczbą!');
                }
            }

            if(f.pattern) {
                const reg = new RegExp(f.pattern)
                // błędnie (było): if(!reg.test(zipEl.value)) {
                // poprawnie
                if(!reg.test(value)) {
                    errors.push('Dane w polu '+ f.label +' muszą być zgodne ze wzorem:'+f.pattern);
                }
            }
        })

        // if(firstNameEl.value.length === 0) {
        //     errors.push('Dane w polu imię jest niepoprawne!');
        // }

        // if(lastNameEl.value.length === 0) {
        //     errors.push('Dane w polu nazwisko jest niepoprawne!');
        // }

        // if(streetEl.value.length === 0) {
        //     errors.push('Dane w polu street jest niepoprawne!');
        // }

        // if(Number.isNaN(Number(houseNumberEl.value))) {
        //     errors.push('Dane w polu nubmer budynku są niepoprawne!');
        // }

        // if(Number.isNaN(Number(flatNumberEl.value))) {
        //     errors.push('Dane w polu nubmer mieszkania są niepoprawne!');
        // }

        // if(!/[0-9]{2}-[0-9]{3}/.test(zipEl.value)) {
        //     errors.push('Dane w polu kod pocztywy są niepoprawne!');
        // }

        // if(cityEl.value.length === 0) {
        //     errors.push('Dane w polu miasto jest niepoprawne!');
        // }

        // if(voivodeshipEl.value.length === 0) {
        //     errors.push('Dane w polu województwo jest niepoprawne!');
        // }

        ulEl.innerHTML = '';
        if(errors.length === 0) {
            alert('Dane zostały wysłane prawidłowo!');
        } else {
            errors.forEach(function(text) {
                const liEl = document.createElement('li');
                liEl.innerText = text;

                ulEl.appendChild(liEl);
            })
        }

    }
}