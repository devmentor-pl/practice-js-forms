const form = document.querySelector("form");
const ul = document.querySelector(".users-list");
const handleSubmit = function(e){
    e.preventDefault();
    
    // function getValue(e,inputName){
    //     const value = e.target.elements[`${inputName}`].value;
    //     return value
    // }
    
    const firstName = e.target.elements["firstName"].value;

    const lastName = e.target.elements["lastName"].value;
    
    // const lastName = getValue(e, "lastName" );
    if(lastName && firstName){
        const li = document.createElement("li");
    li.classList.add("user-list__person");
    li.textContent = `${firstName} ${lastName}`;

    ul.appendChild(li);
    
    e.target.elements["firstName"].value = "";
    e.target.elements["lastName"].value = ""
    } else {
        alert("Uzupełnij wszystkie pola")
    }
    
    // firstName.value ="";
    // lastName.value ="";
    // Array.from(e.target.elements["name"]).forEach(item =>{
    //     // item.value = ""
    //     console.log(item)
    // })
    

}

// const handleSubmit = function(e){
//     e.preventDefault();
//     // console.log(e.target.elements)
//     const txtInputs = form.querySelectorAll("[name]");
//     // console.log(txtInputs)
//     const li = document.createElement("li");
//     li.classList.add("user-list__person");
//     txtInputs.forEach(input => {
//         li.textContent+=`${input.value} `;
//         input.value =""
//     })
//     ul.appendChild(li);

// }
form.addEventListener("submit", handleSubmit)