document.addEventListener("DOMContentLoaded", init);

function init() {
  const formElement = document.querySelector("form");
  const ulElement = document.querySelector("ul");

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const { firstName, lastName } = e.target.elements;

    if (firstName.value === "" || lastName.value === "") {
      throw new Error("Błędnie wprowadzone dane!");
    } else {
      const liElement = document.createElement("li");
      liElement.classList.add("users-list__person");
      liElement.innerText = `${firstName.value} ${lastName.value}`;

      ulElement.appendChild(liElement);

      firstName.value = "";
      lastName.value = "";
    }
  });
}
