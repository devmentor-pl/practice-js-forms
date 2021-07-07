const imageContainer = document.querySelector(".images-list");
const imageItem = document.querySelector(".images-list__item");
const input = document.querySelector("input");

const createGallery = function (e) {
  const files = Array.from(e.target.files);
  files.forEach(function (file) {
    if (file && file.type.includes("image")) {
      const newItem = imageItem.cloneNode(true);
      newItem.classList.remove("images-list__item--prototype");
      const newHeader = newItem.querySelector("header");
      newHeader.innerText = file.name;
      const newFooter = newItem.querySelector("footer");
      newFooter.innerText = file.size.toFixed(2);

      const reader = new FileReader();

      reader.onload = function (readerEvent) {
        const newImg = newItem.querySelector("img");
        newImg.src = readerEvent.target.result;

        imageContainer.appendChild(newItem);
      };
      reader.readAsDataURL(file);
    }
  });
};

/* /* nieudana proba refaktorowania kodu...
nie moge uzyskac dostepu do

const createNewItem = function () {
  const newItem = imageItem.cloneNode(true);
  newItem.classList.remove("images-list__item--prototype");
  return newItem;
};

const createNewHeader = function (newItem) {
  const newHeader = newItem.querySelector("header");
  newHeader.innerText = file.name;
  return newHeader;
};

const newFooter = function (newItem) {
  const newFooter = newItem.querySelector("footer");
  newFooter.innerText = file.size.toFixed(2);
  return newFooter;
};

const createGallery = function (e) {
  const files = Array.from(e.target.files);
  files.forEach(function (file) {
    if (file && file.type.includes("image")) {
      createNewItem();
      createNewHeader(newItem);
      createNewFooter(newItem);

      const reader = new FileReader(newItem);

      reader.onload = function (newItem, readerEvent) {
        const newImg = newItem.querySelector("img");
        newImg.src = readerEvent.target.result;

        imageContainer.appendChild(newItem);
      };
      reader.readAsDataURL(file);
    }
  });
};*/

input.addEventListener("change", createGallery);
console.log(imageContainer);
