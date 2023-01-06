const fileEl = document.querySelector('.files input');
const filesList = [];

fileEl.addEventListener('change', getFile);

function getFile(e) {
    const inputFilesList = e.target.files;

    for (let i = 0; i < inputFilesList.length; i++) {
        const file = inputFilesList[i];

        if (file && file.type.includes('image')) {
            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const newImg = document.createElement('img');
                newImg.src = readerEvent.target.result;

                const newFile = new ImgFile(file, newImg);

                filesList.push(newFile);
            }
            reader.readAsDataURL(file);
        } else {
            alert('Plik musi być obrazkiem!');
        }
    };
}

const ImgFile = function (initFile, initNewImg) {
    this.fileName = initFile.name;
    // Nie jestem pewien co do wartości, bo teoretycznie o ile dobrze pamiętam powinno się to dzielić przez 1024, ale wtedy wychodzi inna wartość niż rozmiar obrazka, który podpowiada mi system
    this.fileSize = parseFloat((initFile.size / 1000) / 1000).toFixed(2) + ' MB';
    this.fileImg = initNewImg;
    this.fileSrc = initNewImg.src;
    this.showImgList();
}

ImgFile.prototype.createImgItem = function () {
    const fileName = this.fileName;
    const fileSize = this.fileSize;
    const fileSrc = this.fileSrc;

    const imagesList = fileEl.parentElement.nextElementSibling;
    const imagesItemProto = imagesList.children[0];

    const imagesItem = imagesItemProto.cloneNode(true);
    imagesItem.classList.remove('images-list__item--prototype');
    imagesItem.children[0].innerText = fileName;
    imagesItem.children[1].setAttribute('src', fileSrc);
    imagesItem.children[2].innerText = fileSize;

    return imagesItem;
}

ImgFile.prototype.showImgList = function () {
    const imageItem = this.createImgItem();
    const imagesList = fileEl.parentElement.nextElementSibling;

    imagesList.appendChild(imageItem);
}

