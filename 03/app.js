const init = function () {
    const fileEl = document.querySelector('input');
    fileEl.addEventListener("change", readFile);
};

document.addEventListener("DOMContentLoaded", init);

const readFile = function (e) {
    const file = Array.from(e.target.files);

    file.forEach(function (element) {

        if(element && element.type.includes("image")) {

            const name = element.name;
            const size = (element.size / (1024 * 1024)).toFixed(2) + " MB";

            const ulList = document.querySelector(".images-list");

            const reader = new FileReader();
                reader.onload = function(readerEvent) {
                const newLi = createImgElement(name, size, readerEvent.target.result);
                ulList.appendChild(newLi);
            }
            reader.readAsDataURL(element);
        };
    });
    
};

const createImgElement = function (name, size, src) {
    
    const ulList = document.querySelector(".images-list");
    const liEl =  document.querySelector(".images-list__item--prototype");
    const cloneLi = liEl.cloneNode(true);
    cloneLi.classList.remove("images-list__item--prototype");

    const liHeader = cloneLi.querySelector(".images-list__item-name");
    const liImg = cloneLi.querySelector(".images-list__item-img");
    const liFooter = cloneLi.querySelector(".images-list__item-size");
    
    liImg.src = src;
    liHeader.innerText = name;
    liFooter.innerText = size;

    return cloneLi

}