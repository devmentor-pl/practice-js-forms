const form = document.querySelector('form');
// const formEl = form.elements.values;
// console.log(formEl);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
})

// for(const formEl of form.elements) {
//     // const firstName = form.value
//     console.log(result);
// }