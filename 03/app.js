const prototypeList = document.querySelector(".images-list__item--prototype");
const ulElement = document.querySelector(".images-list")
const fileEl = document.querySelector('input');
const readerArr = [];
fileEl.addEventListener('change', showFile);// za kazdym razem, gdy zadziala event readerArr.forEach bedzie dodawal wszystkie elementu, ktore juz siew  nim zawieraja
function showFile (e) {
    for (let i = 0; i < e.target.files.length; i++) {
    const readFile = e.target.files[i];
    
    console.log(readFile);
    if (readFile && readFile.type.includes("image")) {
        var reader = new FileReader();
        reader.onload = function(readerEvent) {
            const cln = prototypeList.cloneNode(true);
            cln.classList.remove("images-list__item--prototype");
            ulElement.appendChild(cln);
            
            const img = cln.querySelector(".images-list__item-img");
            console.log(img);
            img.src = readerEvent.target.result;
            const name = cln.querySelector(".images-list__item-name");
            name.innerText = readFile.name;
            const size = cln.querySelector(".images-list__item-size");
            
            const sizeFile = readFile.size;
            const sizeDivision = sizeFile / 1024;
               
            
            size.innerText = sizeDivision.toFixed(2) + " " + "MB";
            }
            reader.readAsDataURL(readFile);
    }
    }
       
}
/* readerArr.forEach(function(element) {
    element.onload = function(readerEvent) {
        const cln = prototypeList.cloneNode(true);
        cln.classList.remove("images-list__item--prototype");
        ulElement.appendChild(cln);
        
        const img = document.querySelectorAll(".images-list__item-img");
        console.log(img);
        let num = (element + 1);
        img[1].src = readerEvent.target.result;
        }
        element.readAsDataURL(readFile);// nic sie nie dzieje, nie ma dostepu do readfile/ funkcja wywoluje sie w zlym momencie
}) */
