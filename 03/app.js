document.addEventListener("DOMContentLoaded", function(){
    const inputEl = document.querySelector('input[type="file"]');
    const imagesList = document.querySelector(".images-list");
    const prototypeItem = document.querySelector('.images-list__item--prototype');
inputEl.addEventListener("change", function(e){
    const files = e.target.files;
    for(const file of files) {
        if (file.type.includes("image")) {
            const listItem = prototypeItem.cloneNode(true);
            listItem.classList.remove("images-list__item--prototype");
            
            const imgElement = listItem.querySelector(".images-list__item-img");
            const nameElement = listItem.querySelector(".images-list__item-name");
            const sizeElement = listItem.querySelector(".images-list__item-size");
            
            nameElement.textContent = file.name;
            sizeElement.textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";
            
            const reader = new FileReader();
            reader.onload = function (e) {
                imgElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
            
            imagesList.appendChild(listItem);
        }
    }
        
})
})