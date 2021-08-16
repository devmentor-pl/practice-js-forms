const imagesListContainer = document.querySelector('.images-list');
const imagesListItemPrototype = imagesListContainer.querySelector('.images-list__item--prototype');
let imagesListItem = imagesListItemPrototype.cloneNode(true);

const inputForImage = document.querySelector('[type=file]');


function loadImagesInfo (e) {
  const file = e.target.files;

  for(let i = 0; (i < file.length); i++) {
  const name = file[i].name;
  const size = Number(file[i].size);
  const sizeMB = (size / 1048576).toFixed(2);
  let imagesListItem = imagesListItemPrototype.cloneNode(true);
  imagesListItem.classList.remove('images-list__item--prototype');
  imagesListItem.textContent =
  `File name => ${name} File size => ${sizeMB}MB`
  imagesListContainer.appendChild(imagesListItem)
  }
}

inputForImage.addEventListener('change', loadImagesInfo)