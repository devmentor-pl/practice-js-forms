// W pliku index.html znajdziesz formularz.

// Twoim zadaniem jest implementacja rozwiązania, które pozwoli w momencie wysyłania danych zatrzymać domyślną akcję formularza i pobrać dane z jego pól.

// Gdy dane zostaną pobrane, należy utworzyć element <li> z klasą user-list__person i dodać ten element do <ul>.

// Utworzony element <li> powinien zawierać w sobie dane podane przez użytkownika.

// Uwaga! Jeśli po wysłaniu formularza otrzymasz informację o błędzie HTTP 405, będzie to oznaczać, że dane zostały wysłane, zamiast być obsłużone przez JavaScript.

const formEl = document.querySelector('form');
const inputsList = document.querySelectorAll('input');
const ulEl = document.querySelector('ul')

formEl.addEventListener('submit', getUserInfo)

function getUserInfo(e) {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value.trim();
    const lastName = e.target.elements.lastName.value.trim();
    if (firstName === '' || lastName === '') {
        alert('Pola nie moga byc puste')
    } else {
        const liEl = document.createElement('li');
        liEl.innerText = firstName + ' ' + lastName;
        liEl.classList.add('user-list__person')


        ulEl.appendChild(liEl)
    }
}
