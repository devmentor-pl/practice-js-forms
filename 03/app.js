const fileEl = document.querySelector('input');

fileEl.addEventListener('change', downloadImg)

function downloadImg(e){
const fileList = e.target.files;
const fileListArray = Array.from(fileList);
fileListArray.forEach(function(item){
    console.log(item);
    if(item && item.type.includes('image')) {
        const reader = new FileReader();
    
        reader.onload = function(readerEvent) {
            ulEl = document.querySelector('.images-list');
                if(ulEl){
                    const newLiEl = document.createElement('li');
                    newLiEl.classList.add('images-list__item');
                    ulEl.appendChild(newLiEl);
                    const newHeaderEl = document.createElement('header');
                    newHeaderEl.classList.add('images-list__item-name');
                    newHeaderEl.innerText = item.name;
                    newLiEl.appendChild(newHeaderEl);
                    const newImg = document.createElement('img');
                    newImg.classList.add('images-list__item-img');
                    newImg.src = readerEvent.target.result;
                    newLiEl.appendChild(newImg);
                    const newFooterEl = document.createElement('footer');
                    newFooterEl.classList.add('images-list__item-size');
                    newFooterEl.innerText = ((item.size)/1048576).toFixed(2) + ' MB';
                    newLiEl.appendChild(newFooterEl);
                }
            };
        reader.readAsDataURL(item);
        }
    });
}