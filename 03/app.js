const input = document.querySelector('input[type="file"]');
const list = document.querySelector(".images-list");
const itemPrototype = list.querySelector(".images-list__item--prototype");
input.setAttribute("accept", "image/*");
input.addEventListener("change", showFile);

function showFile(e) {
  const files = e.target.files;
  //   console.log(file.name, file.size, file.type);
  for (const file of files) {
    if (file && file.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const listItem = itemPrototype.cloneNode(true);
        listItem.classList.remove("images-list__item--prototype");
        const listImage = listItem.querySelector(".images-list__item-img");
        const imageHeader = listItem.querySelector(".images-list__item-name");
        const imageFooter = listItem.querySelector(".images-list__item-size");
        const bitToMB = 1048576;
        imageHeader.innerText = file.name;
        imageFooter.innerText = (file.size / bitToMB).toFixed(2) + " MB";
        listImage.src = readerEvent.target.result;
        list.appendChild(listItem);
      };
      reader.readAsDataURL(file);
    }
  }
}
