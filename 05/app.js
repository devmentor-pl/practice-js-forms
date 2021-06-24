
/* Tym razem Twoim zadaniem jest obsługa formularza, w którym użytkownik wprowadza dane adresowe.

Na podstawie kodu HTML musisz ocenić jaka walidacja powinna zostać obsłużona z poziomu JS (pamiętaj o tagu novalidate).

W przypadku błędów należy dodać stosowane komunikaty do elementu .messages.

Gdy wszystko przebiega prawidłowo, to należy poinformować użytkownika, że dane zostały wysłane prawidłowo.*/

const formEl = document.querySelector('form');
formEl.addEventListener('submit', checkForm);
formEl.noValidate = true;
const ulEl = document.querySelector('ul')
ulEl.classList.add('.messages');

function checkForm(e) {

    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const messages = [];



    if (firstName.length === 0) {
        messages.push("First name field is required");
    }


    if (lastName.length === 0) {
        messages.push("Last name field is required");
    }
    else {
        console.log('Ok!');
    }

    if (street.length === 0) {
        messages.push("Street field is required");
    }
    else {
        console.log('Ok!');
    }


    if (houseNumber.length === 0) {
        messages.push("House number field is required");
    }
    else {
        console.log('Ok!');
    }


    if (flatNumber.length === 0) {
        messages.push("Flat number field is required");
    }
    else {
        console.log('Ok!');
    }

    if (zip.length === 0) {
        messages.push("Zip field is required");
    }
    else {
        console.log('Ok!');
    }

    if (city.length === 0) {
        messages.push("City field is required");
    }
    else {
        console.log('Ok!');
    }


    const select = document.querySelector("select");
    //select.addEventListener('change', showOptionsInfo);
    //function showOptionsInfo(select) {
    if (select.value === "") {
        messages.push("Select the voivodeship");
    }
    //}


    if (messages.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        messages.forEach(function (messages) {
            const newLi = document.createElement('li');
            newLi.innerText = messages;
            ulEl.appendChild(newLi);
        })
    }

    else {
        console.log('Thank you for completing the form');
    }
}