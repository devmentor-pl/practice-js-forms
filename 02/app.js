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

    


}