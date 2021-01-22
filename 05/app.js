const ulList = document.querySelector('.messages');
const form = document.querySelector('form');
form.addEventListener('submit', checkData);

function checkData(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship;
    const errors = [];

    if (e.target.elements.length === 0) {
        errors.push('To pole jest wymagane')
    }
    if (!voivodeship.selected) {
        errors.push('Zaznacz województwo');
    }

    if (errors.length > 0) {
        // e.preventDefault();
        errors.forEach(function (err) {
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulList.appendChild(newLi);
        });
    }
}
