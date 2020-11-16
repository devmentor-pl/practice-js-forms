const prototypeList = document.querySelector(".images-list__item--prototype");
const ulElement = document.querySelector(".images-list")
const fileEl = document.querySelector('input');
const readerArr = [];
fileEl.addEventListener('change', showFile);
function showFile (e) {
    const readFile = e.target.files[0];
    console.log(readFile);
    if (readFile && readFile.type.includes("image")) {
        var reader = new FileReader();
        readerArr.push(reader);
        //reader.onload = function(readerEvent) {
        //const cln = prototypeList.cloneNode(true);
        //cln.classList.remove("images-list__item--prototype");
        //ulElement.appendChild(cln);
        
        //const img = document.querySelectorAll(".images-list__item-img");
        //console.log(img);
        //img[1].src = readerEvent.target.result;
        //}
       // reader.readAsDataURL(readFile);
    }
    readerArr.forEach(function(element) {
        element.onload = function(readerEvent) {
            const cln = prototypeList.cloneNode(true);
            cln.classList.remove("images-list__item--prototype");
            ulElement.appendChild(cln);
            
            const img = document.querySelectorAll(".images-list__item-img");
            console.log(img);
            img[1].src = readerEvent.target.result;
            }
            element.readAsDataURL(readFile);
    })
}
