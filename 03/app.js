//input.value

const input = document.querySelector('input');
console.log(input.value)
const liToClone = document.querySelector('.images-list__item');

input.addEventListener('change', (e) => {
    const allFiles = Array.from(e.target.files);

    allFiles.forEach(file => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const li = liToClone.cloneNode(true);
            li.classList.remove('images-list__item--prototype');
            const ul = liToClone.parentElement;
            ul.appendChild(li);

            li.querySelector(".images-list__item-name").textContent = file.name;
            li.querySelector(".images-list__item-img").src = e.target.result;

            const mbSize = (file.size / (1024*1024)).toFixed(2);
            li.querySelector(".images-list__item-size").textContent = `rozmiar: ${mbSize} MB`;
        }

        fileReader.readAsDataURL(file)
    }); 
})