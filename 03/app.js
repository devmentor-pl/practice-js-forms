const fileEl = document.querySelector('input');
const liEl = document.querySelector('.images-list__item');
const ulEl = document.querySelector('.images-list');

fileEl.addEventListener('change', readFile);

function readFile(e) {
    
    const files = Array.from(e.target.files);

    if(files){

    files.forEach((file) => {

        if(file.type.includes('image')){

            const reader = new FileReader();

            liElCopy = liEl.cloneNode(true);
            liElCopy.style.display = 'block';

            reader.onload = function(readerEvent){
                const newImg = document.createElement('img');
                newImg.src = readerEvent.target.result;

                liElCopy.appendChild(newImg);
                ulEl.appendChild(liElCopy);
            }

            reader.readAsDataURL(file);

        }
    })
}

}