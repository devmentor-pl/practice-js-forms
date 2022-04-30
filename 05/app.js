const formEl = document.querySelector("form");
const allInputsEls = formEl.elements;
const inputsToFill = [...allInputsEls].filter(input =>{
    return input.type !== "submit"
});
const selectEl = formEl.querySelector("select");
const messagesUlEl = formEl.querySelector(".messages");
const announcement = formEl.querySelector(".messages__announcement");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".close");


inputsToFill.forEach(input => {
    input.addEventListener("change", checkContent);
});

formEl.addEventListener("submit", checkData);
formEl.addEventListener("change", checkInputsFill);

modalCloseBtn.addEventListener("click", closeModal)

let errors = ["prototypeError"];
function checkData(e){
    // console.log(errors)
    e.preventDefault();
    if(!errors.length){
        console.log("Walidacja kompletna");
        showModal()
    }
    
}

function checkInputsFill(){
    const announcement = formEl.querySelector(".messages__announcement");
    const isEveryFilled = inputsToFill.every(input=> input.value);
    if(isEveryFilled){
        announcement.textContent = "Wszystkie pola wypełnione"
    }else{
        announcement.textContent = "Uzupełnij wszystkie pola";
        inputsToFill.forEach(input =>{
            if(!input.value){
                errors.push(input)
            }
        })
    }
}

function checkContent(e){
    const self = e.target;
    const isValidContent = validateContent(self);
    if(!isValidContent){
        appendErrorLi(self, "Popraw");
        errors.push(self)
    }else{
        removeError(self)
        errors=[]
    }
    
}

function appendErrorLi(input, message){
    const liEl = document.createElement("li");
    const inputParentEl = input.parentElement;
    liEl.dataset.name = input.name;
    // console.log(input)
    input.classList.remove("input--success");
    input.classList.add("input--error");

    liEl.textContent = `${message} pole: ${inputParentEl.innerText}`;
    if(input.name === "voivodeship"){
        liEl.textContent = `${message} pole: Województwo`;
    }
    const errorMessages = [...messagesUlEl.querySelectorAll("li")];
    const isErrorExist = errorMessages.some(err => err.dataset.name === liEl.dataset.name);
    if(!isErrorExist){
        messagesUlEl.appendChild(liEl);
        errors.push(input)
    }
    // console.log(errors)
   
}

function removeError(input){
    input.classList.remove("input--error");
    input.classList.add("input--success");
    const messageToRemove = messagesUlEl.querySelectorAll(`[data-name="${input.name}"]`);
    messageToRemove.forEach(error=> messagesUlEl.removeChild(error));
    errors = errors.filter(error =>{
        return error.name !== input.name
    });
    // console.log(errors)

}

function validateContent(input){
    const re = getPattern(input.name);
    return re.test(input.value)
}

function getPattern(inputName){
    let pattern;
    switch (inputName) {
        case "zip":
            pattern = /[0-9]{2}-[0-9]{3}/;
            break;
        case "houseNumber":
            pattern = /^[0-9]*$/;
            break;
        case "flatNumber":
            pattern = /^[0-9]*$/;
            break;
        default:
            pattern = /[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]/
            break;
    }
    return pattern
}

function showModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none"
    inputsToFill.forEach(input => {
        input.value = "";
        input.classList.remove("input--success")
    });
    announcement.textContent = "";
    errors = ["prototypeError"];
}