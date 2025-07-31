const fileInput = document.querySelector('input');
const imageList = document.querySelector('.images-list');
const imageItemProto = document.querySelector('.images-list__item');

fileInput.addEventListener('change',readFiles);

function readFiles(e) {

    const filesList = [... e.target.files];
    
    filesList.forEach(function(file) {
    
        if (file.type.includes('image')) {
            readImageFile(file);            
        }        
    }); 
}

function readImageFile(file) {

    const reader = new FileReader();
    
    reader.onload = createImgElement.bind(this, file);
    reader.readAsDataURL(file);
}

function createImgElement(file, readerEvent) {

    const newItem = imageItemProto.cloneNode(true);
    const imageContent = newItem.querySelector('.images-list__item-img');
    const imageName = imageContent.previousElementSibling;
    const imageSize = imageContent.nextElementSibling;

    newItem.classList.remove('images-list__item--prototype');
    imageContent.src = readerEvent.target.result;
    imageName.textContent = file.name;
    imageSize.textContent = convertToMB(file.size);

    imageList.appendChild(newItem);    
}

function convertToMB(bytes) {

    const result = Number(bytes)/(1024*1024);

    return result.toFixed(2);

}