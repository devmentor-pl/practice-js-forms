document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.querySelector("input[type='file']");
    const imagesList = document.querySelector(".images-list");
    const prototypeItem = document.querySelector(".images-list__item--prototype");

    fileInput.addEventListener("change", function (event) {
        const files = Array.from(event.target.files);

        files.forEach(file => {
            if (file.type.includes("image")) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const newItem = prototypeItem.cloneNode(true);
                    newItem.classList.remove("images-list__item--prototype");
                    newItem.style.display = "block";

                    newItem.querySelector(".images-list__item-name").textContent = file.name;
                    newItem.querySelector(".images-list__item-img").src = e.target.result;
                    newItem.querySelector(".images-list__item-size").textContent = (file.size / (1024 * 1024)).toFixed(2) + " MB";

                    imagesList.appendChild(newItem);
                };

                reader.readAsDataURL(file);
            }
        });
    });
});
