/*Tym razem nasz formularz to panel rejestracji do serwisu.

Aby można było się zarejestrować, to należy wprowadzić poprawny adres email (sprawdzić, czy zawiera znak @ lub użyć odpowiedniego wyrażenie regularnego), podać dwa razy takie same hasła (dla pewności, że użytkownik nie pomylił się, wpisując hasło), które są dłuższe niż 6 znaków oraz zaakceptować regulamin (sprawdzić, czy jest checked).

Jeśli warunki zostały spełnione, to w konsoli powinien pojawić się napis done. W przeciwnym razie należy zaznaczyć na czerwono kolor fontu dla <label> błędnie wprowadzonych danych.

Do rozwiązania problemu oznaczania błędnych elementów można użyć tablicy, która będzie przechowywać dane tj. const errors = []. W momencie wystąpienia błędów dodajemy do tej tablicy selektor elementu, który błędnie jest wypełniony.

Na samym końcu wykonujemy pętlę (for lub forEach), która zaznacza elementy z błędem. */


const formEl = document.querySelector('form');
formEl.addEventListener('submit', checkData);
formEl.noValidate = true;
const ulEl = document.querySelector('ul')
ulEl.classList.add('.errors');


function checkData(e) {

    e.preventDefault();

    const login = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;

    const errors = [];

    if (login.length === 0) {
        errors.push('Enter your email');
        document.querySelector('#formLogin').previousElementSibling.style.color = 'red';
    }

    if (!login.includes('@')) {
        errors.push('Email need @ sign!');
        document.querySelector('#formLogin').previousElementSibling.style.color = 'red';
    }

    else {

        console.log('Your email is correct!');
        document.querySelector('#formLogin').previousElementSibling.style.color = 'black';
    }


    if (pass1 === pass2 && pass1.length > 6) {
        console.log('Your password is correct!');
        document.querySelector('#formPass1').previousElementSibling.style.color = 'black';
        document.querySelector('#formPass2').previousElementSibling.style.color = 'black';
    }

    else {
        errors.push('Passwords do not match or are too short!');
        document.querySelector('#formPass1').previousElementSibling.style.color = 'red';
        document.querySelector('#formPass2').previousElementSibling.style.color = 'red';
    }

    const accept = e.target.elements['accept'];

    if (!accept.checked) {
        errors.push('You have to accept regulations!');
        document.querySelector('#formAccept').previousElementSibling.style.color = 'red';
    }

    else {
        document.querySelector('#formAccept').previousElementSibling.style.color = 'black';
    }


    if (errors.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';
        errors.forEach(function (errors) {

            const newLi = document.createElement('li');
            newLi.innerText = errors;
            ulEl.appendChild(newLi);

        })

    }

    else if (errors.length === 0) {
        document.querySelector('.errors').innerHTML = '';
        console.log('done');
    }
}