const formEl = document.querySelector('form')
formEl.addEventListener('submit', getFormData)

function getFormData (e) {
    e.preventDefault();

    const firstNameFromInput = formEl.elements['firstName']
    const lastNameFromInput = formEl.elements['lastName']

    console.log(firstNameFromInput.value);
    console.log(lastNameFromInput.value);


}





















// const usersList = document.querySelector('.users-list')
// formEl.addEventListener('submit', getFormData)

// // console.log(formEl.elements);




// function getFormData (e) {
//     e.preventDefault();
// // console.log(formEl.elements);
//     const firstNameFromInput = formEl.elements['firstName']
//     const lastNameFromInput = formEl.elements['lastName']


//     if(firstNameFromInput && lastNameFromInput) {
//         const fullNameToLi = `${firstNameFromInput.value} ${lastNameFromInput.value}`
//         const userData = document.createElement('li')
//         userData.classList.add('users-list__person')
//         userData.innerText = fullNameToLi
//         usersList.appendChild(userData)

//         firstNameFromInput.value = ''
//         lastNameFromInput.value = ''
//     }

// }