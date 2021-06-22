/*Twoim zadaniem jest implementacja rozwiązania, które pozwoli w momencie wysyłania danych zatrzymać domyślną akcję formularza i pobrać dane z jego pól.
Gdy dane zostaną pobrane, należy utworzyć element <li> z klasą user-list__person i dodać ten element do <ul>.
Utworzony element <li> powinien zawierać w sobie dane podane przez użytkownika.*/

const ulEl = document.querySelector('ul');
const formEl = document.querySelector('form');
formEl.addEventListener('submit', newList);

function newList(e) {

    e.preventDefault();

    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;




    const usersList = document.querySelector('.users-list');

    const newLi = document.createElement('li');
    newLi.classList.add('user-list__person');

    newLi.innerText = firstName.value + " " + lastName.value;

    usersList.appendChild(newLi);
};