document.addEventListener('DOMContentLoaded', init);

function init() {
    // const images = [];

    const fileSelector = document.querySelector('input');
    const imagesList = document.querySelector('.images-list');
    const itemPrototype = document.querySelector('.images-list__item--prototype');


    if (fileSelector) {
        fileSelector.addEventListener('change', listImages);
    }

    function listImages(event) {
        const files = [... event.target.files]
        const images = files.filter(function(file){
            return file['type'].includes('image');
        })
        console.log(images)

        images.forEach(function(image) {
            const newItem = itemPrototype.cloneNode();
            console.log(newItem)
            newItem.classList.remove('images-list__item--prototype');
            imagesList.appendChild(newItem);
            Array.from(itemPrototype.children).forEach(function(childToCopy){
                const childToAppend = childToCopy.cloneNode();
                newItem.appendChild(childToAppend);
            })

            const name = newItem.querySelector('header');
            name.innerText = image['name'];

            const footer = newItem.querySelector('footer');
            footer.innerText = (image['size'] / (1024*1024)).toFixed(2) + ' MB';

            const img = newItem.querySelector('img');
            
            const reader = new FileReader();
            reader.addEventListener('load', function(event) {
                const image = event.target.result;
                img.src = image;
            });

            reader.readAsDataURL(image);

        })
    }


}