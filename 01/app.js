const form = document.querySelector("form");
const usersListElement = document.querySelector(".users-list");

if (form && usersListElement) {
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

      usersListElement.appendChild(createUserListItem(firstName, lastName));
    } else {
      alert("Please enter your first and last name.");
    }
  });
}

const createUserListItem = (firstName, lastName) => {
  const li = document.createElement("li");
  li.className = "users-list__person";
  li.innerText = `${firstName} ${lastName}`;

  return li;
};
