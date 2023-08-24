const inputFile = document.querySelector('input');
const imagesList = document.querySelector('ul');

const setImage = function(e) {
    const file = e.target.files[0];
    if (file && file.type.includes('image')) {
        const reader = new FileReader();
        reader.onload = function(readerEvent) {
        const imagesListItem = imagesList.querySelector('li');
        const newImagesListItem = imagesListItem.cloneNode(true);
        newImagesListItem.classList.remove('images-list__item--prototype');
        const image = newImagesListItem.querySelector('img');
        image.src = readerEvent.target.result;
        imagesList.appendChild(newImagesListItem);
        const name = file['name'];
        const size = file['size'];
        const TotalSizeMB = bytesToMB(size)
        const header = newImagesListItem.firstElementChild;
        const footer = newImagesListItem.lastElementChild;
        header.innerHTML = `${name}`;
        footer.innerHTML = `${TotalSizeMB.toFixed(2)} MB`;
        }
        reader.readAsDataURL(file);
        
    }
}

function bytesToMB(bytes) {
    var mb = bytes / (1024 * 1024);
    return mb;
}

inputFile.addEventListener('change', setImage);