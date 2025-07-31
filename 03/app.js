const imageContainer = document.querySelector(".images-list");
const imageItem = document.querySelector(".images-list__item");
const input = document.querySelector("input");

/*
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
};*/

const createNewItem = function () {
  const newItem = imageItem.cloneNode(true);
  newItem.classList.remove("images-list__item--prototype");
  return newItem;
};

const createNewHeader = function (newItem, file) {
  const newHeader = newItem.querySelector("header");
  newHeader.innerText = file.name;
  return newHeader;
};

const createNewFooter = function (newItem, file) {
  const newFooter = newItem.querySelector("footer");
  newFooter.innerText = file.size.toFixed(2);
  return newFooter;
};

const createGallery = function (e) {
  const files = Array.from(e.target.files);
  files.forEach(function (file) {
    if (file && file.type.includes("image")) {
      createNewItem();
      const newItem = createNewItem();
      createNewHeader(newItem, file);
      createNewFooter(newItem, file);

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

input.addEventListener("change", createGallery);
