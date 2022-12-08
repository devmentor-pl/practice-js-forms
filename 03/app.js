const inputEl = document.querySelector('input');
inputEl.addEventListener('change', showImg);

const ulEl = document.querySelector('ul');
const liEl = document.querySelector('.images-list__item--prototype');

function showImg(e) {
    const filesNumber = inputEl.files.length;
    for(let i=0; i < filesNumber; i++) {
        const file = e.target.files[i];
        if(file && file.type.includes('image')) {
            const newLiEl = function checkImg(file) {
                const newLiEl = liEl.cloneNode(true);
                newLiEl.classList.remove('images-list__item--prototype');
                ulEl.appendChild(newLiEl);
                const imgName = file.name;
                const imgSize = file.size;
                const headerEl = newLiEl.querySelector('header');
                const footerEl = newLiEl.querySelector('footer');
                headerEl.innerText = imgName;
                footerEl.innerText = imgSize;

                return newLiEl;
            }

        const reader = new FileReader();
        reader.onload = function(readerEvent) {
            const imgFile = newLiEl.querySelector('img');
            imgFile.src = readerEvent.target.result;
        }

        reader.readAsDataURL(file);

        }
    }
}