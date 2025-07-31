const addUserToTheList = function (firstName, lastName) {

    const usersList = document.querySelector('.users-list');
    const user = document.createElement('li');
    user.innerText = firstName + ' ' + lastName;
    user.className = 'users-list__person';

    usersList.appendChild(user);

};

const addUser = function () {
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener(
        'click',
        function (e) {
            e.preventDefault();
            const firstNameInput = document.querySelector('input[name="firstName"]');
            const lastNameInput = document.querySelector('input[name="lastName"]');
            const firstName = firstNameInput.value.trim(' ');
            const lastName = lastNameInput.value.trim(' ');

            if (firstName !== '' && lastName !== '') {
                addUserToTheList(firstName, lastName);
                firstNameInput.value = '';
                lastNameInput.value = '';
            } else if (firstName === '') {
                alert('Please enter your first name')
            } else if (lastName === '') {
                alert('Please enter your last name')
            };
        }
    );
};

addUser();