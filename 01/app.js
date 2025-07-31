const form = document.querySelector('form')
const usersList = document.querySelector('.users-list')

form.addEventListener('submit', addUser)


function addUser(e) {
    e.preventDefault()

    const userItem = document.createElement('li')
    let newUser = ''
    // two methods of getting data presented:
    newUser += e.target.elements.firstName.value;
    newUser += ' ';
    newUser += form.elements[1].value;
    userItem.innerText = newUser;
    usersList.appendChild(userItem);
}