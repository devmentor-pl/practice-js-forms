document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('05 FORMS');
}

const formEl = document.querySelector('form');
if(formEl) {
    formEl.addEventListener('submit', stopSubmit);
}

const ulEl = document.querySelector('ul');


function stopSubmit(e) {
    e.preventDefault();

const nameEl = formEl.elements.firstName;
const lastNameEl = formEl.elements.lastName;
const streetEl = formEl.elements.street;
const houseNr = formEl.elements.houseNumber;
const flatNr = formEl.elements.flatNumber;
const zipNr = formEl.elements.zip;
const cityName = formEl.elements.city;
const voivodeshipName = formEl.elements.voivodeship;


const errors = [];


if(nameEl.value.length === 0) {
    errors.push('Dane w polu imienia są niepoprawne');
}

if(lastNameEl.value.length === 0) {
    errors.push('Dane w polu nazwiska są niepoprawne');
}

if(streetEl.value.length === 0) {
    errors.push('Dane w polu ulica są niepoprawne');
}

if(houseNr.value.length === 0) {
    errors.push('Dane w polu numer domu są niepoprawne');
}

if(flatNr.value.length === 0) {
    errors.push('Dane w polu numer piętra są niepoprawne');
}

if(zipNr.value.length === 0) {
    errors.push('Dane w polu kod pocztowy są niepoprawne');
}

if(cityName.value.length === 0) {
    errors.push('Dane w polu nazwa miasta są niepoprawne');
}

if(voivodeshipName.value.length === 0) {
    errors.push('Dane w polu województwo są niepoprawne');
}

console.log(errors);


if(errors.length === 0) {
    alert('Dane są poprawne');
} else {
    errors.forEach(function(text){
        const liEl = document.createElement('li');
        liEl.innerText = text;

        ulEl.appendChild(liEl);
    })
}
}
