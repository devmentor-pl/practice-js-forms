const fileEl = document.querySelector('input');
const ulEl = document.querySelector('.images-list');

if (fileEl) {
  fileEl.addEventListener('change', displayImage);
}

function handleFileRead(prototype, file, reader) {
  const imgItem = prototype.cloneNode(true);
  imgItem.classList.remove('images-list__item--prototype');
  const header = imgItem.querySelector('header');
  const img = imgItem.querySelector('img');
  const footer = imgItem.querySelector('footer');
  header.textContent = file.name;
  img.setAttribute('src', reader.result);
  footer.textContent = convertToMBs(file.size);
  ulEl.appendChild(imgItem);
}

// helper functions

function convertToMBs(size) {
  return `${(size / 1024 ** 2).toFixed(2)}MB`;
}

function convertToArray(list) {
  return Array.from(list);
}


function displayImage(e) {
  const files = e.target.files;
  const arr = convertToArray(files);
  const imagesListItemPrototype = document.querySelector('.images-list__item--prototype')

  arr.forEach(file => {
    if (file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.addEventListener('load', function() {handleFileRead(imagesListItemPrototype, file, reader)}, false)
      reader.readAsDataURL(file);
    } else {
      alert('Wybierz plik graficzny!!!')
    }
  })
}
