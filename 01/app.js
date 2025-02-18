document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var userList = document.querySelector('.users-list');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    
        var firstName = form.elements['firstName'].value;
        var lastName = form.elements['lastName'].value;

        if (firstName && lastName) {
            var listItem = document.createElement('li');
            listItem.classList.add('users-list__person');
            listItem.textContent = firstName + " " + lastName;

            userList.appendChild(listItem);

            form.reset();
        } 
    
    });
});

