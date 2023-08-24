const formEl = document.querySelector("form");
formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
 e.preventDefault()
 const email = e.target.elements.login;
 const pass1 = e.target.elements.pass1; 
 const pass2 = e.target.elements.pass2;     
 const checkbox = e.target.elements.accept;
 const errors = [];
 if (!email.value.includes('@')) {
    errors.push(email)
 } 
 if (pass1.value.length === 0 || pass1.value.length < 6) {
    errors.push(pass1);
 } 
 if (pass2.value.length === 0 || pass2.value.length < 6)  {
    errors.push(pass2)
 }
 if (pass1.value !== pass2.value) {
    errors.push(pass1, pass2)
 }
 if (!checkbox.checked) {
    errors.push(checkbox)
 }  
 errors.forEach(function(input) {
    const labelError = input.previousElementSibling;
    labelError.style.color = "red";
 })
 if (errors.length === 0) {
    console.log('DONE!');
 }
}

