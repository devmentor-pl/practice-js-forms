formEl = document.forms[0];
usersList = document.querySelector('ul')

formEl.addEventListener('submit', handleData)

function handleData(e) {
    e.preventDefault();
    
    const firstNameField = formEl.elements.firstName; 
    const lastNameField = formEl.elements.lastName;
    const fullName = firstNameField.value + " " + lastNameField.value;

    if(firstNameField.value && lastNameField.value) {
        const newUser = document.createElement('li');
        newUser.innerText = fullName;
        newUser.classList.add("users-list__person");
        usersList.appendChild(newUser);
    } else {
        alert('One or both fields are empty!')
    }
}