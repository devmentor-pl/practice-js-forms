const formEl = document.querySelector('form')
const msgList = document.querySelector('.messages');
const submit = document.querySelector('input[type="submit"]')
formEl.setAttribute('novalidate', true)

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    validateInfo(e);
})

function validateInfo(e) {

    const errors = [];
    const firstName = e.target.elements.firstName.value.trim();
    const lastName = e.target.elements.lastName.value.trim();
    const street = e.target.elements.street.value.trim();
    const houseNumber = e.target.elements.houseNumber.value.trim();
    const flatNumber = e.target.elements.flatNumber.value.trim();
    const zipCode = e.target.elements.zip.value.trim();
    const city = e.target.elements.city.value.trim();
    const region = e.target.elements.voivodeship.value.trim();

    if(firstName === '') {
        addError(errors, firstName);
    }
}


function checkNames(name) {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)) {
        addError(errorsArray, name)
    } 
}

function addError(array, inputEl) {
    const labelContent = inputEl.parentElement.textContent;
    const errorMsg = `${labelContent} is required`;
    array.push(errorMsg)
}

function displayErrors(element, error) {
    const liElement = document.createElement('li');
    liElement.textContent = error;
    element.appendChild(liElement)
}

function displaySuccess(element) {
    const liElement = document.createElement('li');
    liElement.textContent = 'Form submitted successfully!';
    element.appendChild(liElement);
}

