const form = document.querySelector('form');
const ulErrors = document.querySelector('.messages');

if (form) {
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e){
    e.preventDefault();
    ulErrors.innerHTML = '';

    const errorMessages = [];
    const fields = [
        {
            name: 'firstName',
            label: 'Imię',
            required: true,
        },
        {
            name: 'lastName',
            label: 'Nazwisko',
            required: true,
        },
        {
            name: 'street',
            label: 'Ulica',
            required: true,
        },
        {
            name: 'houseNumber',
            label: 'Numer budynku',
            required: true,
            type: 'number',
        },
        {
            name: 'flatNumber',
            label: 'Numer mieszkania',
            type: 'number',
        },
        {
            name: 'zip',
            label: 'Kod pocztowy',
            required: true,
            pattern: '[0-9]{2}-[0-9]{3}'
        },
        {
            name: 'city',
            label: 'Miejscowość',
            required: true,
        },
        {
            name: 'voivodeship',
            label: 'Województwo',
            required: true,
        },
        
    ]

    fields.forEach((field) => {
        const {name, label, required = false, type = 'text', pattern = null, minLength = null} = field;
        const value = form.elements[name].value;


        if (required){
            if(value.length === 0){
                errorMessages.push(`Dane w polu ${label} są wymagane!`);
            }
        }

        if (type === 'number'){
            if(Number.isNaN(Number(value))){
                errorMessages.push(`Dane w polu ${label} muszą być liczbą!`)
            }
        }

        if (pattern){
            const reg = new RegExp (`^${pattern}$`);
            if (!reg.test(value)){
                errorMessages.push(`Dane w polu ${label} nie są zgodne ze wzorem!`)
            }
        }
    });

    if (errorMessages.length === 0){
        alert('Data was filled correct. The form has been sent!')
    } else {
        errorMessages.forEach((msg) => {
            
            const newLi = document.createElement('li');
            newLi.innerText = msg;
            ulErrors.appendChild(newLi);
        })
    }


}



// const form = document.querySelector('form');
// const firstName = document.querySelector('input[name="firstName"]');
// const lastName = document.querySelector('input[name="lastName"]');
// const street = document.querySelector('input[name="street"]');
// const houseNumber = document.querySelector('input[name="houseNumber"]');
// const flatNumber = document.querySelector('input[name="flatNumber"]');
// const zip = document.querySelector('input[name="zip"]');
// const city = document.querySelector('input[name="city"]');
// const voivodeship = document.querySelector('select[name="voivodeship"]');
// const submit = document.querySelector('input[type="submit"]');
// const ulErrors = document.querySelector('.messages');

// const errorMessages = [];
// const namePattern = /^[a-ż]+$/i;
// const housePattern = /^[0-9]+[a-ż]*$/i;

// function validation(condition, errorMsg){

//     if(!condition){
//         errorMessages.push(errorMsg);
//     }
// }

// function handleSubmit(e){
    
//     e.preventDefault();
//     ulErrors.innerHTML = '';
//     errorMessages.length = 0;

//     validation(firstName.value.length >= 2, 'Given name is too short!');
//     validation(namePattern.test(firstName.value), `Given name can't contain digits!`);

//     validation(lastName.value.length >= 2, 'Given surname is too short!');
//     validation(namePattern.test(lastName.value), `Given name can't contain digits!`);

//     validation(street.value.length >= 2, 'Given street name is too short!');

//     validation(housePattern.test(houseNumber.value), 'House number has to contain number!');

//     validation((flatNumber.value.length === 0 || flatNumber.value >= 1), `Flat number can't be lower than 1`);

//     const zipPattern = new RegExp(`^${zip.getAttribute('pattern')}$`);
//     validation(zipPattern.test(zip.value), 'Given ZIP code format is invalid!')

//     validation(city.value.length >= 2, 'Given city name is too short!');

//     validation(voivodeship.value !== '', 'You must select a voivodeship!');

//     if (errorMessages.length > 0){

//         errorMessages.forEach((msg) => {
//             const newLi = document.createElement('li');
//             newLi.textContent = msg;
//             ulErrors.appendChild(newLi);
//         })
//     } else {
//         alert('Data was filled correct. The form has been sent!');
//     }

// }

// form.addEventListener('submit', handleSubmit);
