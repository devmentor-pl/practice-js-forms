document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', isValid)
    };
};

function isValid(e) {
    const ulElement = document.querySelector('.messages');
    clearErrors(ulElement);
    e.preventDefault();
    const [name, surename, street, buldingNum, flatNum, postcode, town, voivodship] = this.elements;
    isValidInput(name,surename,street,town);
    isValidNumber(buldingNum, flatNum);
    isValidPostcode(postcode);
    isCheckedVoivodship(voivodship);

    (ulElement.children.length === 0) && validationSuccessful();
};

function validationSuccessful() {
    alert('Form successful!');
};

function error(errorMessage) {
    const ulElement = document.querySelector('.messages');
        const liElement = document.createElement('li');
        liElement.textContent = `${errorMessage}`;
        liElement.style.color = 'red';
        ulElement.appendChild(liElement);
};

function clearErrors(errorsContener) {
    errorsContener.innerHTML = '';
};

function isValidInput(...userNameInputArr) {
    const regExp = /^[A-Za-z]{3,}$/;
    userNameInputArr.forEach(function (el) {
        return regExp.test(el.value) || error(`${el.parentElement.textContent} should have min. 3 characters contain only letters.`);
    });
};

function isValidNumber(...userNameInput) {
    const regExp = /^[1-9]{1,3}/;
    userNameInput.forEach(function (el) {
        return regExp.test(el.value) || error(`${el.parentElement.textContent} should contains numbers.`);
    })
};

function isValidPostcode(userNameInput) {
    const regExp = /[0-9]{2}-[0-9]{3}$/;
    regExp.test(userNameInput.value) || error(`Fallow pattern with contains just numbers XX-XXX`);
};

function isCheckedVoivodship(userNameInput) {
    userNameInput.selectedIndex !== 0 || error(`Please choose the voivodeship.`);
};