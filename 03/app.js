const imagesListElement = document.querySelector(".images-list");
const listElementPrototype = document.querySelector(
  ".images-list__item--prototype"
);
const fileElement = document.querySelector("input[type=file]");

fileElement.addEventListener("change", (e) => {
  const images = [...e.target.files];
  images.forEach((image) => {
    if (image.type.includes("image")) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const src = reader.result;
        const imageItem = createImageItem(image.name, image.size, src);
        imagesListElement.appendChild(imageItem);
      });

      reader.readAsDataURL(image);
    }
  });
});

function createImageItem(name, size, src) {
  const newImageItem = listElementPrototype.cloneNode(true);
  newImageItem.className = "images-list__item";
  newImageItem.querySelector(".images-list__item-name").textContent = name;
  newImageItem.querySelector(".images-list__item-img").src = src;
  newImageItem.querySelector(".images-list__item-size").textContent = size;
  return newImageItem;
}
