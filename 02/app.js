const form = document.querySelector('form');
const emailInpt = document.getElementById('formLogin');
const password1 = document.getElementById('formPass1');
const password2 = document.getElementById('formPass2');
const checkInpt = document.getElementById('formAccept');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = [];
    const email = emailInpt.value;
    const pw1 = password1.value;
    const pw2 = password2.value;
    if(email.includes('@') && pw1 === pw2 && pw1.length > 6 && pw2.length > 6 && checkInpt.checked) console.log('done');
    else {
        if (!email.includes('@')) errors.push("label[for='formLogin']");
        if(pw1 !== pw2) {
        errors.push("label[for='formPass1']");
        errors.push("label[for='formPass2']"); 
        }
        if(pw1.length < 7 && !errors.includes("label[for='formPass1']")) errors.push("label[for='formPass1']");
        if(pw2.length < 7 && !errors.includes("label[for='formPass2']")) errors.push("label[for='formPass2']");
        if(!checkInpt.checked) errors.push("label[for='formAccept']");
        console.log(errors);
    }
    errors.forEach(error => {
        document.querySelector(error).style.color = 'red';
    })
    emailInpt.value = '';
    password1.value = '';
    password2.value = '';
    checkInpt.checked = false;
})