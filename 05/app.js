const firstName = document.getElementsByName("firstName");
const lastName = document.getElementsByName("lastName");
const street = document.getElementsByName("street");
const houseNumber = document.getElementsByName("houseNumber");
const flatNumber = document.getElementsByName("flatNumber");
const zip = document.getElementsByName("zip");
const city = document.getElementsByName("city");
const voivodeship = document.getElementsByName("voivodeship");
const form = document.querySelector("form");
const ulElement = document.querySelector("ul");
const arr = [];
arr.push(firstName[0], lastName[0], street[0], houseNumber[0], flatNumber[0], zip[0], city[0], voivodeship[0])
/*
firstName[0].addEventListener("submit", function(e) {
    const name = e.target.value;
    if (name == null || name == "") {
        console.log("Name can't be blank!")
    }
})
*/
form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName[0].value === '' || firstName[0].value == null) {
      messages.push('Name is required')
      console.log(messages);
    }
    e.preventDefault();
  
    
  })


