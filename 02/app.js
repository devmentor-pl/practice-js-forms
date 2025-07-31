const form = document.forms[0];

if (form) {
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const errors = [];
        const email = e.target.elements.login;
        const pass1 = e.target.elements.pass1;
        const pass2 = e.target.elements.pass2;
        const acceptForm = e.target.elements.accept;


        if (checkEmail(email.value)) {
            errors.push(email);
        }
        if (!checkLength(pass1.value)){
            errors.push(pass1);
        }
        if (!checkPassword(pass1.value, pass2.value)){
            errors.push(pass2);
        }

        if(!acceptForm.checked){
            errors.push(acceptForm);
        }

        if (errors.length === 0) {
            errors.forEach((ele) => {
                ele.previousElementSibling.style.color = 'black';
            });
            return console.log("done.");

        } else {
            e.preventDefault();
            errors.forEach((ele) => {
                ele.previousElementSibling.style.color = 'red';
            })
        }
        console.log(errors);
    })
}

function checkEmail(email){
    if(!email.includes('@')){
        return true
    } else {
        return false
    }
}

function checkLength(password) {
    if(password.length > 6) {
        return true
    }
}

function checkPassword(passwordFirst, passwordSecond){
    if(passwordSecond === ''){
        return false
    }
    else if(passwordSecond === passwordFirst){
        return true
    }
}