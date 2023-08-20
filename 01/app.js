const formEl = document.querySelector('form');
const userList = document.querySelector('ul');
const userListLi = userList.querySelector('li');

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = formEl.elements[0];
    const lastName = formEl.elements[1];

    if (firstName.value === "" || lastName.value === "") {
        console.log('The input field is empty');
    }
    else {
        const fullName =`${firstName.value} ${lastName.value}`;
        const newLi = userListLi.cloneNode(true);
        newLi.textContent = fullName;
        userList.appendChild(newLi);
    }
})