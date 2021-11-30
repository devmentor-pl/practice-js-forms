const fileInput = document.querySelector("input[type='file']");

const showFileData = function (e) {
  const file = e.target.files[0];
  const imgList = document.querySelector(".images-list");
  const imgListItem = document.querySelector(
    ".images-list__item.images-list__item--prototype"
  );

  if (file && file.type.includes("image")) {
    const reader = new FileReader();

    // prototype clone
    let listItemClone = imgListItem.cloneNode(true);

    // file data variables
    const fileName = file.name;
    const imgSrc = file.src;
    const fileSize = file.size;
    const fileSizeInMB = (fileSize / (1024 * 1024)).toFixed(2);

    // adding new photo function [loop]
    const addAnotherGraphicFile = function () {
      for (let i = 0; i < fileInput.files.length; i++) {
        imgList.appendChild(listItemClone);
        listItemClone.style.display = "block";

        reader.onload = function (readerEvent) {
          const newImg = document.createElement("img");
          newImg.src = readerEvent.target.result;
          listItemClone.children[0].innerText = fileName;
          listItemClone.children[1].src = newImg.src;
          listItemClone.children[2].innerText = `${fileSizeInMB} MB`;
        };

        reader.readAsDataURL(file);
      }
    };
    addAnotherGraphicFile();
  }

  if (file && !file.type.includes("image")) {
    alert("Wybrany plik nie jest grafiką! Wybierz proszę plik graficzny.");
  }
};

fileInput.addEventListener("change", showFileData);
