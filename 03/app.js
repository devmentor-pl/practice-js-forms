const fileInput = document.querySelector("input");
const imagesList = document.querySelector(".images-list");

fileInput.addEventListener("change", addFile);

function addFile(e) {
  const fileList = e.target.files;
  const fileListArray = [...fileList];

  fileListArray.forEach(function (file) {
    if (file && file.type.includes("image")) {
      console.log(file.name, file.type, file.size);
      const newImage = imagesList.firstElementChild.cloneNode(true);
      newImage.classList.remove("images-list__item--prototype");
      imagesList.appendChild(newImage);

      const reader = new FileReader();
      reader.onload = function (e) {
        newImage.querySelector(".images-list__item-img").src = e.target.result;
        newImage.querySelector(".images-list__item-name").innerText = file.name;
        newImage.querySelector(".images-list__item-size").innerText =
          (file.size / 1048576).toFixed(2) + "Mb";
      };
      reader.readAsDataURL(file);
    } else {
      alert("Wybrano nieprawidłowy format pliku");
    }
  });
}
