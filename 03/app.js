//nasłuchiwanie do inputa "change"
// tablica - pliki wpisane
const input = document.querySelector('input');
console.log(input);
const fileList = input.type.includes('image');
console.log(fileList);

const newItem = document.querySelector('.images-list__item--prototype').cloneNode(true);
console.log(newItem); //ok
newItem.classList.remove()