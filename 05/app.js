document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('form');
    const ulEl = document.querySelector('ul')

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const firstNameEl = formEl.elements.firstName;
        const lastNameEl = formEl.elements.lastName;
        const streetEl = formEl.elements.street;
        const houseNumberEl = formEl.elements.houseNumber;
        const flatNumberEl = formEl.elements.flatNumber;
        const zipEl = formEl.elements.zip;
        const cityEl = formEl.elements.city;
        const voivodeshipEl = formEl.elements.voivodeship;

        const errors = [];

        if (firstNameEl.value.length === 0) {
            errors.push('Dane w polu imie jest niepoprawne')
        }

        if (lastNameEl.value.length === 0) {
            errors.push('Dane w polu nazwisko jest niepoprawne')
        }

        if (streetEl.value.length === 0) {
            errors.push('Dane w polu ulica jest niepoprawne')
        }

        if (Number.isNaN(Number(houseNumberEl.value))) {
            errors.push('Dane w polu house jest niepoprawne')
        }

        if (Number.isNaN(Number(flatNumberEl.value))) {
            errors.push('Dane w polu flat jest niepoprawne')
        }

        if (!/[0-9]{2}-[0-9]{3}/.test(zipEl.value)) {
            errors.push('Dane w polu zip jest niepoprawne')

        }

        if (cityEl.value.length === 0) {
            errors.push('Dane w polu city jest niepoprawne')
        }

        if (voivodeshipEl.value.length === 0) {
            errors.push('Dane w polu wojewodztwa jest niepoprawne')
        }
        ulEl.innerHTML = '';
        if (errors.length === 0) {
            alert('dane zostały wysłane')
        } else {

            errors.forEach(function (text) {
                const liEl = document.createElement('li');
                liEl.innerText = text;

                ulEl.appendChild(liEl)
            })
        }
    }
}