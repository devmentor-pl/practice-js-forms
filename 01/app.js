const form = document.querySelector("form");
const getFirstName = document.querySelector("input[name='firstName']");
const getLastName = document.querySelector("input[name='lastName']");
const submit = document.querySelector("input[type='submit']");
const namesList = document.querySelector(".users-list");

const addUser = function (e) {
  e.preventDefault();
  if (getFirstName.value && getLastName.value) {
    let fullName = getFirstName.value + " " + getLastName.value;
    const nextName = document.createElement("li");
    nextName.innerText = fullName;
    nextName.classList.add("user-list__person");
    namesList.appendChild(nextName);
    getFirstName.value = "";
    getLastName.value = "";
  } else {
    alert("Musisz coś wpisać!");
  }
};
submit.addEventListener("click", addUser);
