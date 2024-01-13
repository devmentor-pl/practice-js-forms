//second version of my code 
const form = document.querySelector("form");
form.addEventListener("submit", register);

function register(e) {
    e.preventDefault();
    const emailEl = document.querySelector('input[name="login"]');
    const pass1El = document.querySelector('input[name="pass1"]');
    const pass2El = document.querySelector('input[name="pass2"]');
    const checkedEl = document.querySelector('input[name="accept"]');
    const labelList = document.querySelectorAll("label");
    const errors = [];

    // Sprawdzenie poprawności adresu e-mail
    const emailElValue = emailEl.value;
    if (!isValidEmail(emailElValue)) {
        errors.push(emailEl);
    }

    // Sprawdzenie zgodności haseł
    const pass1ElValue = pass1El.value;
    const pass2ElValue = pass2El.value;
    if (pass1ElValue !== pass2ElValue || pass1ElValue.length <= 6 || pass2ElValue.length <= 6) {
        errors.push(pass1El, pass2El);
    }

    // Sprawdzenie zaakceptowania regulaminu
    if (!checkedEl.checked) {
        errors.push(checkedEl);
    }

    // Resetowanie kolorów labeli
    labelList.forEach(function (label) {
        label.style.color = "black";
    });

    // Obsługa błędów
    if (errors.length === 0) {
        console.log("done");
    } else {
        // Zaznaczanie na czerwono elementów z błędem
        errors.forEach(function (error) {
            const correspondingLabel = error.previousElementSibling;
            if (correspondingLabel.tagName === "LABEL") {
                correspondingLabel.style.color = "red";
            }
        });
    }
}

// Funkcja sprawdzająca poprawność adresu e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/* First version of my code:
const form = document.querySelector('form');
form.addEventListener("submit", register);

function register(e) {
    e.preventDefault();
    const emailEl = document.querySelector('input[name="login"]');
    const pass1El = document.querySelector('input[name="pass1"]');
    const pass2El = document.querySelector('input[name="pass2"]');
    const emailElValue = document.querySelector('input[name="login"]').value;
    const pass1ElValue = document.querySelector('input[name="pass1"]').value;
    const pass2ElValue = document.querySelector('input[name="pass2"]').value;
    const checkedEl = document.querySelector('input[name="accept"]');
    const labelList = document.querySelector("label");
    const errors = [];

    if (!emailElValue.includes("@")) {
        errors.push(emailEl);
    }

    if (pass1ElValue !== pass2ElValue) {
        errors.push(pass1El, pass2El);
    }

    if (pass1ElValue.length <= 6 || pass2ElValue.length <= 6) {
        errors.push(pass1El, pass2El);
    }

    if (!checkedEl.checked) {
        errors.push(checkedEl);
    }

    labelList.forEach(function (label) {
        label.style.color = "black";
    });

    if (errors.length === 0) {
        console.log("done");
    } else {
        errors.forEach(function (error) {
            error.previousElementSibling.style.color = "red";
        });
    }


}
*/