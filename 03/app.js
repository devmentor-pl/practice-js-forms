const fileEl = document.querySelector('input')
fileEl.addEventListener('change', showPictures)


function showPictures(e){
    const ulEl = document.querySelector('.images-list')
    const prototype = document.querySelector('.images-list__item--prototype')   
    const file = e.target.files;
    const arr = Array.from(file)

    arr.forEach(function(file) {
        if(file && file.type.includes('image')) {
            const reader = new FileReader();
 
             reader.onload = function(readerEvent) {
                 const imgList = prototype.cloneNode(true)
                 ulEl.appendChild(imgList)
 
                 const fileName = imgList.querySelector('.images-list__item-name')
                 const fileSize = imgList.querySelector('.images-list__item-size')
                 const fileImg = imgList.querySelector('.images-list__item-img')
 
                 fileImg.src = readerEvent.target.result;
                 fileName.innerText = file.name
                 fileSize.innerText =(file.size / (1024*1024)).toFixed(2) +'MB'

                 imgList.classList.remove('images-list__item--prototype') 
             }
         reader.readAsDataURL(file);
    }})
}

