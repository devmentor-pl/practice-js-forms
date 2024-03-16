// KONSULTACJE

const inputEmail = document.getElementById('formLogin');
const pass1Value = document.getElementById('formPass1').value;
const pass2Value = document.getElementById('formPass2').value;
const inputPass = document.getElementById('formPass2');
const inputAccept = document.getElementById('formAccept');
const registerSubmit = document.querySelector('input[type="submit"]');

const labelEmail = document.querySelector('label[for="formLogin"]');
const labelPass1 = document.querySelector('label[for="formPass1"]');
const labelPass2 = document.querySelector('label[for="formPass2"]');
const labelReg = document.querySelector('label[for="formAccept"]');

console.log(pass1Value.length); //0
const errors = [];

inputEmail.addEventListener('input', checkEmail);
inputAccept.addEventListener('input', checkAcceptance);
inputPass.addEventListener('input', checkPass);

//KONSULTACJE - FUNKCJA, KTÓRA SPRAWDZI WARUNKI I ZMIENI KOLOR LABEL DLA BŁĘDÓW
registerSubmit.addEventListener('submit', function(e) {
    checkEmail('input'); //podać wartość ?
    checkAcceptance('input'); //podać wartość ?
    checkPass('input');

    if(errors.length > 0) {
        for(let i = 0; i < errors.length; i ++) {
            errors[i].style.color = 'red';
        }
    }

});

function checkEmail(e) {
    const self = e.target;
    const email = self.value;
    
    if(!email.includes('@')) {
        self.style.color = 'red';
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

function checkPass() {
    if(pass1Value.length > 6 && pass2Value.length > 6) {
        
        if(pass1Value !== pass2Value) {
            errors.push(labelPass2);
            return false;
        } 
    }
}
