const inputEl = document.querySelector('input');
inputEl.addEventListener('change', displayImage);
const ulEl = document.querySelector('ul');
const liEl = document.querySelector('.images-list__item--prototype');

function displayImage(e) {
    const numFiles = inputEl.files.length;
    for (let i = 0; i < numFiles; i++) {
        const file = e.target.files[i];
        if (file && file.type.includes('image')) {
            prepareImage(file);
        }
    }
}

function prepareImage(file) {
    const newLi = liEl.cloneNode(true);
    newLi.classList.remove('images-list__item--prototype');
    ulEl.appendChild(newLi);
    const size = file.size;
    const name = file.name;
    const header = newLi.querySelector('header');
    const footer = newLi.querySelector('footer');
    header.innerText = name;
    footer.innerText = size;
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = newLi.querySelector('img')
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
}