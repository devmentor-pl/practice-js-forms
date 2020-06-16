const formEl = document.querySelector('form');
//console.log(formEl);
formEl.addEventListener('submit', function(e)
{
    e.preventDefault();

    const firstName = e.target.elements.firstName;
    //console.log(firstName.value);
    const lastName = e.target.elements.lastName;
    //console.log(lastName.value);

    

        if(firstName.value && lastName.value){
            const newLi = document.createElement('li');
            newLi.classList.add('users-list__person');
            newLi.innerText = firstName.value + ' ' + lastName.value;
            document.querySelector('ul').appendChild(newLi);
            //console.log(document.querySelector('ul'))
        }
        
})