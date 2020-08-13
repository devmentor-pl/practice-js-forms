const form = document.querySelector('form');
const ulList = document.getElementsByClassName('users-list');
// console.log(ulList)


form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('ok')

    const firstName = e.target.elements.firstName;
    // console.log(firstName.value)

    const lastName = e.target.elements.lastName;
    // console.log(lastName.value)

    const newName = document.createElement('li');

    if (firstName.value && lastName.value) {

        newName.classList.add('users-list__person');
        // console.log(newName)

        // newName.innerText = firstName.value;
        // newName.innerText = lastName.value;

        newName.innerText = firstName.value + ' ' +
            lastName.value;

        ulList[0].appendChild(newName);



    } else {
        alert('proszę wpisz imię i nazwisko')
    }


    firstName.value = '';
    lastName.value = '';

})