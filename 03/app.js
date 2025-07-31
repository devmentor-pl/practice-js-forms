const fileEl = document.querySelector('input');
fileEl.addEventListener('change', renderImages);
const ul = document.querySelector(".images-list");
const li = document.querySelector(".images-list__item");
const prototypeLi = ul.firstElementChild;

function renderImages(e){
    ul.innerHTML = "";
    ul.appendChild(prototypeLi);

    const files = e.target.files
    const images = [...files].filter(file =>{
        return file.type.includes("image");
    })
    // console.log(images)
    if(images.length){
        images.forEach(image =>{
            newLi = li.cloneNode(true);
            newLi.classList.remove("images-list__item--prototype");

            const header = newLi.querySelector(".images-list__item-name");
            const img = newLi.querySelector(".images-list__item-img");
            const footer = newLi.querySelector(".images-list__item-size");

            header.textContent = image.name;
            footer.textContent = (image.size/1000000).toFixed(2) + "MB"
            const reader = new FileReader();
            reader.onload = function(readerEvent){
                img.src = readerEvent.target.result;
            }
            reader.readAsDataURL(image);
            ul.appendChild(newLi);
        })
    }
    
}

