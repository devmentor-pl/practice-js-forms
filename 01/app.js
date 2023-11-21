document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.querySelector("form");
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;

        const newLi = document.createElement("li");

        newLi.classList.add("user-list__person");
        // newLi.innerHTML = firstName;
        // newLi.innerHTML = lastName;

        newLi.textContent = firstName + " " + lastName;

        const ulLi = document.querySelector(".users-list");
        ulLi.appendChild(newLi);
    });
});
