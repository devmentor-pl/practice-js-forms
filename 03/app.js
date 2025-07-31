const inputFile = document.querySelector('input[type=file]');
const imagesList = document.querySelector('.images-list')
const liElProto = imagesList.querySelector('li.images-list__item--prototype')

const addImageToList = function(e) {
  const file = e.target.files;
  const fileArr = Array.from(file);

  fileArr.forEach(function(el) {
    if (el.type.includes('image')) {
      const liEl = liElProto.cloneNode(true);
      liEl.classList.remove('images-list__item--prototype');
      
      const imageName = liEl.querySelector('.images-list__item-name') 
      imageName.textContent = el.name;
      const imageSize = liEl.querySelector('.images-list__item-size')
      imageSize.textContent = (el.size /1024 /1024).toFixed(2) + 'MB';
      const itemImg = liEl.querySelector('.images-list__item-img');
      readFile(el, itemImg)

      imagesList.appendChild(liEl)
    }
  })
}

const readFile = function(el, img) {
  const reader = new FileReader();

 reader.onload = function(readerEvent) {
    img.src = readerEvent.target.result;
    // console.log(img)
  }
  reader.readAsDataURL(el);
}

inputFile.addEventListener('change', addImageToList)
