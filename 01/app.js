const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.addEventListener("submit", getData);

function getData(e) {
    e.preventDefault();

    const firstName = document.querySelector('input[name="firstName"]');
    const lastName = document.querySelector('input[name="lastName"]');

    if (firstName.value !== "" && lastName.value !== "") {
        const li = document.createElement("li");
        li.classList.add("user-list__person");
        li.innerText = firstName.value + " " + lastName.value;
        ul.appendChild(li);
        firstName.value = "";
        lastName.value = "";
    } else {
        alert("Proszę wypełnić wszystkie pola!");
    }
}