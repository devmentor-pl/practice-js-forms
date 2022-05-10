const formEl = document.querySelector('form');
const labels = document.querySelectorAll('label')
formEl.noValidate = true;

formEl.addEventListener('submit', checkData)

function checkData(e) {

    const email = e.target.elements[0];
    const pass1 = e.target.elements[1];
    const pass2 = e.target.elements[2];
    const accept = e.target.elements[3];
    let errors = [];

    (function clearRed() {
        labels.forEach(lab => lab.style.color = 'black')
    })();

    if (!email.value.includes('@')) {
        errors.push(email)
    };

    if (pass1.value.length < 6) {
        errors.push(pass1)
    };

    if (pass1.value !== pass2.value) {
        errors.push(pass2)
    };

    if (!accept.checked) {
        errors.push(accept)
    };

    if (errors.length > 0) {
        e.preventDefault();
        console.log(errors);

        errors.forEach(function (err) {
            const sibling = err.previousElementSibling;
            sibling.style.color = 'red'
            console.log(sibling)

        });

    } else {
        console.log('done')
        e.preventDefault()

    };
}