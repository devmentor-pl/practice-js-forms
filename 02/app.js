
const init = function () {
    const formByQuery = document.querySelector("form");

    if(formByQuery) {
        formByQuery.addEventListener("submit", checkEmail)
    };
};

document.addEventListener("DOMContentLoaded", init);

const checkEmail = function(e) {
    e.preventDefault()

    const email = e.target[0];
    const password1 = e.target[1];
    const password2 = e.target[2];
    const checkBox = e.target[3];

    let errors = [];
    
    if(!email.value.includes("@")) {
        errors.push(email);
    } 

    if(password1.value !== password2.value) {
        errors.push(password2);
    }

    if(password1.value.length < 6) {
        errors.push(password1);
    } 

    if(password2.value.length < 6) {
        errors.push(password2);
    }
    
    if(checkBox.checked === false) {
        errors.push(checkBox);
    }

    if(errors.length > 0) {
        e.preventDefault()

        errors.forEach(function (element) {
        
            if(element) {
                element.previousElementSibling.style.color = "red";
            }; 

        });
    } else {
        console.log("done!");
    }
};

