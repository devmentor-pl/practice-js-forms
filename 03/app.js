document.addEventListener('DOMContentLoaded', init);

function init() {
    const input = document.querySelector('input');
    input.addEventListener('change', showFiles);    
}

function showFiles(e) {
    const files = [...e.target.files];
        
    files.forEach(file => {
        file && file.type.includes('image') ? readFile(file) : alert('Your file is not an image.');
    });
}

function readFile(file) {
    const reader = new FileReader();
    reader.addEventListener('load', onLoad.bind(null, file));
    reader.readAsDataURL(file);
}

function onLoad (file, e) {
    const imagesList = document.querySelector('.images-list');
    const cloneImagesListItemPrototype = createLiElem(file, e);
    imagesList.appendChild(cloneImagesListItemPrototype);
}

function createLiElem(file, e) {
    const imagesListItemPrototype = document.querySelector('.images-list__item--prototype');
    const cloneImagesListItemPrototype = imagesListItemPrototype.cloneNode(true);
    const [header, img, footer] = cloneImagesListItemPrototype.children;

    header.innerText = file.name;
    footer.innerText = (file.size / (1024*1024)).toFixed(2) + 'MB';        
    imgSrc = e.target.result;
    img.src = imgSrc;

    cloneImagesListItemPrototype.classList.remove('images-list__item--prototype');

    return cloneImagesListItemPrototype;
}