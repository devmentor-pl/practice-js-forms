const messages = [];
const messagesList = document.querySelector(".messages");
const form = document.querySelector("form");
const inputName = document.querySelector(`input[name=firstName]`);
const inputSurname = document.querySelector(`input[name=lastName]`);
const inputStreet = document.querySelector('input[name=street]');
const inputHouseNumber = document.querySelector(`input[name=houseNumber]`);
const inputFlatNumber = document.querySelector(`input[name=flatNumber]`);
const inputPostCode = document.querySelector('input[name=zip');
const inputCity = document.querySelector('input[name=city]');
const inputSelectRegion = document.querySelector(`select[name=voivodeship]`);
const inputZip = document.querySelector("input[name=zip");

function addMessage(message) {
    messages.push(message);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    messages.length = 0;
    messagesList.innerHTML = "";

    if (inputName.value.trim() === "") {
        addMessage("Wpisz imie w formularzu");
    };

    if (inputSurname.value.trim() === "") {
        addMessage("Wpisz Nazwisko w formularzu");
    };

    if (inputStreet.value.trim() === "") {
        addMessage("Wpisz ulicę");
    };

    if (inputHouseNumber.value.trim() === "") {
        addMessage("Wpisz numer budynku");
    };

    if (isNaN(inputHouseNumber.value) || inputHouseNumber.value <= 0) {
        addMessage("Numer budynku musi być liczbą dodatnią");
    };

    if (isNaN(inputFlatNumber.value) || inputFlatNumber.value <= 0) {
        addMessage("Numer mieszkania musi być liczbą dodatnią");
    };

    if (!/^\d{2}-\d{3}$/.test(inputZip.value)) {
        addMessage("Wpisz poprawny kod pocztowy w formacie XX-XXX.");
    };

    if (inputCity.value.trim() === "") {
        addMessage("Wpisz nazwe miasta");
    };

    if (inputSelectRegion.value === "") {
        addMessage("Wybierz wojewódzctwo");
    };

    if (messages.length !== 0) {
        messages.forEach(message => {
            const li = document.createElement("li");
            li.textContent = message;
            messagesList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "Formularz został wypełniony poprawnie";
        messagesList.appendChild(li);
        form.reset();
    };
});

// Tym razem Twoim zadaniem jest obsługa formularza, w którym użytkownik wprowadza dane adresowe.

// Na podstawie kodu HTML oceń, jaka walidacja powinna zostać wykonana na poziomie JS (pamiętaj o tagu `novalidate`).

// W przypadku błędów dodaj stosowane komunikaty do elementu `.messages`.

// Gdy formularz zostanie wypełniony poprawnie, poinformuj użytkownika, że dane zostały wysłane prawidłowo.

// ## Wyrażenia regularne (regex)

// W pliku `index.html` pojawia się wyrażenie regularne (atrybut `pattern` dla pola kodu pocztowego). Jeśli chcesz zgłębić temat wyrażeń regularnych, to zapraszam Cię do obejrzenia [tego nagrania](https://www.youtube.com/watch?v=rhzKDrUiJVk).