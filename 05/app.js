document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('05 FORMS');
}

const formEl = document.querySelector('form');
if(formEl) {
    formEl.addEventListener('submit', stopSubmit);
}


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

if(nameEl.value.lenght === 0) {
    errors.push('Error');
}

if(lastNameEl.value.lenght === 0) {
    errors.push('Error Last');
}

if(streetEl.value.lenght === 0) {
    errors.push('Error Street ');
}

if(houseNr.value.lenght === 0) {
    errors.push('Error House ');
}

if(flatNr.value.lenght === 0) {
    errors.push('Error Flat ');
}

if(zipNr.value.lenght === 0) {
    errors.push('Error Zip ');
}

if(cityName.value.lenght === 0) {
    errors.push('Error City ');
}

if(voivodeshipName.value.lenght === 0) {
    errors.push('Error voivodeship ');
}

console.log(errors);
};

