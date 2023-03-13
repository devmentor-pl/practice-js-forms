const form = document.querySelector('form');
const errors = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const accept = e.target.elements.accept.value;

    if (!email.includes('@')) {
        errors.push(e.target.elements.login.name);
    }

    if(pass1.length < 6 || pass2 !== pass1) {
        errors.push(e.target.elements.pass1.name);
        errors.push(e.target.elements.pass2.name);
    }

    if(accept.checked === false) {
        errors.push(e.target.elements.accept.name);
    }

    if(errors.length === 0) {
        console.log('done');
    }
    
    errors.forEach(err => {
        e.target.elements[err].previousElementSibling.style.color = 'red';
    })
    

});