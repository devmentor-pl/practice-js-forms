const formEl = document.querySelector('form')
formEl.noValidate = true;
formEl.addEventListener('submit', checkData)


function checkData(e) {
    e.preventDefault()
    const self = e.target;
    const email = self.elements.login.value;
    const pass = self.elements.pass1.value;
    const passRep = self.elements.pass2.value;
    const acceptTerms = self.elements.accept.checked;
    const errors = [];

    if (!email.includes('@')) {
        self.elements.login.style.border = '1px solid red';
        errors.push('email musi zawierac znak @')

    }
    if (pass.length < 6) {
        errors.push('hasło musi zawierać co najmniej 6 znaków')
        self.elements.pass1.style.border = '1px solid red';

    }
    if (pass !== passRep) {
        errors.push('hasła nie są identyczne');
        self.elements.pass1.style.border = '1px solid red';
        self.elements.pass2.style.border = '1px solid red';
    }
    if (!acceptTerms) {
        errors.push('zaakceptuj regulamin');
        self.elements.accept.style.border = '1px solid red';
    }
    if (email.includes('@') && pass.length >= 6 && pass === passRep && acceptTerms) {
        console.log('DONE')
    }
    if (errors.length > 0) {

        errors.forEach(function (err) {
            console.log(err)
        })
    }
}