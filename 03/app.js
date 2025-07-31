const inputEl = document.querySelector('input');
const imagesList = document.querySelector('.images-list');

inputEl.addEventListener('change', addFiles);

function addFiles(e){
    const filesList = e.target.files;
    const prototypeElement = document.querySelector('.images-list__item--prototype');

    const filesListArr = Array.from(filesList);

    filesListArr.forEach(function(file){
        const liElement = prototypeElement.cloneNode(true);
        const headerElement = liElement.querySelector('header');
        const footerElement = liElement.querySelector('footer');
        const imgElement = liElement.querySelector('.images-list__item-img');

        const fileName = file.name;
        const fileSize = (file.size / 1024).toFixed(2) + 'MB';

        headerElement.innerText = fileName;
        footerElement.innerText = fileSize;
        liElement.classList.remove('images-list__item--prototype');

        imagesList.appendChild(liElement);

        const reader = new FileReader();

        reader.onload = function(e){
            const newImg = e.target.result;
            imgElement.src = newImg;
        };
        reader.readAsDataURL(file);
    });
};