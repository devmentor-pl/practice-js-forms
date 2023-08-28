const inputFile = document.querySelector("input");
const imagesList = document.querySelector("ul");

const setImage = function (e) {
  const file = e.target.files[0];
  if (file && file.type.includes("image")) {
    const reader = new FileReader();
    reader.onload = function (readerEvent) {
      const imageSrc = readerEvent.target.result;
      const name = file["name"];
      const size = file["size"];
      createElement(imageSrc, name, size);
    };
    reader.readAsDataURL(file);
  }
};

function createElement(imageSrc, name, size) {
  const imagesListItem = imagesList.querySelector("li");
  const newImagesListItem = imagesListItem.cloneNode(true);
  newImagesListItem.classList.remove("images-list__item--prototype");
  const image = newImagesListItem.querySelector("img");
  image.src = imageSrc;
  imagesList.appendChild(newImagesListItem);
  addTextContentToElement(newImagesListItem, name, size);
}

function addTextContentToElement(listItem, name, size) {
  const header = listItem.firstElementChild;
  const footer = listItem.lastElementChild;
  const TotalSizeMB = bytesToMB(size);
  header.innerHTML = `${name}`;
  footer.innerHTML = `${TotalSizeMB.toFixed(2)} MB`;
}

function bytesToMB(bytes) {
  var mb = bytes / (1024 * 1024);
  return mb;
}

inputFile.addEventListener("change", setImage);
