const fileEl = document.querySelector('input');
fileEl.value = "";
const ulEl = document.querySelector('ul');
const liPrototype = document.querySelector('.images-list__item--prototype');
fileEl.addEventListener('change', readFile);
function readFile(e) {
    const fileList = []
    for(let i = 0; i < fileEl.files.length; i++) {
            if(e.target.files[i].type.includes('image')) {
            fileList.push(fileEl.files[i]);
            const reader = new FileReader();
            reader.onload = function(readerEvent) {
                const newLi = liPrototype.cloneNode(true);
                const newImg = newLi.querySelector('img');
                newImg.src = readerEvent.target.result;
                ulEl.appendChild(newLi);
                newLi.style.display = "block";
                newLi.firstChild.textContent = fileEl.files[i].name;
                size = fileEl.files[i].size/1048576;
                newLi.lastChild.textContent = size.toFixed(2) + " MB";
            };
            reader.readAsDataURL(fileEl.files[i]);
        }
    }
}

