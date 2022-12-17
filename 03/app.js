document.addEventListener('DOMContentLoaded', init);

function init() {
    const inputEl = document.querySelector('input');
    if (inputEl) {
        inputEl.addEventListener('change', handleChange);
    }
}

function handleChange(e) {
    const prototypeElement = document.querySelector('.images-list__item--prototype');
    const ulElement = document.querySelector('.images-list');


    const fileList = Array.from(e.target.files);

    fileList.forEach(function (file) {

        const liElement = prototypeElement.cloneNode(true);
        const headerElement = liElement.querySelector('header');
        const footerElement = liElement.querySelector('footer');
        const imgElement = liElement.querySelector('.images-list__item-img');

        const fileName = file.name;
        const fileSize = (file.size / (1024 * 1024)).toFixed(2) + 'MB';

        headerElement.innerText = fileName;
        footerElement.innerText = fileSize;
        liElement.classList.remove('images-list__item--prototype');

        ulElement.appendChild(liElement);

        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            const image = e.target.result;
            imgElement.src = image;
        });

        reader.readAsDataURL(file);
    });

};

