const formEl = document.querySelector("form");
const allInputsEls = formEl.querySelectorAll("input");
const messagesUlEl = formEl.querySelector(".messages");
const errors = [];
formEl.addEventListener("submit", checkData);


function checkData(e){
    e.preventDefault();
    messagesUlEl.innerHTML ="";
    const self = e.target;
    checkInputsFill(allInputsEls);
    
}

function checkInputsFill(allInputsEls){
    const inputsToFill = [...allInputsEls].filter(input =>{
        return input.type !== "submit"
    })

    inputsToFill.forEach(input =>{
        if(!input.value){
            appendErrorLi(input, "Uzupełnij");
            errors.push(input.name);
        } else {
            const isValidContent = validateContent(input);
            console.log(isValidContent);
            if(!isValidContent){
                appendErrorLi(input, "Popraw");
            }else{
                removeError(input)
            }

        }

    })
}
function appendErrorLi(input, message){
    const liEl = document.createElement("li");
    const inputParentEl = input.parentElement;
    inputParentEl.style ="color:red"
    liEl.textContent = `${message} pole: ${inputParentEl.innerText}`;
    messagesUlEl.appendChild(liEl);
}

function removeError(input){
    const inputParentEl = input.parentElement;
    inputParentEl.style ="color:green"
}

function validateContent(input){
    const re = getPattern(input.name);
    console.log(input)
    return re.test(input.value)
}

function getPattern(inputName){
    let pattern;
    switch (inputName) {
        case "zip":
            pattern = /[0-9]{2}-[0-9]{3}/;
            break
        default:
            pattern = /[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]/
            break;
    }
    return pattern
}

// function validateEmail(email){
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }
// function validateEmail(email){
//     const re = /[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]/
//     return re.test(email);
// }

// function validateEmail(email){
//     const re = /[0-9]{2}-[0-9]{3}/;
//     return re.test(email);
// }