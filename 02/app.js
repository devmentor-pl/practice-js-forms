document.addEventListener("DOMContentLoaded", function () {
    const formE1 = document.querySelector("form");
    const labelEl = document.querySelectorAll("label");
    formE1.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("submit");
        const loginEl = e.target.elements.login;

        const pass1El = e.target.elements.pass1;

        const pass2El = e.target.elements.pass2;

        const acceptEl = e.target.elements.accept;

        const errors = [];
        if (!loginEl.value.includes("@")) {
            errors.push(loginEl.previousElementSibling);
        }
        if (pass1El.value !== pass2El.value || pass1El.value.length <= 6) {
            errors.push(pass1El.previousElementSibling);
            errors.push(pass2El.previousElementSibling);
        }

        labelEl.forEach(function (element, indeks, array) {
            element.style.color = "";
        });

        if (!acceptEl.checked) {
            errors.push(acceptEl.previousElementSibling);
        }

        if (errors.length === 0) {
            console.log("done");
        } else {
            errors.forEach(function (element, indeks, array) {
                element.style.color = "red";
            });
        }
    });
});
