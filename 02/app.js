const formEl = document.querySelector('form');
formEl.addEventListener('submit', checkData);

const formLoginEl = formEl.querySelector('#formLogin');
const labelFormLoginEl = formLoginEl.previousElementSibling;

const formPass1El = formEl.querySelector('#formPass1');
const labelFormPass1El = formPass1El.previousElementSibling;

const formPass2El = formEl.querySelector('#formPass2');
const labelFormPass2El = formPass2El.previousElementSibling;

const formAcceptEl = formEl.querySelector('#formAccept');
const labelFormAcceptEl = formAcceptEl.previousElementSibling;


function checkData(e) {
    const email = e.target.elements.login.value;
    const password1 = e.target.elements.pass1.value;
    const password2 = e.target.elements.pass2.value;
    const accept = e.target.elements['accept'];
    const errors = [];


    if (!email.includes('@')) {
        errors.push('formLogin')
    }
    if (password1.length <= 6) {
        errors.push('formPass1')
    }
    if (password2.length <= 6) {
        errors.push('formPass2')
    }
    if (password1 !== password2) {
        errors.push('formPass2')
    }
    if (!accept.checked) {
        errors.push('formAccept')
    }


    if (errors.length > 0) {
        e.preventDefault();

        blackFont(labelFormLoginEl);
        blackFont(labelFormPass1El);
        blackFont(labelFormPass2El);
        blackFont(labelFormAcceptEl);

        errors.forEach(function (error) {
            if (error === 'formLogin') {
                redFont(labelFormLoginEl)
            }
            if (error === 'formPass1') {
                redFont(labelFormPass1El);
            }
            if (error === 'formPass2') {
                redFont(labelFormPass2El);
            }
            if (error === 'formAccept') {

                redFont(labelFormAcceptEl);
            }
        });

    } else {
        blackFont(labelFormLoginEl);
        blackFont(labelFormPass1El);
        blackFont(labelFormPass2El);
        blackFont(labelFormAcceptEl);

        console.log('Done !!!');

        e.preventDefault();
    }

}


function redFont(el) {
    el.style.color = 'red';
}

function blackFont(el) {
    el.style.color = 'black';
}
