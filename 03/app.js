const imagesList = document.querySelector('.images-list');
const file = imagesList.previousElementSibling.querySelector('[type="file"]');

if (file) {
    file.addEventListener('change', (e) => {
        const files = [];
        files.push(e.target.files[0]);

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.includes('image')) {
                const image = imagesList.cloneNode(true);
                imagesList.parentNode.appendChild(image);
                image.querySelector('li').style.display = 'block';
                image.querySelector('header').textContent = files[i].name;
                image.querySelector('footer').textContent = files[i].size;

                const reader = new FileReader();
                reader.onload = function (e) {
                    image.querySelector('img').src = e.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            };
        };
    });
};