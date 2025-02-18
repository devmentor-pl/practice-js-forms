

document.addEventListener('DOMContentLoaded', function() {
    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', handleSubmit);


    function handleSubmit(e) {
     e.preventDefault();
        const errors = []

        const email = document.querySelector('#formLogin');
        
    
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.querySelector("#formLogin");
        const pass1 = document.querySelector("#formPass1");
        const pass2 = document.querySelector("#formPass2");
        const accept = document.querySelector("#formAccept");
        const labels = document.querySelectorAll("label");
        
        let errors = [];

        labels.forEach(label => label.style.color = "");

        // email validation
        const emailValue = email.value;

        if (!emailValue.includes('@')) {
            errors.push(email.previousElementSibling);
        }
        
        // password validation
        if (pass1.value.length <= 6 || pass1.value !== pass2.value) {
            errors.push("#formPass1", "#formPass2");
        }
        
        // checkbox validation
        if (!accept.checked) {
            errors.push("#formAccept");
        }
        
        if (errors.length > 0) {
            errors.forEach(selector => {
                document.querySelector(`label[for='${selector.substring(1)}']`).style.color = "red";
            });
        } else {
            console.log("done");
        }
    });
});