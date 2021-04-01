//input.value

const input = document.querySelector('input');
console.log(input.value)
const liToClone = document.querySelector('.images-list__item');

input.addEventListener('change', (e) => {

    const allFiles = Array.from(input.files);

    allFiles.forEach(file => {
        const li = liToClone.cloneNode(true);
        li.classList.remove('images-list__item--prototype');
        const ul = liToClone.parentElement;
        ul.appendChild(li);

        li.querySelector(".images-list__item-name").textContent = file.name;
        li.querySelector(".images-list__item-img").src = input.value;

        const mbSize = (file.size / (1024*1024)).toFixed(2);
        li.querySelector(".images-list__item-size").textContent = mbSize;
        console.log(mbSize)
    }); 
})