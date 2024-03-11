//do zrobienia funkcja, która sprawdzi warunki i zmieni tekst na czerwono dla braku spełnienia

const inputEmail = document.getElementById('formLogin');
const pass1Value = document.getElementById('formPass1').value;
const pass2Value = document.getElementById('formPass2').value;
const inputAccept = document.getElementById('formAccept');
const registerSubmit = document.querySelector('input[type="submit"]');

const labelEmail = document.querySelector('label[for="formLogin"]');
const labelPass1 = document.querySelector('label[for="formPass1"]');
const labelPass2 = document.querySelector('label[for="formPass2"]');
const labelReg = document.querySelector('label[for="formAccept"]');

const errors = [];

inputAccept.addEventListener('input', checkAcceptance);
registerSubmit.addEventListener('submit', registerUser);

//działa
function checkEmail(e) {
    const self = e.target;
    const email = self.value;
    
    if(!email.includes('@')) {
        self.style.color = 'red';
        errors.push(labelEmail);
    } 
}
//działa
function checkAcceptance(e) {
    const self = e.target;
    const checked = self.value;
    if(!checked) {
        errors.push(labelReg);
    }
}
//działa
function checkPass() {
    if(pass1Value === pass2Value) {
        console.log('hasło jest poprawne');
        return true;
    } 
}

//do weryfikacji
function registerUser() {
    errors.forEach(function(error) {
        error.style.color = 'red';
    })
}
