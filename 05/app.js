//walidacja - czy powinniśmy sprawdzać coś jeszcze poza kodem pocztowym?
//imię, nazwisko - czy nie ma cyfr?

const zipType = document.querySelector('[name="zip"]');

zipType.addEventListener('focusout', function(e) {
    const userImput = e.target.value;
    console.log(userImput);
    checkPostalCode(userImput);
});
const patternValue = zipType.getAttribute('pattern');
console.log(patternValue);

function checkPostalCode(value) {
    const regex = new RegExp(patternValue);
    const result = regex.test(value);
    console.log(result);
}
// numberTypes.forEach(function(num) {
//     num.addEventListener('input', checkNumber);
// })

// function checkNumber(e) {
//     //powinniśmy sprawdzić czy pattern jest zachowany
//     const num = e.target.value;
//     console.log(num);
//     //sprawdź czy ma 6 znakow
//     if(num.length = 6) {
//         const numFirst = num.substr(0, 2);
//         // console.log(numFirst);
//         const dash = num.substr(2, 2);
//         // console.log(dash);
//         const numSecond = num.substr(3, 5);
//         // console.log(numSecond);
//     }
    // if(isNaN(num)) {
    //     e.target.style.border = '1px solid red';
    //     alert('Wprowadzono niepoprawną wartość');
    // } 
// } 