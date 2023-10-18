const input = document.querySelector("input[type='file']");
const imageList = document.querySelector(".images-list");
const imagePrototyp = document.querySelector(".images-list__item--prototype")


function addPicture(event) {

    const selectPicture = event.target.files;

    for (const file of selectPicture) {

        if (file.type.includes("image")) {
            const newItem = imagePrototyp.cloneNode(true);
            newItem.classList.remove("images-list__item--prototype");

            const itemNew = newItem.querySelector('.images-list__item-name')
            const itemSize = newItem.querySelector('.images-list__item-size')
            const itemImg = newItem.querySelector(".images-list__item-img")

            itemNew.textContent = file.name;
            itemSize.textContent = (file.size / 1024 / 1024).toFixed(2) + " MB";
      
            const reader = new FileReader();
            reader.onload = function(e) {
              itemImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
      
            imageList.appendChild(newItem);
        }
    }
}

input.addEventListener("change", addPicture)

