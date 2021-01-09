const init = function() {
    const formHTML = document.querySelector('form');
    formHTML.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        const arrData = captureText(formHTML);
        const locusAddUser = document.querySelector('.users-list');
        addUser(arrData, locusAddUser);
    }
    function captureText(form) {
        const arrTextInput = [];
        for(const el of form) {
            if(el.getAttribute('type') === 'text') {
                if(el.value){
                    arrTextInput.push(el.value);
                };
            };
        };
        if(!arrTextInput.length){
            alert('The form is empty');
        } else {
            return arrTextInput;
        }
    }
    function addUser(dataOfForm, locus) {
            if(dataOfForm) {
            const newLiEl = document.createElement('li');
            newLiEl.textContent = dataOfForm.join(" ");

            addClass("users-list__person", newLiEl);
            locus.appendChild(newLiEl);  
            };
    }
    function addClass(className, element) {
        element.classList.add(className);
    }

};
document.addEventListener('DOMContentLoaded', init);
