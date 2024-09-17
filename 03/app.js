const fileEl = document.querySelector('input');

const proto = document.querySelector('.images-list__item--prototype')
const imgList = proto.cloneNode(true);
imgList.classList.remove('images-list__item--prototype')
fileEl.addEventListener('change', readFile);
function readFile(e){
    const file = e.target.files[0]

    if(file && file.type.includes('image')){
        const reader = new FileReader();

        reader.onload = function(readerEvent){
            const newImg = document.createElement('img')
            newImg.src = readerEvent.target.result
            imgList.appendChild(newImg)

        }
        reader.readAsDataURL(file)
    }
}