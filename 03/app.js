const init = function () {
    const inputFileEl = document.querySelector('input');
    if (inputFileEl) {
        inputFileEl.addEventListener(
            'change',
            handleChange
        );
    };
};

const handleChange = function (e) {
    const prototype = document.querySelector('.images-list__item--prototype');
    const filesList = Array.from(e.target.files);
    const ulEl = document.querySelector('.images-list');

    filesList.forEach(function (file) {
        if (file.type.includes('image')) {
            const liEl = prototype.cloneNode(true);
            const header = liEl.querySelector('header');
            const footer = liEl.querySelector('footer');
            const imageEl = liEl.querySelector('img');

            header.innerText = file.name;
            footer.innerText = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
            liEl.classList.remove('images-list__item--prototype');

            const reader = new FileReader();

            reader.addEventListener(
                'load',
                function (e) {
                    const image = e.target.result;
                    imageEl.src = image;
                    ulEl.appendChild(liEl);
                }
            );

            reader.readAsDataURL(file);
        } else {
            alert("The uploaded file named " + file.name + ' is not an image file!');
        };
    });
};

document.addEventListener(
    'DOMContentLoaded',
    init
);