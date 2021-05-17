const init = function () {
    const formByQuery = document.querySelector("form");

    if(formByQuery) {
        formByQuery.addEventListener("submit", checkData)
    };
};

document.addEventListener("DOMContentLoaded", init);

const checkData = function (e) {

    const ulElement = document.querySelector(".messages")
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.lastName.value;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const zip = e.target.elements.zip.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;
    const messages = [];

    if(firstName.length === 0) {
        messages.push("Name is required");
    };

    if(lastName.length === 0) {
        messages.push("Last name is required");
    };

    if(street.length === 0) {
        messages.push("Street is required");
    };

    if(houseNumber.length === 0 && houseNumber <= 0) {
        messages.push("Incorrect house number");
    };

    if(flatNumber.length === 0 && flatNumber <= 0) {
        messages.push("Incorrect flat number");
    };

    if(zip.length === 0) {
        messages.push("Incorrect zip code");
    };

    if(city.length === 0) {
        messages.push("City is required");
    };

    if(voivodeship.length === 0) {
        messages.push("Voivodeship is required");
    }

    if(messages.length > 0) {
        e.preventDefault();

        messages.forEach(function (element) {
            const liElement = document.createElement("li");
            liElement.innerText = element;
            liElement.style.color = "red";
            ulElement.appendChild(liElement);
        });
    } else {
        
        if(ulElement) {
            while (ulElement.children.length > 0) {
                ulElement.removeChild(ulElement.lastElementChild);
            }

        alert("The form has been sent!")
        
        e.preventDefault()
    }

   
}}