const formEl = document.querySelector('form');
formEl.addEventListener('submit', checkData);

function checkData(e) {
    e.preventDefault();
    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const regulAccept = e.target.elements['accept'];
    const errors = [];

    if((email.includes('@')) && (pass1 === pass2) && (pass1.length>6) && (regulAccept.checked)){
        console.log('done');
    }
    if(!email.includes('@')){
        errors.push(e.target.elements.login);
    }
    if(pass1.length < 6) {
        errors.push(e.target.elements.pass1);
    }
    if(pass2.length < 6 || (pass2 !== pass1 )) {
        errors.push(e.target.elements.pass2);
    }
    if(!regulAccept.checked){
        errors.push(regulAccept);
    }
    console.log(errors);

    errors.forEach(function(err){
        const labelEl = err.previousElementSibling;
        labelEl.style.color = 'red';
    });
}