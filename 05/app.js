const fields = [{
    name: 'firstName',
    label: 'Imię',
    isReguired: true,
    pattern: '^[A-Za-z]{3,}$',
}, {
    name: 'lastName',
    label: 'Nazwisko',
    isReguired: true,
    pattern: '^[A-Za-z]{3,}$',
}, {
    name: 'street',
    label: 'Ulica',
    isReguired: true,
    pattern: '^[A-Za-z]{3,}$',
}, {
    name: 'houseNumber',
    label: 'Numer budynku',
    type:'number',
    isRequired: true,
    pattern: '^[1-9]{1,3}',
}, {
    name: 'flatNumber',
    label: 'Numer mieszkania',
    type:'number',
    pattern: '^[1-9]{1,3}',
}, {
    name: 'zip',
    label: 'Kod pocztowy',
    type:'number',
    isRequired: true,
    pattern: '^[0-9]{2}-[0-9]{3}$',
}, {
    name: 'city',
    label: 'Miejscowość',
    isRequired: true,
    }, {
    name: 'voivodeship',
    label: 'Województwo',
    isRequired: true,
}
];

const form = document.querySelector('form');

document.addEventListener('DOMContentLoaded', init);

function init() {
    if (form) {
        form.addEventListener('submit', isValid);
    };
};

function isValid(e) {
    e.preventDefault();
    const ulErrorsList = document.querySelector('.messages');
    ulErrorsList.innerHTML = '';
    const errors = [];

    fields.forEach(function (el) {
        const { name, label,type = 'text', isRequired, pattern} = el;
        const value = form.elements[name].value;

        if (isRequired) {
            if (value === '') {
                errors.push(`${label} - This input can't be empty.`);
            };
        };
        if (type === 'number') {
            if (Number.isNaN(Number(value))) {
                errors.push(`${label} - This input has to be number`);
            };
        };
        if (pattern) {
            const reg = new RegExp(pattern);
            if (!reg.test(value)) {
                errors.push(`${label} - This value has to be written by the pattern or is not equal with country where you are.`);
            };
        };
    });
    console.log(errors);
    if (errors.length === 0) {
        alert('Form succesfull!');
        fields.forEach(function (el) {
            form.elements[el.name].value = '';
        });
    } else {
        errors.forEach(function (el) {
            const liErrorValue = document.createElement('li');
            liErrorValue.style.color = 'red';
            liErrorValue.textContent = el;
            return ulErrorsList.appendChild(liErrorValue);
        });
    };
};
// WORKING AS WELL!
// function isValid(e) {
//     const ulElement = document.querySelector('.messages');
//     clearErrors(ulElement);
//     e.preventDefault();
//     const [name, surename, street, buldingNum, flatNum, postcode, town, voivodship] = this.elements;
//     isValidInput(name,surename,street,town);
//     isValidNumber(buldingNum, flatNum);
//     isValidPostcode(postcode);
//     isCheckedVoivodship(voivodship);

//     (ulElement.children.length === 0) && validationSuccessful();
// };

// function validationSuccessful() {
//     alert('Form successful!');
// };

// function error(errorMessage) {
//     const ulElement = document.querySelector('.messages');
//         const liElement = document.createElement('li');
//         liElement.textContent = `${errorMessage}`;
//         liElement.style.color = 'red';
//         ulElement.appendChild(liElement);
// };

// function clearErrors(errorsContener) {
//     errorsContener.innerHTML = '';
// };

// function isValidInput(...userNameInputArr) {
//     const regExp = /^[A-Za-z]{3,}$/;
//     userNameInputArr.forEach(function (el) {
//         return regExp.test(el.value) || error(`${el.parentElement.textContent} should have min. 3 characters contain only letters.`);
//     });
// };

// function isValidNumber(...userNameInput) {
//     const regExp = /^[1-9]{1,3}/;
//     userNameInput.forEach(function (el) {
//         return regExp.test(el.value) || error(`${el.parentElement.textContent} should contains numbers.`);
//     })
// };

// function isValidPostcode(userNameInput) {
//     const regExp = /[0-9]{2}-[0-9]{3}$/;
//     regExp.test(userNameInput.value) || error(`Fallow pattern with contains just numbers XX-XXX`);
// };

// function isCheckedVoivodship(userNameInput) {
//     userNameInput.selectedIndex !== 0 || error(`Please choose the voivodeship.`);
// };