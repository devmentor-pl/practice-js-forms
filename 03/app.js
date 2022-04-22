const inputFile = document.querySelector('input');
const imageList = document.querySelector('.images-list')
const liElement = document.querySelector('.images-list__item--prototype');

function getMb(bytesValue) {
    return (bytesValue / Math.pow(1024, 2)).toFixed(2);
}

function uploadFile(e) {
    e.preventDefault();
    const files = [...e.target.files];

    files.forEach(function (el) {
        if (el.type.includes('image')) {
            const reader = new FileReader();

            const liCloneNode = liElement.cloneNode(true);
            const [header, img, footer] = liCloneNode.children;
            liCloneNode.classList.remove('images-list__item--prototype');

            header.textContent = el.name;
            footer.textContent = `${getMb(el.size)} MB`;

            reader.onload = function (readerEvent) {
                img.setAttribute('src', readerEvent.target.result);
            };
            reader.readAsDataURL(el);
            imageList.appendChild(liCloneNode);
        };
    });
};

inputFile.addEventListener('change', uploadFile);