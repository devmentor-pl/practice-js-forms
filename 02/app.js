const errors = [];

const form = document.querySelector("form");
const email = document.querySelector("#formLogin");
const formPass = document.querySelector("#formPass1");
const formPass1 = document.querySelector("#formPass2");
const formAccept = document.querySelector("#formAccept");

form.addEventListener("submit", (event) => {
    errors.length = 0;
    markErrors()
    event.preventDefault();
    console.log("formularz zaorany");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        errors.push("#formLogin");
        console.log("małpy brak");
        console.log(errors);
    };

    if (formPass.value !== formPass1.value || formPass.value.length < 6 || formPass1.value.length < 6) {
        if (formPass.value !== formPass1.value) {
            console.log("Hasła nie są takie same");
            errors.push("#formPass1");
            errors.push("#formPass2");

        };

        if (formPass.value.length < 6 || formPass1.value.length < 6) {
            console.log("Hasła muszą mieć co najmniej 6 znaków");
            errors.push("#formPass1");
            errors.push("#formPass2");
        };
    };

    if (!formAccept.checked) {
        console.log("Accept rules on register your acccount");
        errors.push("#formAccept");
    };
    if (errors.length === 0) {
        console.log("done");
        form.reset();
    }

    errors.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.borderColor = "red";
            if (selector === "#formAccept" && element.parentElement) {
                element.parentElement.style.color = "red";
            }
        }
    });
});

function markErrors() {
    [email, formPass, formPass1, formAccept].forEach((input) => {
        input.style.borderColor = "";
        if (input.parentElement) {
            input.parentElement.style.color = "";
        }
    });
}


// Tym razem nasz formularz to panel rejestracji do serwisu.

// Aby można było się zarejestrować, należy:
// - wprowadzić poprawny adres e-mail (sprawdź, czy adres zawiera znak @ lub użyj odpowiedniego [wyrażenia regularnego](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)),
// - podać dwa razy takie samo hasło (dla pewności, że użytkownik się nie pomylił), które jest dłuższe niż 6 znaków,
// - zaakceptować regulamin (sprawdź, czy checkbox został zaznaczony: `checked`).

// Jeśli warunki zostały spełnione, wyświetl w konsoli napis `done`. Jeśli nie – zaznacz na czerwono kolor fontu dla `<label>` przy błędnie wprowadzonych danych.

// Do rozwiązania problemu oznaczania błędnych elementów możesz użyć tablicy, która będzie przechowywać dane, tj. `const errors = []`. W momencie wystąpienia błędu dodasz do tej tablicy selektor pola, które zostało błędnie wypełnione. Na samym końcu wykonasz pętlę (`for` lub `forEach`), która zaznaczy elementy z błędem.