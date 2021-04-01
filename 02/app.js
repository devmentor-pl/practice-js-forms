document.addEventListener("DOMContentLoaded", (e) => {
    submitForm();
});

let errors = [];
let correctData = []; //dodatkowa zmienna stworzona by obsłużyć zmianę koloru z czerwonego na czarny, gdy dane zostały poprawione

const submitForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', validate);
}

const validate = (e) => {
    errors = [];
    correctData = [];
    e.preventDefault();

    const loginInput = document.querySelector('#formLogin');
    const pass1Input = document.querySelector('#formPass1');
    const pass2Input = document.querySelector('#formPass2');
    const formAccept = document.querySelector('#formAccept');

    const validatedLogin = validateLogin(loginInput);
    const validatedPasswords = validatePasswords(pass1Input, pass2Input);
    const validatedAccept = validateAccept(formAccept);

    if ( validatedLogin &&  validatedPasswords && validatedAccept) {
        console.log("done");
        correctData.forEach(correct => {
            console.log(correct);
            correct.previousElementSibling.style.color = "black";
        })
    } else {
        errors.forEach(error => {
            console.log(error);
            error.previousElementSibling.style.color = "red";
        })
    } 
}

const validateLogin = loginInput => {
    const login = loginInput.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // wyrażenie regularne pobrane ze strony: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    if (!re.test(String(login).toLowerCase())) {
        errors.push(loginInput);
    } else {
        correctData.push(loginInput);
        return true;
    }
}

const validatePasswords = (pass1Input, pass2Input) => {
    const pass1 = pass1Input.value;
    const pass2 = pass2Input.value;

    if (pass1.length < 6 || pass1 !== pass2) {
        errors.push(pass1Input);
        errors.push(pass2Input);
    } else {
        correctData.push(pass1Input);
        correctData.push(pass2Input);
        return true;
    }
}

const validateAccept = formAccept => {
    if (!formAccept.checked) {
        errors.push(formAccept);
    } else {
        correctData.push(formAccept);
        return true;
    }
}