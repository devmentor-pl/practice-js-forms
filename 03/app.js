const fileEl = document.querySelector('input');
fileEl.addEventListener('change', readFile);

function readFile(e) {
    for(let i=0; i<=e.target.files.length; i++) {
        const file = e.target.files[i];

        if(file && file.type.includes('image')) {
            const reader = new FileReader();

            reader.onload = function(readerEvent) {

                const imgList = document.querySelector('.images-list');
                
                const newItem = createItem();
                imgList.appendChild(newItem);

                const newHeader = createHeader();
                newHeader.innerHTML = file.name;
                newItem.appendChild(newHeader);

                const newImg = createImg();
                newImg.src = readerEvent.target.result;
                newItem.appendChild(newImg);

                const newFooter = createFooter()
                newItem.appendChild(newFooter)
                newFooter.innerHTML = bytesToMegabytes(file.size).toFixed(2) + ' MB';
            };
            reader.readAsDataURL(file);
        }
    }
}

function createItem() {
    item = document.createElement('li');
    item.classList.add('images-list__item');
    return item;
}

function createHeader() {
    header = document.createElement('header');
    header.classList.add('images-list__item-name');
    return header;
}

function createImg() {
    img = document.createElement('img');
    img.classList.add('images-list__item-img');
    return img;
}

function createFooter() {
    footer = document.createElement('footer');
    footer.classList.add('images-list__item-size');
    return footer;
}

function bytesToMegabytes(bytes) {
    return bytes / 1048576;
}