const form = document.querySelector('form');
const label = document.querySelector('label');
// const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




form.addEventListener('submit', function (e) {

    e.preventDefault();

    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const confirm = e.target.elements['accept']

    const errors = [];



    if (email.includes('@')) {
        console.log('email jest poprawny')
    } else {
        console.log('email jest nie poprawny')

        errors.push(e.target.elements.login)
        e.target.elements.login.style.border = "2px solid red";


    }



    if (pass1 === pass2 && pass1.length > 6 || pass2.length > 6) {

        console.log('hasła się zgadzają i mają więcej niz 6 liczb')
    } else {
        alert('wpisz hasło które ma więcej niż 6 znaków')
        console.log('hasła się nie zgadzają, albo mają za mało liczb')
        errors.push(e.target.elements.pass1)
        pass1.style.border = "2px solid red";
    }


    if (confirm.checked) {
        console.log('ok, zatwierdzone')
    } else {
        console.log('zatwierdź regulamin!')
        alert('zatwierdź regulamin')
        errors.push(e.target.elements.confirm)
        confirm.style.border = "2px solid red";
    }



})