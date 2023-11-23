document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.querySelector("form");
    const ulEl = document.querySelector("ul");
    formEl.addEventListener("submit", function (e) {
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
            errors.push("Błędne dane w polu imię");
        }
        if (lastNameEl.value.length === 0) {
            errors.push("Błędne dane w polu nazwisko");
        }
        if (streetEl.value.length === 0) {
            errors.push("Błędne dane w polu ulica");
        }
        if (Number.isNaN(Number(houseNumberEl.value))) {
            errors.push("Błędne dane w polu numer domu");
        }
        if (Number.isNaN(Number(flatNumberEl.value))) {
            errors.push("Błędne dane w polu numer mieszkania");
        }
        if (!/[0-9]{2}-[0-9]{3}/.test(zipEl.value)) {
            errors.push("Błędne dane w polu kod pocztowy");
        }
        if (cityEl.value.length === 0) {
            errors.push("Błędne dane w polu miasto");
        }
        if (voivodeshipEl.value.length === 0) {
            errors.push("Błędne dane w polu województwo");
        }
        ulEl.innerHTML = "";
        if (errors.length === 0) {
            alert("Dane wysłane");
        } else {
            errors.forEach(function (text) {
                const liEl = document.createElement("li");
                liEl.innerText = text;

                ulEl.appendChild(liEl);
            });
        }

        console.log(errors);
    });
});
