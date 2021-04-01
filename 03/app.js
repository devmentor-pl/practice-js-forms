const inputFile = document.querySelector('input');

inputFile.addEventListener('change', showInfos);

function showInfos(e) {

    for (let i = 0; i < file.length; i++) {
        const file = e.target.files[i]; //elements

        if (file && file.type.includes('image')) {
            const reader = new FileReader();

            reader.onload = function (readerEvent) {
                const newImg = document.createElement('img');


                if (file.length > 0) {
                    const liHidden = document.querySelectorAll('images-list__item--prototype');
                    liHidden.style.display = 'block';
                }

                const nameImg = newImg.elements.name;
                const sizeImg = newImg.elements.size;
                const name = document.querySelector('images-list__item-name');
                const size = document.querySelector('images-list__item-size');
                const ulList = document.querySelectorAll('images-list');

                ulList.cloneNode(ulList);
                ulList.parentElement.appendChild(newImg);
                const newText = name.createTextNode(nameImg);
                const newSize = size.createTextNode(sizeImg);         
            }
            reader.readAsDataURL(file);
        }
    }
}