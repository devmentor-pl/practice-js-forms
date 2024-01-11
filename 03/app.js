/* const liEl = document.querySelector('.images-list__item--prototype');
const inpFile = document.querySelector('input');
const imgList = document.querySelector('.images-list');

function 
*/
document.addEventListener("DOMContentLoaded, init");

function init() {
    const inpEl = document.querySelector("input");
    if (inputEl) {
        inputEl.addEventListener("change", changeHandl);
    }
}

function changeHandl(e) {
    const liEl = document.querySelector(".images-list__item--prototype");
    const ulEl = document.querySelector(".images-list");
    const filesList = Array.from(e.target.files);

    filesList.forEach((file) => {
        if (file.type.indexOf("image") >= 0) {
            const liEl = protEl.cloneNode(true);
            
        }
    })
}