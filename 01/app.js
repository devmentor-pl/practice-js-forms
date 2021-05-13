
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

    valueFisrt = e.target[0].value;
    valueLast = e.target[1].value;
    valueLi = valueFisrt + " " + valueLast;

    liElement.innerText = valueLi;
    ulElement.appendChild(liElement);
};