const formEl = document.querySelector('form');
formEl.noValidate = true;
formEl.addEventListener('submit', validate);
const ulEl = formEl.firstElementChild;

function validate(e) {
    e.preventDefault(); 
    const nameInputValue = e.target.elements.firstName.value;
    const lastNameInputValue = e.target.elements.lastName.value;    
    const streetInputValue = e.target.elements.street.value;    
    const houseNumberInputValue = e.target.elements.houseNumber.value;    
    const flatNumberInputValue = e.target.elements.flatNumber.value;    
    const zipInputValue = e.target.elements.zip.value;    
    const cityInputValue = e.target.elements.city.value;    
    const voivodeshipInputValue = e.target.elements.voivodeship.value;    
    const namePattern = /^[A-Z]{1}[a-z]*$/;
    const streetAndCityPatern = /^[A-Z]{1}[a-z]*\s*[a-z]*\s*[a-z]*$/;
    const zipCodePatern = /[0-9]{2}-[0-9]{3}/;
    const cityPattern = /^[A-Z]{1}[a-z]+ ?[a-z]*[a-z]{1}$/;
    const nameCheck = namePattern.test(nameInputValue);
    const lastNameCheck = namePattern.test(lastNameInputValue);
    const streetCheck = streetAndCityPatern.test(streetInputValue);
    const zipCodeCheck = zipCodePatern.test(zipInputValue);
    const cityPatternCheck = cityPattern.test(cityInputValue);
    const houseNumberCheck = Math.sign(houseNumberInputValue);
    const flatNumberCheck = Math.sign(flatNumberInputValue);
    const errors = [];
    ulEl.innerHTML = '';
    
    if (!nameCheck) {
        errors.push('Name is not correct');
    }

    if (!lastNameCheck) {
        errors.push('Last name is not correct');
    }

    if (!streetCheck) {
        errors.push('Street name is not correct');
    }

    if (houseNumberCheck !== 1) {
        errors.push('House number is not correct');
    }

    if (flatNumberCheck !== 1) {
        errors.push('Flat number is not correct');
    }

    if (!zipCodeCheck) {
        errors.push('Zip code is not correct');
    }

    if (!cityPatternCheck) {
        errors.push('City name is not correct');
    }

    if (voivodeshipInputValue === '') {
        errors.push('Voivodeship name is not correct');
    }

    errors.forEach(function(el) {
        const liEl = document.createElement('li');
        liEl.innerText = el;
        ulEl.appendChild(liEl);
    });

    if (errors.length === 0) {
        alert('All details are correct');
    }
}


