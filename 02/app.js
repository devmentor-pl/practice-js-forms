// KONSULTACJE

const inputEmail = document.getElementById('formLogin');
const pass1Value = document.getElementById('formPass1').value;
const pass2Value = document.getElementById('formPass2').value;
const inputPass = document.getElementById('formPass2');
const inputAccept = document.getElementById('formAccept');
const registerSubmit = document.querySelector('input[type="submit"]');
const form = document.querySelector('form');
form.noValidate = true;
console.log(registerSubmit);

const labelEmail = document.querySelector('label[for="formLogin"]');
const labelPass1 = document.querySelector('label[for="formPass1"]');
const labelPass2 = document.querySelector('label[for="formPass2"]');
const labelReg = document.querySelector('label[for="formAccept"]');

// console.log(pass1Value.length); //0
const errors = [];

// inputEmail.addEventListener('input', checkEmail);
// inputAccept.addEventListener('input', checkAcceptance);
// inputPass.addEventListener('input', function(e) {
//     console.log(e);
// });

//KONSULTACJE - FUNKCJA, KTÓRA SPRAWDZI WARUNKI I ZMIENI KOLOR LABEL DLA BŁĘDÓW
form.addEventListener('submit', function(e) {
    console.log(e);
    console.log(form.checkValidity());
    console.log(inputEmail.valid);
    e.preventDefault();
    //wyczyścić tablicę errors!!
    console.log(e);
    checkEmail(e.target[0].value);
    // checkAcceptance('input'); //podać wartość ?
    checkPass(e.target[1].value, e.target[2].value);
    if(errors.length > 0) {
        for(let i = 0; i < errors.length; i ++) {
            errors[i].style.color = 'red';
        }
        console.log('invalid');
        return;
    }
console.log('done');
});

function checkEmail(value) {
    //sprawdź czy pole valid === false wtedy kolor label
    // console.log(value);
    // const email = value.value;
    // console.log(email);

    //usunąć automatyczną walidację!!
    
    if(!value.includes('@')) {
        inputEmail.style.color = 'red';
        inputEmail.style.background = 'pink';
        errors.push(labelEmail);
    } 
}

function checkAcceptance(e) {
    const self = e.target;
    const checked = self.value;
    if(!checked) {
        errors.push(labelReg);
    }
    return true;
}

function checkPass(pass1, pass2) {
    console.log(pass1, pass2);
    if(pass1.length > 6 && pass2.length > 6) {
        
        if(pass1 !== pass2) {
            errors.push(labelPass2);
            labelPass2.style.color = 'red';
            return false;
        } 
    }
}
