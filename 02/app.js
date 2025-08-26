// Tym razem nasz formularz to panel rejestracji do serwisu.

// Aby można było się zarejestrować, należy:

// wprowadzić poprawny adres e-mail (sprawdź, czy adres zawiera znak @ lub użyj odpowiedniego wyrażenia regularnego),
// podać dwa razy takie samo hasło (dla pewności, że użytkownik się nie pomylił), które jest dłuższe niż 6 znaków,
// zaakceptować regulamin (sprawdź, czy checkbox został zaznaczony: checked).
// Jeśli warunki zostały spełnione, wyświetl w konsoli napis done. Jeśli nie – zaznacz na czerwono kolor fontu dla <label> przy błędnie wprowadzonych danych.

// Do rozwiązania problemu oznaczania błędnych elementów możesz użyć tablicy, która będzie przechowywać dane, tj. const errors = []. W momencie wystąpienia błędu dodasz do tej tablicy selektor pola, które zostało błędnie wypełnione. Na samym końcu wykonasz pętlę (for lub forEach), która zaznaczy elementy z błędem.

const inputsList = document.querySelectorAll('input');
const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul')
// console.log(labelsList)

formEl.addEventListener('submit', checkData);

function checkData(e) {
    e.preventDefault();

    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const confirm = e.target.elements['accept'];
    const errors = [];
    const labelsList = [];

    if (!email.includes('@')) {
        labelsList.push(e.target.elements.login)

        errors.push('Email need @ sign!')
    }
    if ((pass1.length && pass2.length) < 6) {
        labelsList.push(e.target.elements.pass1)
        labelsList.push(e.target.elements.pass2)
        errors.push('Password less than 6 characters!')
    }
    if (pass1 != pass2) {
        labelsList.push(e.target.elements.pass1)
        labelsList.push(e.target.elements.pass2)

        errors.push('Passwords are not match!')
    }
    if (!confirm.checked) {
        errors.push('Please accept regulations!')

    }

    const inputsStyleReset = document.querySelectorAll('input');
    console.log(inputsStyleReset)
    inputsStyleReset.forEach(function (input) {

        input.style.border = '';
    })

    ulEl.innerHTML = '';
    if (errors.length > 0) {
        labelsList.forEach(function (label) {
            label.style.border = '1px solid red'
        })
        if (ulEl) {
            errors.forEach(function (error) {
                const newLi = document.createElement('li');
                newLi.innerText = error;
                ulEl.appendChild(newLi)
            });
        }

    } else {
        console.log('Done')
    }

}