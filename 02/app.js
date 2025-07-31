// DZIAŁA

const inputEmail = document.getElementById('formLogin');
inputEmail.noValidate;
const pass1Value = document.getElementById('formPass1').value;
const pass2Value = document.getElementById('formPass2').value;
const inputPass = document.getElementById('formPass2');
const inputAccept = document.getElementById('formAccept');
const checkBox = document.querySelector('input[type="checkbox"]');
// console.log(checkBox); // ok 

const registerSubmit = document.querySelector('input[type="submit"]');
const form = document.querySelector('form');
form.noValidate = true;
// console.log(registerSubmit);

const labelEmail = document.querySelector('label[for="formLogin"]');
const labelPass1 = document.querySelector('label[for="formPass1"]');
const labelPass2 = document.querySelector('label[for="formPass2"]');
const labelReg = document.querySelector('label[for="formAccept"]');
// console.log(labelReg);
// console.log(pass1Value.length); //0
let errors = [];

// inputEmail.addEventListener('input', checkEmail);
// inputAccept.addEventListener('input', checkAcceptance);
// inputPass.addEventListener('input', function(e) {
//     console.log(e);
// });

form.addEventListener('submit', function(e) {
    // console.log(e);
    // console.log(form.checkValidity()); //false
    // console.log(inputEmail.valid); //undefined
    e.preventDefault();
    
    //czyszczę tablicę errors
    errors = [];
    
    // console.log(e);
    checkEmail(e.target[0].value);
    // console.log(e.target[0].value); 
    checkAcceptance('wartość podana do funkcji- jaka?');
    checkPass(e.target[1].value, e.target[2].value);
    if(errors.length > 0) {
        // console.log(errors);
        // for(let i = 0; i < errors.length; i ++) {
        //     errors[i].style.color = 'red';
        // }
        errors.forEach(function(error) {
            // console.log(errors); 
            const colorRed = 'red'
            error.style.color = colorRed;
        })
        // console.log('invalid');
        return;
    }
console.log('done');
});

function checkEmail(value) {
    // console.log(value);
    const email = value.value;
    // console.log(inputEmail.valid);
    
    if(!value.includes('@')) {
        inputEmail.style.color = 'red';
        inputEmail.style.background = 'pink';
        errors.push(labelEmail); //ok
        const email = labelEmail.innerText;
        // console.log(email); //email:
        // email.style.color = 'red';
        // console.log(errors);
    } 
}

function checkAcceptance(e) {
    if(checkBox.checked) {
        console.log('zaznaczony')
    } else {
        console.log('NIE zaznaczony');
        errors.push(labelReg);
        // labelReg.innerText.style.color = 'red';
    }
    return true;
}

function checkPass(pass1, pass2) {
    // console.log(pass1, pass2);
    if(pass1.length > 6 && pass2.length > 6) {
        
        if(pass1 !== pass2) {
            errors.push(labelPass2);
            // labelPass2.style.color = 'red';
            return false;
        } 
    }
}
