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
}


const nameEl = formEl.elements.firstName;
const lastNAmeEl = formEl.elements.lastName;
const streetEl = formEl.elements.streetName;