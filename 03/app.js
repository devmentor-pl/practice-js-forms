const imagesContainer = document.querySelector('.images-list');
const imagesItemProto = imagesContainer.firstElementChild;
const fileEl = document.querySelector('input');
fileEl.addEventListener('change', showFileInfo);

function showFileInfo(e) {
    if (imagesContainer.children.length > 1) {
        removeImgs(imagesContainer, 'images-list__item--prototype');
    }
    const fileList = [...e.target.files];
    fileList.forEach(file => {
        if (file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.onload = function (readerEvent) {
                const newLiEl = createLiEl();
                createHeader(newLiEl, file);
                setImgSrc(newLiEl, readerEvent);
                createFooter(newLiEl, file);
                imagesContainer.appendChild(newLiEl);
            }
            reader.readAsDataURL(file);
        }
    })
}

function removeImgs(imagesParent, className) {
    let childrenArr = [...imagesParent.children];
    childrenArr.forEach(el => {
        if (!el.classList.contains(className)) {
            imagesParent.removeChild(el);
        };
    });
}

function createLiEl() {
    const newLiEl = imagesItemProto.cloneNode(true);
    newLiEl.classList.remove('images-list__item--prototype');
    return newLiEl;
}

function createHeader(liEl, file) {
    liEl.firstElementChild.innerText = `Name: ${file.name}`;
}

function setImgSrc(liEl, readerEvent) {
    liEl.querySelector('img').src = readerEvent.target.result;
}

function createFooter(liEl, file) {
    const size = +file.size;
    const sizeMB = (size / (1024 * 1024)).toFixed(2);
    liEl.lastElementChild.innerText = `Size: ${sizeMB} MB`;
}