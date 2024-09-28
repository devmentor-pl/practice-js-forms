const form = document.querySelector("form");
const inputName = document.querySelector(".firstName");
const inputSurname = document.querySelector(".lastName");
const userList = document.querySelector(".users-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = inputName.value;
    const surname = inputSurname.value;
    const user = document.createElement("li");
    user.classList.add("user-list__person");
    user.innerText  = `${name} ${surname}`;
    userList.appendChild(user);
    form.reset();
});


