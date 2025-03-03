document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usersList = document.querySelector(".users-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        if (firstName && lastName) {
            const li = document.createElement("li");
            li.classList.add("users-list__person");
            li.textContent = firstName + " " + lastName;
            
            usersList.appendChild(li);
            
        }
        else {
            alert('Podaj wszystkie dane');
        }
    });
});
