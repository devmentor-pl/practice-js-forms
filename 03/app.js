const fileInput = document.querySelector('input');
const imgList = document.querySelector('ul');
const prototype = imgList.firstElementChild;

fileInput.addEventListener('change', getFile)

function getFile(e) {
    const allFiles = Array.from(e.target.files);
    
    allFiles.forEach(function(file){
        if(file.type.includes('image')) {
            const reader = new FileReader();
    
            reader.onload = createItemWithData; 
            reader.readAsDataURL(file);
        }

        function createItemWithData (event) {
            const newLi = prototype.cloneNode(true);
            const newImg = newLi.querySelector('.images-list__item-img');
            const newHeader = newLi.querySelector('.images-list__item-name');
            const newFooter = newLi.querySelector('.images-list__item-size');
        
        
            newLi.classList.remove('images-list__item--prototype');
            newImg.src = event.target.result;
            newHeader.innerText = file.name;
            newFooter.innerText = (file.size/(1024*1024)).toFixed(2) + "mb";
        
            imgList.appendChild(newLi);
        }
    })
    
}




