const form = document.querySelector("form");
const firstName = document.querySelector("input[name='firstName']");
const lastName = document.querySelector("input[name='lastName']");
const submitBtn = document.querySelector("input[type='submit']");
const namesList = document.querySelector(".users-list");

const addUser = function (e) {
  e.preventDefault();
  if (firstName.value && lastName.value) {
    let fullName = firstName.value + " " + lastName.value;
    const nextName = document.createElement("li");
    nextName.innerText = fullName;
    nextName.classList.add("user-list__person");
    namesList.appendChild(nextName);
    firstName.value = "";
    lastName.value = "";
  } else {
    alert("Musisz uzupełnić oba pola!");
  }
};
submitBtn.addEventListener("click", addUser);
