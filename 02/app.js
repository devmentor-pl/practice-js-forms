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
 else {
    email.previousElementSibling.style.color = "black";
 }
if (pass1.value.length <= 6 && pass2.value.length <= 6 || pass1.value !== pass2.value) {
   errors.push(pass1, pass2)
}
else {
    pass1.previousElementSibling.style.color = "black";
    pass2.previousElementSibling.style.color = "black";
 }
 if (!checkbox.checked) {
    errors.push(checkbox)
 }
 else {
    checkbox.previousElementSibling.style.color = "black";
 }
 if (errors.length === 0) {
    console.log('DONE!');
    const inputs = [...formEl.elements]
    for (let i = 0; i < inputs.length - 1; i++) {
        inputs[i].value = "";
        inputs[i].checked = false;
    }
 }
 else {
    errors.forEach(function(input) {
        const labelError = input.previousElementSibling;
        labelError.style.color = "red";
     })
 }
}

