const ulEl = document.querySelector('.messages');
const formEl = document.querySelector('form');
formEl.noValidate = true;
let errors = [];

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    ulEl.innerHTML = '';
    const formElList = e.target.elements;
    const nameInput = formElList.firstName;
    validateString(nameInput);
    const surnameInput = formElList.lastName;
    validateString(surnameInput);
    const streetInput = formElList.street;
    validateString(streetInput);
    const houseNumInput = formElList.houseNumber;
    validateHouseNum(houseNumInput);
    const flatNumInput = formElList.flatNumber;
    validateFlatNum(flatNumInput);
    const zipcodeInput = formElList.zip;
    validateZipcode(zipcodeInput);
    const cityInput = formElList.city;
    validateString(cityInput);
    const voivodeshipInput = formElList.voivodeship;
    validateVoivodeship(voivodeshipInput);
    errors.length > 0 ? showErrors() : showSuccesMessage();
}

function validateString(input) {
    const inputValue = input.value;
    const inputLabel = input.parentElement;
    const regexString = /^[a-zA-Z]{3,}(?:(-| )[a-zA-Z]+){0,1}$/;
    const isValid = isMatchRegex(regexString, inputValue);
    validateData(isValid, inputLabel);
}

function validateZipcode(zipcodeInput) {
    const zipcode = zipcodeInput.value;
    const zipcodeLabel = zipcodeInput.parentElement;
    const regexZipcode = /^[0-9]{2}-[0-9]{3}$/;
    const isValid = isMatchRegex(regexZipcode, zipcode);
    validateData(isValid, zipcodeLabel);
}

function validateNum(numInput) {
    const num = numInput.value;
    const regexNum = /^[0-9]{1,3}[a-zA-Z]{0,1}$/;
    return isMatchRegex(regexNum, num);
}

function validateHouseNum(numInput) {
    const houseNumLabel = numInput.parentElement;
    const isValid = validateNum(numInput);
    validateData(isValid, houseNumLabel);
}

function validateFlatNum(numInput) {
    const flatNumLabel = numInput.parentElement;
    const isValid = validateNum(numInput) || numInput.value.length === 0;
    validateData(isValid, flatNumLabel);
}

function validateVoivodeship(voivodeshipInput) {
    const voivodeship = voivodeshipInput.value;
    const voivodeshipLabel = voivodeshipInput.parentElement;
    const isValid = voivodeship.length !== 0;
    validateData(isValid, voivodeshipLabel);
}

function isMatchRegex(regex, testValue) {
    return regex.test(testValue);
}

function validateData(isValid, label) {
    isValid ? label.style.color = 'green' : createError(label);
}

function createError(label) {
    errors.push(label);
    createErrMsg(label);
}

function createErrMsg(label) {
    const newLi = document.createElement('li');
    const labelName = setLabelName(label);
    newLi.innerText = `Proszę poprawnie uzupełnić pole: ${labelName}`;
    ulEl.appendChild(newLi);
}

function setLabelName(label) {
    return label.firstElementChild.tagName === 'SELECT' ? label.innerText.split(' ')[0] : label.innerText;
}

function showErrors() {
    errors.forEach(err => {
        err.style.color = 'red';
    });
    errors = [];
}

function showSuccesMessage() {
    const newLi = document.createElement('li');
    newLi.innerText = 'Sukces - wszystkie pola zostały prawidłowo wypełnione :)';
    ulEl.appendChild(newLi);
}
