document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('form');
    const messages = document.querySelector('.messages');

    form.setAttribute('novalidate', true);
    
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();

        const fields = [
            {name: 'firstName', label: 'Imie', required: true},
            {name: 'lastName', label: 'Nazwisko', required: true},
            {name: 'street', label: 'Ulica', required: true},
            {name: 'houseNumber', label: 'Numer budynku', type: 'number', required: true},
            {name: 'flatNumber', label: 'Numer mieszkania', type: 'number', required: false},
            {name: 'zip', label: 'Kod pocztowy', pattern: '[0-9]{2}-[0-9]{3}', required: true},
            {name: 'city', label: 'Miasto', required: true},
            {name: 'voivodeship', label: 'Wojewodztwo', required: true},
        ]

        const errors = [];

        fields.forEach(function (f) {
            const value = form.elements[f.name].value;
            if(f.required){
                if(value.length === 0) {
                    errors.push(`Pole ${f.label} wypelniono nieprawidlowo.`);
                }
            }
            if(f.type === 'number'){
                if(Number.isNaN(Number(value))){
                    errors.push(`Dane w polu ${f.label} musza byc liczba.`);
                }
            }
            if(f.pattern){
                const reg = new RegExp(f.pattern);
                if(!reg.test(value)){
                    errors.push(`Dane w polu ${f.label} musza byc podane w formacie 99-999.`);
                }
            }
        })

        // const firstName = form.elements.firstName;
        // const lastName = form.elements.lastName;
        // const street = form.elements.street;
        // const houseNumber = form.elements.houseNumber;
        // const flatNumber = form.elements.flatNumber;
        // const zip = form.elements.zip;
        // const city = form.elements.city;
        // const voivodeship = form.voivodeship;

        // if(firstName.value.length === 0) {
        //     errors.push('Prosze podac imie.')
        // }
        // if(lastName.value.length === 0) {
        //     errors.push('Prosze podac nazwisko.')
        // }
        // if(street.value.length === 0) {
        //     errors.push('Prosze podac ulice.')
        // }
        // if(Number.isNaN(Number(houseNumber.value))) {
        //     errors.push('Prosze podac numer domu.')
        // }
        // if(Number.isNaN(Number(flatNumber.value))) {
        //     errors.push('Prosze podac numer mieszkania.')
        // }
        // if(!/[0-9]{2}-[0-9]{3}/.test(zip.value)) {
        //     errors.push('Prosze podac kod pocztowy o formacie: 00-950.')
        // }
        // if(city.value.length === 0) {
        //     errors.push('Prosze wpisac miasto.')
        // }
        // if(voivodeship.value.length === 0) {
        //     errors.push('Prosze wybrac wojewodztwo.')
        // }

        messages.innerHTML = '';
        if(errors.length === 0) {
            alert('Twoje dane zostaly wyslane prawidlowo.')
        } else {
            errors.forEach(err => {
            const info = document.createElement('li');
            info.innerText = err;
            messages.appendChild(info);
            })
        }    
    }
}