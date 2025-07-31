document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.querySelector("form");
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        if (firstName !== "" && lastName !== "") {
            const newLi = document.createElement("li");

            newLi.classList.add("user-list__person");

            newLi.textContent = firstName + " " + lastName;

            const ulLi = document.querySelector(".users-list");
            ulLi.appendChild(newLi);
        } else {
            alert("Wprowadź dane do formularza");
        }
    });
});
