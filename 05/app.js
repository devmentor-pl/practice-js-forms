document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('form');
    form.setAttribute("novalidate", true);
    form.addEventListener('submit', validate);
}

function validate(e) {
    const ul = document.querySelector('ul');
    ul.innerHTML = "";

    e.preventDefault();

    const firstNameInput = document.getElementsByName('firstName')[0];
    const lastNameInput = document.getElementsByName('lastName')[0];
    const streetInput = document.getElementsByName('street')[0];
    const cityInput = document.getElementsByName('city')[0];
    const voivodeshipInput = document.getElementsByName('voivodeship')[0];

    const houseNumberInput = document.getElementsByName('houseNumber')[0];
    const flatNumberInput = document.getElementsByName('flatNumber')[0];

    const zipInput = document.getElementsByName('zip')[0];

    const validatedNames = validateNames([firstNameInput, lastNameInput, streetInput, cityInput, voivodeshipInput]);
    const validatedNumbers = validateNumbers([houseNumberInput, flatNumberInput]);
    const validatedZip = validateZip(zipInput);

    if (validatedNames && validatedNumbers && validatedZip) {
        const li = document.createElement('li');
        li.textContent = "Dane przesłane poprawnie.";
        ul.appendChild(li)
    }
}

function validateNames(nameInputs) {
    let errorsNum = 0;
    nameInputs.forEach(nameInput => {
        const name = nameInput.value;
        
        if (name.length < 3) {
            showError(nameInput);
            errorsNum++;
        } 
    })

    if (!errorsNum) {
        return true;
    }
}

function validateNumbers(numberInputs) {
    let errorsNum = 0;
    numberInputs.forEach(numberInput => {
        const number = numberInput.value;

        if (!number || Number(number) < 0) {
            showError(numberInput);
            errorsNum++;
        } 
    })

    if (!errorsNum) {
        return true;
    }
}

function validateZip(zipInput) {
    const zip = zipInput.value;
    const reg = /[0-9]{2}-[0-9]{3}/;

    if (!reg.test(zip)) {
        showError(zipInput);
    } else {
        return true;
    }
}

function showError(input) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    if (input.name === "firstName" || input.name === "lastName" || input.name === "street" || input.name === "city") {
        li.textContent = `Pole: "${input.parentElement.textContent}" musi być wypełnione i musi mieć minimum 3 znaki.`;
    } else if (input.name === "houseNumber" || input.name === "flatNumber" ) {
        li.textContent = `Pole: "${input.parentElement.textContent}" musi być wypełnione i musi być liczbą niemniejszą od 0.`;
    } else if (input.name === "zip") {
        li.textContent = `Pole: "${input.parentElement.textContent}" musi być wypełnione w formacie 00-000.`;
    } else {
        li.textContent = `Pole: "${input.parentElement.childNodes[0].textContent}" musi być wypełnione - wybierz jedną z opcji`;
    }
    ul.appendChild(li);
}