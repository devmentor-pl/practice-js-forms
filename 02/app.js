const formEl = document.querySelector('form');
formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const errors = [];
    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const checkbox = e.target.elements.accept;
    
    if(!email.includes('@')) {
        errors.push('formLogin');
    } 
    if(pass1.length < 6) {
        errors.push('formPass1');
    }
    if(pass2.length < 6) {
        errors.push('formPass2');
    }
    if(pass1 !== pass2) {
        errors.push('formPass1');
        errors.push('formPass2');
    }
    if(!checkbox.checked) {
        errors.push('formAccept')
    }
    if(errors.length === 0) {
        console.log('done');
    } 
    console.log(errors);
    handleErrors(errors);
    

});

function handleErrors(array) {
    array.forEach(function(id) {
        let label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            label.style.color = 'red';
        }
    });

}
