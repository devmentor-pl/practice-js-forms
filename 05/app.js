document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('form');
    const errors = [];
    form.setAttribute('novalidate', true)
    form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = Number(e.target.elements.houseNumber.value);
    const flatNumber = Number(e.target.elements.flatNumber.value);
    const zip = e.target.elements.zip.value;
    const zipPattern = e.target.elements.zip.pattern;
    const voivodeship = e.target.voivodeship.value;

    if(!firstName) {
        errors.push('Prosze podac imie.')
    }
    if(!lastName) {
        errors.push('Prosze podac nazwisko.')
    }
    if(!street) {
        errors.push('Prosze podac ulice.')
    }
    if(!houseNumber) {
        errors.push('Prosze podac numer domu.')
    }
    if(!flatNumber) {
        errors.push('Prosze podac numer mieszkania.')
    }
    if(!zip || zip !== zipPattern) {
        errors.push('Prosze podac kod pocztowy o formacie: 00-950.')
    }
    if(!voivodeship) {
        errors.push('Prosze wybrac wojewodztwo.')
    }
    errors.forEach(err => {
        console.log(err);
        const messages = document.querySelector('.messages');
        const info = document.createElement('li');
        info.innerText = err;
        messages.appendChild(info);
    })
    })
}