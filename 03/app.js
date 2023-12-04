const fileEl = document.querySelector('input[type="file"]');
const imagesUl = document.querySelector('.images-list');
fileEl && fileEl.addEventListener('change', showFileData);
function showFileData(e) {
  const file = e.target.files[0];
  console.log(file.type);
  console.log(file.size);
  console.log(file.name);
  if (file && file.type.includes('image')) {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      const itemProto = document.querySelector('.images-list__item--prototype');
      const addedItem = itemProto.cloneNode(true);
      addedItem.classList.remove('images-list__item--prototype');
      const image = addedItem.querySelector('.images-list__item-img');
      image.src = readerEvent.target.result;
      const header = addedItem.querySelector('.images-list__item-name');
      header.innerText = file.name;
      const footer = addedItem.querySelector('.images-list__item-size');
      footer.innerText = file.size;
      imagesUl.appendChild(addedItem);
      console.log(addedItem);
    };
    reader.readAsDataURL(file);
  }
}
