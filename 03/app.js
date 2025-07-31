const fileElement = document.querySelector('input')
const imagesList = document.querySelector('.images-list')
const liElementProto = document.querySelector('.images-list__item--prototype')

fileElement.addEventListener('change', showImage)


function showImage(e){
    const file = e.target.files[0]
    console.dir(file)
    if(file && file.type.includes('image')){
        const reader = new FileReader();
        
        reader.onload = function(readerEvent){
            const clonedElement = liElementProto.cloneNode(true)
            clonedElement.classList.remove('images-list__item--prototype')
            const sizeInfo = clonedElement.querySelector('.images-list__item-size')
            sizeInfo.textContent = (file.size / 1000000).toFixed(2) + ' MB'
            image = clonedElement.querySelector('img')
            image.src = readerEvent.target.result
            imagesList.appendChild(clonedElement) 
        
        }
    reader.readAsDataURL(file)
}
}
 
