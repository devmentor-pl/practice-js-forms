const fileElement = document.querySelector("input");
const imagesList = document.querySelector(".images-list");

fileElement.addEventListener("change", function (e) {
  const files = Array.from(e.target.files);

  files.forEach((file) => {
    const listElementPrototype = imagesList.querySelector(
      ".images-list__item--prototype"
    );
    if (file && file.type.includes("image")) {
      const fileName = file.name;
      const fileSizeMB = (file.size / 1048576).toFixed(2);
      const listElement = listElementPrototype.cloneNode(true);
      listElement.classList.remove("images-list__item--prototype");

      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const newImg = listElement.querySelector(".images-list__item-img");
        newImg.src = readerEvent.target.result;
      };
      reader.readAsDataURL(file);
      const newName = listElement.querySelector(".images-list__item-name");
      newName.textContent = fileName;
      const newSize = listElement.querySelector(".images-list__item-size");
      newSize.textContent = fileSizeMB + " MB";
      imagesList.appendChild(listElement);
    }
  });
});
