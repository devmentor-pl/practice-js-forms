
const init = function() {
    const formByQuery = document.querySelector("form");
    
    if(formByQuery) {
        formByQuery.addEventListener("submit", addUser);
    };
};

document.addEventListener("DOMContentLoaded", init)

const addUser = function (e) {
    e.preventDefault();

    const ulElement = document.querySelector(".users-list");
    const liElement = document.createElement("li");
    liElement.classList.add("users-list__person");

    const valueFisrt = e.target[0].value;
    const valueLast = e.target[1].value;
    const valueLi = valueFisrt + " " + valueLast;

    if(valueFisrt.length > 0 && valueLast.length > 0) {
        liElement.innerText = valueLi;
        ulElement.appendChild(liElement);
    };
};