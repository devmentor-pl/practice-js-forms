const form = document.querySelector("form");
const usersList = document.querySelector(".users-list");

if (form && usersList) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstNameElement = form.elements.firstName;
    const lastNameElement = form.elements.lastName;

    if (
      typeof firstNameElement !== "undefined" &&
      typeof lastNameElement !== "undefined"
    ) {
      const firstName = firstNameElement.value;
      const lastName = lastNameElement.value;

      usersList.appendChild(createUserListItem(firstName, lastName));
    }
  });
}

const createUserListItem = (firstName, lastName) => {
  const li = document.createElement("li");
  li.className = "users-list__person";
  li.innerText = `${firstName} ${lastName}`;

  return li;
};
