const formEl = document.querySelector('form');
formEl.addEventListener('submit', registerPanel);

function registerPanel(e) {
    e.preventDefault();
    const emailEl = e.target.elements.login;
    const firstPass = e.target.elements.pass1;
    const secondPass = e.target.elements.pass2;
    const wrongPassword = false
    const accept = e.target.elements.accept; 

    const errors = [];

    if(!emailEl.value.includes('@')) {
        errors.push(emailEl);
    }
    if(firstPass.value.length < 6) {
        errors.push(firstPass)
    }
    if(secondPass.value.length < 6) {
        errors.push(secondPass)
    }
    if(firstPass.value !== secondPass.value) {
        errors.push(wrongPassword)
    }
    if(!accept.checked) {
        errors.push(accept)
    } else {
        console.log('Done')
    }
    
    if(errors.length > 0) {
        errors.forEach(function(el) {
            Array.push(el)

        })
    }
}