const formEl = document.querySelector('form');
const ulEl = document.querySelector('.messages');

formEl.addEventListener('submit', checkData)
function checkData(e) {
    e.preventDefault();
    const self = e.target.elements;
    const firstName = self.firstName.value;
    const lastName = self.lastName.value;
    const street = self.street.value;
    const houseNumber = self.houseNumber.value;
    const zipCode = self.zip;
    const city = self.city.value;
    const voivodeship = self.voivodeship.value;

    const errors = [];

    if(firstName.length === 0) {
        errors.push('Proszę podać imię!');
    }

    if(lastName.length === 0) {
        errors.push('Proszę podać nazwisko!');
    }

    if(street.length === 0) {
        errors.push('Proszę podać ulicę!');
    }

    if(houseNumber.length === 0 || houseNumber === "0") {
        errors.push('Proszę podać numer domu!');
    }

    if(!zipCode.value.match(zipCode.pattern)) {
        errors.push('Proszę podać prawidłowy kod pocztowy')
    }

    if(city.length === 0) {
        errors.push('Proszę podać miasto!')
    }

    if(voivodeship === "") {
        errors.push('Proszę wybrać właściwe województwo z listy');
    }

    if(errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        errors.forEach(err => {
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulEl.appendChild(newLi);
        })
    } else {
        console.log('Wprowadzone dane są poprawne')
    }
}