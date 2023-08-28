const file = document.querySelector('input[type="file"]');
const list = document.querySelector('.images-list');
const image = document.querySelector('.images-list__item');
const imageProto = document.querySelector('.images-list__item--prototype');

file.addEventListener('change', showGallery);


function showGallery(e) { 
    const files = [...e.target.files];

    files.forEach(function(file) {
        
        if(file && file.type.includes('image')) {
            const imageProtoClone = imageProto.cloneNode(true);
            imageProtoClone.classList.remove('images-list__item--prototype');

            const header = imageProtoClone.querySelector('header');
            const footer = imageProtoClone.querySelector('footer');

            list.appendChild(imageProtoClone);

            const reader = new FileReader();

        reader.onload = function(readerEvent) {
            const newImg = imageProtoClone.querySelector('img');
            newImg.src = readerEvent.target.result;
            imageProtoClone.insertBefore(newImg, footer);

            header.innerText = file.name;
            footer.innerText = (file.size / Math.pow(1024, 2)).toFixed(2) + 'MB';
            };
        reader.readAsDataURL(file);
        }

    })
}
