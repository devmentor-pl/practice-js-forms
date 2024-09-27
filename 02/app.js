const form = document.querySelector("form");
const password1 = document.getElementById("formPass1");
const password2 = document.getElementById("formPass2");
const mail = document.getElementById("formLogin");
const acceptBox = document.getElementById("formAccept");
const submitBtn = document.querySelector("input[type=submit]");


submitBtn.addEventListener('click', (e) => {
    const errors = []
  
    if (!mail.value.includes('@')) {
        errors.push(mail);
    } else {
        changeBackLabelColor(mail);
    }

    if (password1.value.length <= 6) {
        errors.push(password1);
    } else {
        changeBackLabelColor(password1);
    }

    if (password2.value.length <= 6) {
        errors.push(password2);
    
    } else {
        changeBackLabelColor(password2);
    }
  
    if (!password2.value ===  password1.value ) {
        errors.push(password2);
    
    } else {
        changeBackLabelColor(password2);
    }
  
    if(!acceptBox.checked) {
        errors.push(acceptBox); 
    
    } else {
        changeBackLabelColor(acceptBox);
    }

    if(errors.length > 0) {
        e.preventDefault();
        errors.forEach(function(element) {
        element.previousElementSibling.style.color = "red"
        })
    }

    if(errors.length === 0) {
        e.preventDefault();
        console.log("done");
    }

});

function changeBackLabelColor(el) {
    el.previousElementSibling.style.color = "black";
}