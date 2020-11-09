const form = document.querySelector("form");
const btn = document.querySelector("input[type=submit]")
const ulElement = document.querySelector(".users-list")
form.addEventListener('submit', function(e) {    
    e.preventDefault();
    const firstName = e.target.elements.firstName;
    const lastName = e.target.elements.lastName;
    console.log(firstName.value);
    console.log(lastName.value);
    const liElement = document.createElement("li");
    liElement.classList.add("user-list__person");
    ulElement.appendChild(liElement);
    liElement.innerText = firstName.value + " " + lastName.value;
});
