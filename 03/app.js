const fileEl = document.querySelector('input');
fileEl.addEventListener('change', readFile);

function readFile(e) {
    for(let i=0; i<=e.target.files.length; i++) {
        const file = e.target.files[i];

        if(file && file.type.includes('image')) {
            const reader = new FileReader();

            reader.onload = function(readerEvent) {

                const imgList = document.querySelector('.images-list');

                const newItem = document.createElement('li');
                newItem.classList.add('images-list__item');
                imgList.appendChild(newItem);

                const newItemHeader = document.createElement('header');
                newItemHeader.classList.add('images-list__item-name');
                newItemHeader.innerHTML = file.name;
                newItem.appendChild(newItemHeader);

                const newItemImg = document.createElement('img');
                newItemImg.classList.add('images-list__item-img');
                newItemImg.src = readerEvent.target.result;
                newItem.appendChild(newItemImg);

                const newItemFooter = document.createElement('footer');
                newItemFooter.classList.add('images-list__item-size');
                newItem.appendChild(newItemFooter)
                newItemFooter.innerHTML = bytesToMegabytes(file.size).toFixed(2) + ' MB';
            };
            reader.readAsDataURL(file);
        }
    }
}

function bytesToMegabytes(bytes) {
    return bytes / 1048576;
}