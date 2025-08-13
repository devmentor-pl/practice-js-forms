const formEl = document.querySelector('form')
const ulEl = document.querySelector('ul')


formEl.addEventListener('submit', function(e) {
e.preventDefault()

const userInfoName = e.target.elements.firstName
const userInfoLastName = e.target.elements.lastName

// dodaje Name <li>

const liName = document.createElement('li')
liName.classList.add('user-list__person') 
liName.textContent = `Imię: ${userInfoName.value}`  // Info o użytkowniku

ulEl.appendChild(liName)

// dodaje Name <li>

const liLastName = document.createElement('li')
liLastName.classList.add('user-list__person') 
liLastName.textContent = `Nazwisko: ${userInfoLastName.value}` // Info o użytkowniku

ulEl.appendChild(liLastName)

console.log(userInfoName.value);
console.log(userInfoLastName.value);

userInfoName.value = '' // możemy też wyczyścić formuarz
userInfoLastName.value = ''


});