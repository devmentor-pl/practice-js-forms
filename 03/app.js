//DZIAŁA
const input = document.querySelector('input'); //ok

const newItem = document.querySelector('.images-list__item--prototype').cloneNode(true);
newItem.style.display = 'block';

//nasłuchiwanie na 'change'
input.addEventListener('change', function(e) {
    const files = e.target.files;
    console.log(files);
    for (let i = 0; i < files.length; i ++) {
        const file = files[i];
        if(file.type.includes('image')) {
            const fileSizeMB = file.size / (1024 * 1024);
            const formattedSize = fileSizeMB.toFixed(2) + 'MB';
            const newImageItem = newItem.cloneNode(true);
            const imageName = newImageItem.querySelector('.images-list__item-name');
            const imageSize = newImageItem.querySelector('.images-list__item-size');
            const imagePreview = newImageItem.querySelector('.images-list__item-img');

            imageName.textContent = file.name;
            imageSize.textContent = formattedSize;

            //dodaję podgląd obrazka
            imagePreview.src = URL.createObjectURL(file);

            document.querySelector('.images-list').appendChild(newImageItem);
        }
    }
})
