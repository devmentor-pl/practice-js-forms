"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const fileEl = document.querySelector('input[type="file"]');
  const imagesList = document.querySelector(".images-list");
  const proto = document.querySelector(".images-list__item--prototype");

  fileEl.addEventListener("change", (e) => {
    const files = e.target.files;

    for (const file of files) {
      const clone = proto.cloneNode(true);
      clone.classList.remove("images-list__item--prototype");

      const header = clone.querySelector(".images-list__item-name");
      const img = clone.querySelector(".images-list__item-img");
      const footer = clone.querySelector(".images-list__item-size");

      header.textContent = file.name;
      img.src = URL.createObjectURL(file);
      footer.textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";

      imagesList.appendChild(clone);
    }
  });
});
