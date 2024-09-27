document.addEventListener("DOMContentLoaded", function () {
    const inputEl = document.querySelector("input");
    inputEl.addEventListener("change", handleChange);

    function handleChange(e) {
        const prototypeEl = document.querySelector(
            ".images-list__item--prototype"
        );
        const ulElement = document.querySelector(".images-list");
        console.log(e.target.files);
        const FilesList = Array.from(e.target.files);

        FilesList.forEach(function (file) {
            console.log(file);
            if (file.type.indexOf("image") >= 0) {
                const liElement = prototypeEl.cloneNode(true);
                const headerEl = liElement.querySelector("header");
                const footerEl = liElement.querySelector("footer");
                const imgEl = liElement.querySelector("img");
                headerEl.innerText = file.name;
                footerEl.innerText =
                    (file.size / (1024 * 1024)).toFixed(2) + "MB";
                liElement.classList.remove("images-list__item--prototype");
                ulElement.appendChild(liElement);

                const reader = new FileReader();

                reader.addEventListener("load", function readFile(e) {
                    const image = e.target.result;
                    imgEl.src = image;
                });
                reader.readAsDataURL(file);
            } else {
                alert("To nie jest plik JPG");
            }
        });
    }
});
