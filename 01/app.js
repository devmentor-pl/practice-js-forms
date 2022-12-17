
const userList = document.querySelector('.users-list');


const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = e.target.elements.firstName;

    const lastName = e.target.elements.lastName;
    console.log(lastName.value, firstName.value)


    if (firstName.value, lastName.value !== 0) {
        const newLi = document.createElement('li');
        newLi.innerText = firstName.value + ' ' + lastName.value
        userList.appendChild(newLi)
    }
});
console.log(userList)

