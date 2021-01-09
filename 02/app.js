const init = function () {
    const formEl = document.querySelector('form');
    formEl.noValidate = true;

    const checkData = function(e) {
        e.preventDefault();
        const errors = [];
    
        const inputEmail = this.elements['login'];
        checkEmailAddress(inputEmail, errors);
        const valuePassword1 = this.elements['pass1'].value;
        checkPasswordLength(valuePassword1, 6, errors);
        const valuePassword2 = this.elements['pass2'].value;
        validatePassword(valuePassword1, valuePassword2, errors);
        regulationsAccepted(this.elements['formAccept'], errors);
        
        if(!errors.length) {
            console.log("done");
        } else { errors.forEach(function(element) {
        
                const labelEl = element[0].parentElement;
                labelEl.style.backgroundColor = 'yellow';
       
            })

        };
        console.log(errors);
    };

formEl.addEventListener('submit', checkData);

function checkEmailAddress(inputEmail, formErrors) {    
    const email = inputEmail;
    if(inputEmail.value){
        const addresEmail = inputEmail.value.trim();
        const regEmail = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        if(!regEmail.test(addresEmail)) {
            return formErrors.push([email, "Wypełnij poprawnie pole email"]);
        }
    } else {
        return formErrors.push([email, "Wprowadź adres email"])
    };
}
function checkPasswordLength(valuePassword, minLength, formErrors) {
    if(valuePassword.trim().length <= minLength) {
        return formErrors.push(["pass1", "Wprowadź hasło zawierające co najmniej 6 znaków"]);
    }
}
function validatePassword(valuePassword1, valuePassword2, formErrors) {
    if([...valuePassword1].length === [...valuePassword2].length) {
        for(let i = 0; i < [...valuePassword1].length; i++) {
            if([...valuePassword1][i] !== [...valuePassword2][i]) {
                return formErrors.push(["pass1_2", "Wprowadzone hasła nie są takie same"]);
            }
        };
    } else if(valuePassword2) {
        return formErrors.push(["pass2", "Powtórz hasło w polu password2"]);
    } else {
        return formErrors.push(["pass2", "Pole password nie może być puste"]);
    };
}
function regulationsAccepted(inputCheckbox, formErrors) {
    const chackbox = inputCheckbox;
    if(!inputCheckbox.checked) {
        return formErrors.push([inputCheckbox, "Akceptacja regulaminu jest obowiązkowa"]);
    };
}

};
document.addEventListener('DOMContentLoaded', init);