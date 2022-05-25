const formElement = document.querySelector('form');
formElement.noValidate = true;

const messages = document.querySelector('.messages');
console.log(messages);

const firstNameInput = document.querySelector('input[name=firstName]');
console.log(firstNameInput);


const lastNameInput = document.querySelector('input[name=lastName]');
console.log(lastNameInput);

const streetInput = document.querySelector('input[name=street]');
console.log(streetInput);

const houseNumberInput = document.querySelector('input[name=houseNumber]');
console.log(houseNumberInput);

const flatNumberInput = document.querySelector('input[name=flatNumber]');
console.log(flatNumberInput);

const zipInput = document.querySelector('input[name=zip]');
console.log(zipInput);

const cityInput = document.querySelector('input[name=city]');
console.log(cityInput);

const voivodeshipInput = document.querySelector('select[name=voivodeship]');
console.log(voivodeshipInput);





formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const messagesList = messages.querySelectorAll('li');
    messagesList.forEach(function (element) {
        messages.removeChild(element);
    });

    checkEmptyInputs(firstNameInput);
    checkEmptyInputs(lastNameInput);
    checkEmptyInputs(streetInput);
    checkEmptyInputs(houseNumberInput);
    checkEmptyInputs(zipInput);
    checkEmptyInputs(cityInput);
    checkEmptyInputs(voivodeshipInput);


    firstCharacter(firstNameInput);
    firstCharacter(lastNameInput);
    firstCharacter(streetInput);
    firstCharacter(cityInput);


    checkNumber(houseNumberInput);
    checkNumber(flatNumberInput);

    checkTypeValue(zipInput);


    if (messages.children.length === 0) {
        const newLi = document.createElement('li');
        newLi.innerText = 'Wszystko zostało poprawnie wypełnione!';
        messages.appendChild(newLi);
        messages.firstChild.style.color = 'green';
    }

});



function checkEmptyInputs(element) {
    if (element.value === '') {
        const inputName = element.name;
        const newLi = document.createElement('li');
        const label = element.parentElement.innerText;

        if (inputName === 'voivodeship') {
            newLi.innerText = 'Pole: Województwo - nie może być puste!';
            messages.appendChild(newLi);

            redColorMessage();
        }
        else {
            newLi.innerText = 'Pole: ' + label + '- nie może być puste!';
            messages.appendChild(newLi);

            redColorMessage();
        }
    }
}




function firstCharacter(element) {
    const inputValue = element.value;
    const label = element.parentElement.innerText;
    const firstChar = inputValue.slice(0, 1);
    const newLi = document.createElement('li');

    if (firstChar === firstChar.toUpperCase(true)) {

    }
    else {
        newLi.innerText = 'W polu: ' + label + '- wartość powinna zaczynać się z dużej litery!';
        messages.appendChild(newLi);

        redColorMessage();
    }
}



function checkNumber(element) {
    const inputValue = element.value;
    const label = element.parentElement.innerText;
    const newLi = document.createElement('li');

    if (inputValue === '') {

    }
    else {
        if (inputValue <= 0) {
            newLi.innerText = 'W polu: ' + label + '- wartość powinna być większa od zera!';
            messages.appendChild(newLi);

            redColorMessage();
        }
    }
}



function checkTypeValue(element) {
    const inputValue = element.value;
    const inputNumber = Number(inputValue);
    const label = element.parentElement.innerText;
    const newLi = document.createElement('li');


    if (isNaN(inputNumber)) {

        newLi.innerText = 'W polu: ' + label + '- wpisz tylko liczby!';
        messages.appendChild(newLi);

        redColorMessage();
    }

}




function redColorMessage() {
    const liElementsList = messages.querySelectorAll('li');
    liElementsList.forEach(function (element) {
        element.style.color = 'red';
    })
}


