const inputEl = document.querySelector('input');
// const imageList = document.querySelector('.images-list');
const liElement = document.querySelector('.images-list__item--prototype');
console.log(liElement);
console.log(inputEl);
// console.log(imageList);

inputEl.addEventListener('change', function(el){
    const file = [...el.target.files];

    if (file) {
        file.forEach(function(el){

            if (el.type.includes('image')) {

                const clonedPrototype = liElement.cloneNode(true);
                liElement.parentElement.appendChild(clonedPrototype);

                const reader = new FileReader();
                reader.onload = function(readerEvent){
                    clonedPrototype.querySelector('img').src = readerEvent.target.result;
                }
                reader.readAsDataURL(el);
                // console.log(el.size);
                let imgSizeKB = el.size / 1024;
                let imgSizeMB = (imgSizeKB / 1024).toFixed(2);

                clonedPrototype.querySelector('header').innerText = el.name;
                clonedPrototype.querySelector('footer').innerText = imgSizeMB + " MB";


                clonedPrototype.style.display = 'block';
            }
        });
    }
});