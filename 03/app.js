const imgList = document.querySelector('.images-list');
const input = document.querySelector('input')
const info = document.querySelector('.info');

input.addEventListener('change' , showImg);


function showImg(e) {
    const files = e.target.files;

    if( imgList.children.length > 1 ) {
        while( imgList.children.length > 1 ) {
            imgList.removeChild(imgList.lastElementChild)
        }
    }

    for(let i=0; i<files.length; i++) {

        info.innerText = "";

        if( files && files[i].type.includes('image') ) {

            const reader = new FileReader();

            reader.onload = function(readerEvent) {

                const li = document.querySelector('.images-list__item--prototype');
                const liClone = li.cloneNode(true);

                liClone.firstElementChild.innerText = files[i].name
                liClone.querySelector('img').src = readerEvent.target.result;

                const size = ( ( files[i].size )/1000 ).toFixed(2) ;
                liClone.lastElementChild.innerText = `${size} MB`

                liClone.classList.remove('images-list__item--prototype');

                imgList.appendChild(liClone);
            }
            reader.readAsDataURL(files[i]);
        }
        else {
            info.innerText = "You need to select a photo file"
        }
    }
}
