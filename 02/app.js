const form = document.querySelector('form');
const submit = document.querySelector('input[type = submit]');

const registerConditions = function (e) {
    e.preventDefault();
    let email = form.elements[0].value;
    let paswd1 = form.elements[1].value;
    let paswd2 = form.elements[2].value;
    const regulation = form.elements[3];
    const checkboxLabel = document.querySelector('[for="formAccept"]');
    const regex = /@/;
    let correct = true;

    if (regex.test(email)) {
        form.elements[2].style.color = 'black';
        if (paswd1 === paswd2) {
            form.elements[2].style.color = 'black';
            if (paswd1.length > 6) {
                if (form.elements[3].checked) {
                    checkboxLabel.style.color = 'black';
                    console.log("done");
                    for (const el of form.elements) {
                        if (el.getAttribute('type') != 'submit') {
                            el.value = '';
                            form.elements[3].checked = false;
                        }
                    }
                } else {
                    checkboxLabel.style.color = 'red';
                    alert("Akceptuj warunki")
                }
            } else {
                alert("Wprowadzone hasło jest za krótkie");
                form.elements[1].style.color = 'red';
                form.elements[2].style.color = 'red';
            }

        } else {
            alert("Hasła nie są identyczne");
            form.elements[2].style.color = 'red';
            correct = false;
        }
    } else {
        form.elements[0].style.color = 'red';
        alert('Niepoprawnu adres e-mail')
        correct = false;
    }
}

if (submit) {
    submit.addEventListener('click', registerConditions);
}